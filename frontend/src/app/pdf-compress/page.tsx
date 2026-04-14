import { Metadata } from "next";
import ToolPageLayout from "@/components/ToolPageLayout";

export const metadata: Metadata = {
  title: "Compress PDF Online – Reduce PDF File Size Free",
  description: "Compress PDF files online for free and reduce PDF file size without losing quality. Fast, secure, and no software required. Perfect for email attachments.",
  alternates: { canonical: "https://universalconvert.app/pdf-compress" },
  openGraph: { title: "Free PDF Compressor Online – Reduce PDF Size", url: "https://universalconvert.app/pdf-compress" },
};

export default function PdfCompressPage() {
  return (
    <ToolPageLayout
      endpoint="pdf-compress"
      acceptedFileTypes=".pdf,application/pdf"
      title="PDF Compressor"
      tagline="Reduce your PDF file size online — free, fast, and private"
      intro="Large PDF files can be difficult to email, upload, or share. Our PDF Compressor reduces the file size of your PDF by compressing content streams and removing redundant data, all while maintaining acceptable quality. Whether you're compressing a presentation, a report, or a form, our tool helps you shrink PDF files quickly and without any software installation."
      steps={[
        { title: "Upload Your PDF", desc: "Select the PDF you want to compress or drag it into the upload zone. Files up to 50 MB are supported." },
        { title: "Compress the PDF", desc: "Click 'Convert File'. The PDF content streams are compressed to reduce the overall file size." },
        { title: "Download Compressed PDF", desc: "Download your smaller PDF. The file is ready to email, upload, or store." },
      ]}
      supportedFormats={[".PDF", "PDF/A", "Multi-page PDF", "PDF with images", "PDF with text"]}
      faqs={[
        { q: "How much can I reduce a PDF file size?", a: "Compression results vary depending on the content. PDFs with large images can often be reduced by 30–70%. Text-only PDFs typically see smaller reductions." },
        { q: "Will the quality of the PDF be affected?", a: "For text-based PDFs, quality is not noticeably affected. Image-heavy PDFs may see slight quality reduction as part of compression." },
        { q: "Is there a limit on how many PDFs I can compress?", a: "No, you can compress as many PDFs as you need — there are no daily or monthly limits." },
        { q: "Is this tool free?", a: "Yes, completely free. No account, no payment, and no watermarks on the resulting PDF." },
        { q: "Are my PDF files kept private?", a: "Yes. All PDFs are processed over HTTPS and automatically deleted from our servers within 30 minutes." },
        { q: "Can I compress a password-protected PDF?", a: "Password-protected PDFs cannot be processed unless the password is removed first. We recommend using a separate PDF tool to remove the password before compressing." },
      ]}
    />
  );
}
