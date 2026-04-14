import os
import requests
from PyPDF2 import PdfWriter
from docx import Document
from PIL import Image
import numpy as np
from pydub.generators import Sine
import wave

API_BASE = "http://127.0.0.1:8000/convert"
TMP_DIR = "test_files"

os.makedirs(TMP_DIR, exist_ok=True)

print("--- Generating Test Files ---")
# 1. Create a dummy PDF
pdf_path = os.path.join(TMP_DIR, "test.pdf")
writer = PdfWriter()
writer.add_blank_page(width=72, height=72)
with open(pdf_path, "wb") as f:
    writer.write(f)

# 2. Create a dummy DOCX
docx_path = os.path.join(TMP_DIR, "test.docx")
doc = Document()
doc.add_paragraph("Hello world")
doc.save(docx_path)

# 3. Create a dummy JPG
jpg_path = os.path.join(TMP_DIR, "test.jpg")
img = Image.fromarray(np.uint8(np.random.rand(100, 100, 3) * 255))
img.save(jpg_path, "JPEG")

# 4. Create a dummy WAV (Audio)
wav_path = os.path.join(TMP_DIR, "test.wav")
with wave.open(wav_path, "wb") as f:
    f.setnchannels(1)
    f.setsampwidth(2)
    f.setframerate(44100)
    f.writeframes(b'\x00\x00' * 44100)


def test_endpoint(endpoint, file_path, field_name="file", extra_data=None):
    url = f"{API_BASE}/{endpoint}"
    print(f"Testing {url} with {file_path}...")
    try:
        with open(file_path, "rb") as f:
            files = {field_name: (os.path.basename(file_path), f)}
            res = requests.post(url, files=files, data=extra_data)
            if res.status_code == 200:
                print(f"[OK] {endpoint}")
                return True
            else:
                print(f"[FAILED] {endpoint}: {res.status_code} - {res.text}")
                return False
    except Exception as e:
         print(f"[ERROR] {endpoint}: {e}")
         return False

print("\n--- Running Tests ---")
test_endpoint("pdf-to-word", pdf_path)
test_endpoint("word-to-pdf", docx_path)
test_endpoint("image-to-pdf", jpg_path)
test_endpoint("jpg-to-png", jpg_path)
test_endpoint("audio-convert", wav_path, extra_data={"target_format": "mp3"})
test_endpoint("pdf-compress", pdf_path)

# Cleanup
print("\nTests finished.")
