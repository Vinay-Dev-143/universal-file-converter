import { Metadata } from "next";
import ToolPageLayout from "@/components/ToolPageLayout";

export const metadata: Metadata = {
  title: "Free PDF to Word Converter Online | Convert PDF to DOCX Instantly",
  description: "Convert PDF to Word (DOCX) for free online. No sign-up required. Preserve formatting, tables, and images. Fast, secure, and easy to use.",
  alternates: { canonical: "https://universalconvert.app/pdf-to-word" },
  openGraph: {
    title: "Free PDF to Word Converter Online",
    description: "Convert PDF to editable Word documents in seconds. Free, private, and no watermarks.",
    url: "https://universalconvert.app/pdf-to-word",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PDF to Word Converter",
  "operatingSystem": "Web",
  "applicationCategory": "UtilitiesApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Convert PDF to Word DOCX online for free. Fast and secure.",
};

export default function PdfToWordPage() {
  return (
    <ToolPageLayout
      endpoint="pdf-to-word"
      acceptedFileTypes=".pdf,application/pdf"
      title="PDF to Word Converter"
      tagline="Convert PDF to editable DOCX files — free and instant"
      intro="Need to edit a PDF? Our free PDF to Word converter transforms your PDF documents into fully editable Microsoft Word (.docx) files in seconds. Whether it's a scanned report, a contract, or a simple document, we preserve the original layout, fonts, tables, and images so you can edit without retyping a single word."
      steps={[
        { title: "Upload Your PDF", desc: "Click 'Select File' or drag and drop your PDF document into the upload area. Files up to 50 MB are supported." },
        { title: "Convert to DOCX", desc: "Click 'Convert File'. Our engine processes your PDF and extracts text, tables, and images while preserving the original formatting." },
        { title: "Download Your Word File", desc: "Once conversion is complete, click the Download button. Your DOCX file is ready to open and edit in Microsoft Word or Google Docs." },
      ]}
      supportedFormats={["PDF", "PDF/A", "Scanned PDF (text-based)", "Multi-page PDF"]}
      faqs={[
        { q: "Is the PDF to Word converter free?", a: "Yes, completely free. No account, subscription, or payment is required. Simply upload and convert." },
        { q: "Will the formatting be preserved?", a: "Our converter does its best to maintain the original layout including fonts, tables, columns, and images. Complex PDFs with heavy graphics may have minor differences." },
        { q: "Can I convert scanned PDFs?", a: "Yes, for text-based PDFs the conversion is very accurate. Purely image-based scans may require OCR, which is not currently included." },
        { q: "Is my PDF file safe?", a: "Absolutely. Your file is uploaded over HTTPS, processed in an isolated environment, and automatically deleted from our servers within 30 minutes." },
        { q: "What is the maximum file size?", a: "You can upload files up to 50 MB. For larger files, consider compressing the PDF first using our PDF Compressor tool." },
        { q: "Can I use the converted Word file commercially?", a: "Yes. The converted file belongs entirely to you. There are no watermarks or restrictions on the output file." },
      ]}
      schemaJson={schema}
    />
  );
}
