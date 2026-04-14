import os
import sys
import traceback
from fastapi import APIRouter, File, UploadFile, BackgroundTasks, HTTPException
from fastapi.responses import FileResponse
from services.file_service import get_temp_file_path, save_upload_file, cleanup_file

# ── FFmpeg: use bundled binary from imageio_ffmpeg (no system install needed) ──
try:
    import imageio_ffmpeg
    _FFMPEG_EXE = imageio_ffmpeg.get_ffmpeg_exe()
    os.environ["FFMPEG_BINARY"] = _FFMPEG_EXE
    os.environ["PATH"] = os.path.dirname(_FFMPEG_EXE) + os.pathsep + os.environ.get("PATH", "")
except Exception:
    _FFMPEG_EXE = "ffmpeg"

# ── Fix missing audioop / pyaudioop for Python 3.13+ ──
try:
    import audioop                          # built-in on CPython ≤ 3.12
    sys.modules.setdefault("pyaudioop", audioop)
except ImportError:
    try:
        import audioop_lts as audioop       # audioop-lts back-port
        sys.modules["audioop"] = audioop
        sys.modules["pyaudioop"] = audioop
    except ImportError:
        pass

from pdf2docx import Converter
from PIL import Image
from pydub import AudioSegment
from pydub.utils import mediainfo
from PyPDF2 import PdfReader, PdfWriter

# Make pydub use the bundled ffmpeg exe
AudioSegment.converter = _FFMPEG_EXE
AudioSegment.ffmpeg    = _FFMPEG_EXE
AudioSegment.ffprobe   = _FFMPEG_EXE.replace("ffmpeg", "ffprobe") if "ffmpeg" in _FFMPEG_EXE else "ffprobe"

router = APIRouter()

# ─────────────────────────── PDF → WORD ──────────────────────────────────────
@router.post("/pdf-to-word")
async def convert_pdf_to_word(background_tasks: BackgroundTasks, file: UploadFile = File(...)):
    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Provided file is not a PDF")

    pdf_path  = get_temp_file_path(file.filename)
    docx_path = get_temp_file_path("output.docx")
    save_upload_file(file, pdf_path)

    try:
        cv = Converter(pdf_path)
        cv.convert(docx_path, start=0, end=None)
        cv.close()
    except Exception as e:
        cleanup_file(pdf_path); cleanup_file(docx_path)
        raise HTTPException(status_code=500, detail=f"Conversion failed: {e}")

    background_tasks.add_task(cleanup_file, pdf_path)
    background_tasks.add_task(cleanup_file, docx_path)
    return FileResponse(
        docx_path,
        media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        filename=file.filename.replace(".pdf", ".docx"),
    )


# ─────────────────────────── WORD → PDF ──────────────────────────────────────
@router.post("/word-to-pdf")
async def convert_word_to_pdf(background_tasks: BackgroundTasks, file: UploadFile = File(...)):
    fname = file.filename.lower()
    if not (fname.endswith(".docx") or fname.endswith(".doc")):
        raise HTTPException(status_code=400, detail="Provided file is not a Word document")

    docx_path = get_temp_file_path(file.filename)
    pdf_path  = get_temp_file_path("output.pdf")
    save_upload_file(file, docx_path)

    converted = False

    # ── Attempt 1: docx2pdf (requires MS Word on Windows) ──
    try:
        from docx2pdf import convert as d2p
        d2p(docx_path, pdf_path)
        if os.path.exists(pdf_path) and os.path.getsize(pdf_path) > 0:
            converted = True
    except Exception as e1:
        print(f"docx2pdf failed: {e1}")

    # ── Attempt 2: LibreOffice (if installed) ──
    if not converted:
        try:
            import subprocess
            from pathlib import Path
            lo_paths = [
                "soffice",
                r"C:\Program Files\LibreOffice\program\soffice.exe",
                r"C:\Program Files (x86)\LibreOffice\program\soffice.exe",
            ]
            out_dir = os.path.dirname(docx_path)
            for lo in lo_paths:
                try:
                    subprocess.run(
                        [lo, "--headless", "--convert-to", "pdf", docx_path, "--outdir", out_dir],
                        check=True, capture_output=True, timeout=60,
                    )
                    gen = Path(out_dir) / (Path(docx_path).stem + ".pdf")
                    if gen.exists():
                        os.rename(str(gen), pdf_path)
                        converted = True
                        break
                except Exception:
                    continue
        except Exception as e2:
            print(f"LibreOffice failed: {e2}")

    # ── Attempt 3: pure-Python fallback via python-docx + reportlab ──
    if not converted:
        try:
            from docx import Document as DocxDocument
            from reportlab.lib.pagesizes import A4
            from reportlab.lib.styles import getSampleStyleSheet
            from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
            from reportlab.lib.units import mm

            doc   = DocxDocument(docx_path)
            rl_doc = SimpleDocTemplate(pdf_path, pagesize=A4,
                                       leftMargin=20*mm, rightMargin=20*mm,
                                       topMargin=20*mm,  bottomMargin=20*mm)
            styles  = getSampleStyleSheet()
            story   = []
            for para in doc.paragraphs:
                text = para.text.strip()
                if text:
                    style = styles["Heading1"] if para.style.name.startswith("Heading") else styles["Normal"]
                    story.append(Paragraph(text, style))
                    story.append(Spacer(1, 4))
            if not story:
                story.append(Paragraph("(empty document)", styles["Normal"]))
            rl_doc.build(story)
            converted = True
        except Exception as e3:
            print(f"reportlab fallback failed: {e3}")

    if not converted or not os.path.exists(pdf_path):
        cleanup_file(docx_path)
        raise HTTPException(
            status_code=500,
            detail="Word to PDF conversion failed. Could not use MS Word, LibreOffice, or python fallback.",
        )

    background_tasks.add_task(cleanup_file, docx_path)
    background_tasks.add_task(cleanup_file, pdf_path)
    out_name = file.filename.replace(".docx", ".pdf").replace(".doc", ".pdf")
    return FileResponse(pdf_path, media_type="application/pdf", filename=out_name)


