import { Metadata } from "next";
import ToolPageLayout from "@/components/ToolPageLayout";

export const metadata: Metadata = {
  title: "Word to PDF Converter Online – Convert DOCX to PDF Free",
  description: "Convert Word documents (DOC, DOCX) to PDF online for free. Preserve all formatting, fonts, and images. Instant and secure — no email required.",
  alternates: { canonical: "https://universalconvert.app/word-to-pdf" },
  openGraph: {
    title: "Free Word to PDF Converter Online",
    description: "Convert DOCX to PDF in seconds with formatting preserved. Free, secure, no watermarks.",
    url: "https://universalconvert.app/word-to-pdf",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Word to PDF Converter",
  "operatingSystem": "Web",
  "applicationCategory": "UtilitiesApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

export default function WordToPdfPage() {
  return (
    <ToolPageLayout
      endpoint="word-to-pdf"
      acceptedFileTypes=".docx,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      title="Word to PDF Converter"
      tagline="Turn Word documents into professional PDFs instantly"
      intro="Share your Word documents as professional, unforgeable PDFs with a single click. Our free Word to PDF converter handles .doc and .docx files while preserving every heading, paragraph, table, and image exactly as intended. PDFs are universally readable on any device, making them the gold standard for sharing documents professionally."
      steps={[
        { title: "Upload Your Word File", desc: "Drag and drop your .doc or .docx file, or click 'Select File'. Up to 50 MB supported." },
        { title: "Convert to PDF", desc: "Hit 'Convert File'. The document is processed server-side and converted to a PDF with full formatting retained." },
        { title: "Download Your PDF", desc: "Click Download to save your PDF. Open it in any PDF reader — it's ready to share or print." },
      ]}
      supportedFormats={[".DOCX (Word 2007+)", ".DOC (Word 97–2003)", "Microsoft Word formats"]}
      faqs={[
        { q: "Is this Word to PDF tool free?", a: "Yes, 100% free with no hidden costs. You do not need to sign up or provide an email address." },
        { q: "Will my formatting stay intact?", a: "Yes. Headings, fonts, tables, images, page breaks, bullet points and margins are all preserved in the converted PDF." },
        { q: "Can I convert multiple files at once?", a: "Currently, conversions are processed one file at a time. Batch conversion is planned for a future update." },
        { q: "Are my Word documents private?", a: "Yes. Files are encrypted during transfer and automatically deleted from our servers within 30 minutes of conversion." },
        { q: "What if my converted PDF looks different?", a: "Minor differences can occur with custom fonts not embedded in the original file. Using standard fonts like Arial or Times New Roman gives the best results." },
      ]}
      schemaJson={schema}
    />
  );
}
