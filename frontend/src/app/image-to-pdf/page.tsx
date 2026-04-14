import { Metadata } from "next";
import ToolPageLayout from "@/components/ToolPageLayout";

export const metadata: Metadata = {
  title: "Image to PDF Converter – Convert JPG, PNG to PDF Free Online",
  description: "Convert any image (JPG, PNG, BMP, GIF, WEBP) to a PDF document online for free. Fast, private, and no watermarks. Perfect for sharing photos as documents.",
  alternates: { canonical: "https://universalconvert.app/image-to-pdf" },
  openGraph: { title: "Free Image to PDF Converter Online", url: "https://universalconvert.app/image-to-pdf" },
};

export default function ImageToPdfPage() {
  return (
    <ToolPageLayout
      endpoint="image-to-pdf"
      acceptedFileTypes="image/*"
      title="Image to PDF Converter"
      tagline="Convert any image into a PDF document — free and secure"
      intro="Need to send a photo as a document? Our Image to PDF converter transforms any image file — JPG, PNG, BMP, GIF, or WebP — into a clean, professional PDF in seconds. Whether you're scanning receipts, sharing photos with clients, or compiling screenshots for a report, this tool makes it effortless."
      steps={[
        { title: "Upload Your Image", desc: "Select any image file (JPG, PNG, BMP, GIF, WEBP) up to 50 MB or drag it into the upload area." },
        { title: "Convert Image to PDF", desc: "Click 'Convert File'. Your image is embedded into a standard A4 PDF at 100 DPI resolution." },
        { title: "Download Your PDF", desc: "Download and share your PDF — it's viewable on any device that has a PDF reader." },
      ]}
      supportedFormats={[".JPG / .JPEG", ".PNG", ".BMP", ".GIF", ".WEBP", ".TIFF"]}
      faqs={[
        { q: "What image formats can be converted to PDF?", a: "We support JPG, JPEG, PNG, BMP, GIF, WebP, and TIFF formats." },
        { q: "Will the image quality be maintained in the PDF?", a: "Yes. The image is embedded at its original resolution. Very high-resolution images may scale to fit a standard page." },
        { q: "Can I combine multiple images into one PDF?", a: "Currently the tool converts one image per conversion. Multi-image PDF is a feature planned for a future version." },
        { q: "Is the PDF output standard and universally readable?", a: "Yes. The output is a standard PDF that is compatible with Adobe Reader, Preview on Mac, Google Chrome, and all mobile PDF viewers." },
        { q: "Is this tool free?", a: "Yes, completely free. No sign-up, no payment, no watermarks." },
      ]}
    />
  );
}