# ─────────────────────────── IMAGE → PDF ─────────────────────────────────────
@router.post("/image-to-pdf")
async def convert_image_to_pdf(background_tasks: BackgroundTasks, file: UploadFile = File(...)):
    img_path = get_temp_file_path(file.filename)
    pdf_path = get_temp_file_path("output.pdf")
    save_upload_file(file, img_path)

    try:
        image = Image.open(img_path)
        if image.mode in ("RGBA", "P", "LA"):
            image = image.convert("RGB")
        image.save(pdf_path, "PDF", resolution=100.0)
    except Exception as e:
        cleanup_file(img_path); cleanup_file(pdf_path)
        raise HTTPException(status_code=500, detail=str(e))

    background_tasks.add_task(cleanup_file, img_path)
    background_tasks.add_task(cleanup_file, pdf_path)
    return FileResponse(pdf_path, media_type="application/pdf",
                        filename=os.path.splitext(file.filename)[0] + ".pdf")


# ─────────────────────────── JPG → PNG ───────────────────────────────────────
@router.post("/jpg-to-png")
async def convert_jpg_to_png(background_tasks: BackgroundTasks, file: UploadFile = File(...)):
    img_path = get_temp_file_path(file.filename)
    png_path = get_temp_file_path("output.png")
    save_upload_file(file, img_path)

    try:
        image = Image.open(img_path)
        image.save(png_path, "PNG")
    except Exception as e:
        cleanup_file(img_path); cleanup_file(png_path)
        raise HTTPException(status_code=500, detail=str(e))

    background_tasks.add_task(cleanup_file, img_path)
    background_tasks.add_task(cleanup_file, png_path)
    return FileResponse(png_path, media_type="image/png",
                        filename=os.path.splitext(file.filename)[0] + ".png")


# ─────────────────────────── VIDEO → MP3 ─────────────────────────────────────
@router.post("/video-to-mp3")
async def convert_video_to_mp3(background_tasks: BackgroundTasks, file: UploadFile = File(...)):
    video_path = get_temp_file_path(file.filename)
    mp3_path   = get_temp_file_path("output.mp3")
    save_upload_file(file, video_path)

    try:
        import subprocess
        result = subprocess.run(
            [_FFMPEG_EXE, "-y", "-i", video_path, "-q:a", "0", "-map", "a", mp3_path],
            capture_output=True, text=True, timeout=300,
        )
        if result.returncode != 0:
            raise RuntimeError(result.stderr[-500:])
    except Exception as e:
        cleanup_file(video_path); cleanup_file(mp3_path)
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Video to MP3 failed: {e}")

    background_tasks.add_task(cleanup_file, video_path)
    background_tasks.add_task(cleanup_file, mp3_path)
    return FileResponse(mp3_path, media_type="audio/mpeg",
                        filename=os.path.splitext(file.filename)[0] + ".mp3")


# ─────────────────────────── AUDIO CONVERT ───────────────────────────────────
@router.post("/audio-convert")
async def audio_convert(
    background_tasks: BackgroundTasks,
    target_format: str = "mp3",
    file: UploadFile = File(...),
):
    audio_path = get_temp_file_path(file.filename)
    out_path   = get_temp_file_path(f"output.{target_format}")
    save_upload_file(file, audio_path)

    try:
        import subprocess
        result = subprocess.run(
            [_FFMPEG_EXE, "-y", "-i", audio_path, out_path],
            capture_output=True, text=True, timeout=120,
        )
        if result.returncode != 0:
            raise RuntimeError(result.stderr[-500:])
    except Exception as e:
        cleanup_file(audio_path); cleanup_file(out_path)
        raise HTTPException(status_code=500, detail=f"Audio conversion failed: {e}")

    background_tasks.add_task(cleanup_file, audio_path)
    background_tasks.add_task(cleanup_file, out_path)
    return FileResponse(
        out_path,
        media_type=f"audio/{target_format}",
        filename=f"{os.path.splitext(file.filename)[0]}.{target_format}",
    )


# ─────────────────────────── PDF COMPRESS ────────────────────────────────────
@router.post("/pdf-compress")
async def compress_pdf(background_tasks: BackgroundTasks, file: UploadFile = File(...)):
    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Provided file is not a PDF")

    pdf_path        = get_temp_file_path(file.filename)
    compressed_path = get_temp_file_path("compressed.pdf")
    save_upload_file(file, pdf_path)

    try:
        reader = PdfReader(pdf_path)
        writer = PdfWriter()
        for page in reader.pages:
            page.compress_content_streams()
            writer.add_page(page)
        with open(compressed_path, "wb") as f:
            writer.write(f)
    except Exception as e:
        cleanup_file(pdf_path); cleanup_file(compressed_path)
        raise HTTPException(status_code=500, detail=str(e))

    background_tasks.add_task(cleanup_file, pdf_path)
    background_tasks.add_task(cleanup_file, compressed_path)
    return FileResponse(compressed_path, media_type="application/pdf",
                        filename=f"compressed_{file.filename}")
