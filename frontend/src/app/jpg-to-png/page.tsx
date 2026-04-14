import { Metadata } from "next";
import ToolPageLayout from "@/components/ToolPageLayout";

export const metadata: Metadata = {
  title: "JPG to PNG Converter Online – Free, Instant, No Watermark",
  description: "Convert JPG and JPEG images to high-quality PNG format online for free. Supports transparency. No sign-up, no watermarks, no limits.",
  alternates: { canonical: "https://universalconvert.app/jpg-to-png" },
  openGraph: {
    title: "Free JPG to PNG Converter Online",
    description: "Convert JPG/JPEG to PNG with transparency support. Free, fast, no watermarks.",
    url: "https://universalconvert.app/jpg-to-png",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "JPG to PNG Converter",
  "operatingSystem": "Web",
  "applicationCategory": "UtilitiesApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

export default function JpgToPngPage() {
  return (
    <ToolPageLayout
      endpoint="jpg-to-png"
      acceptedFileTypes="image/jpeg,image/jpg,.jpg,.jpeg"
      title="JPG to PNG Converter"
      tagline="Convert JPG images to high-quality PNG format — free & instant"
      intro="PNG and JPG are the two most popular image formats on the web, each with distinct advantages. While JPG excels at compressing photographs, PNG provides lossless quality with support for transparent backgrounds — perfect for logos, icons, and web graphics. Our free JPG to PNG converter delivers pixel-perfect conversions while retaining full image detail."
      steps={[
        { title: "Upload Your JPG Image", desc: "Select or drag-and-drop any .jpg or .jpeg image file. Multiple megapixels and large files up to 50 MB are supported." },
        { title: "Convert to PNG", desc: "Click 'Convert File'. The image is converted losslessly to PNG format, meaning no quality is ever lost." },
        { title: "Download Your PNG", desc: "Download your PNG file. It's ready to use on websites, apps, presentations, or any design tool." },
      ]}
      supportedFormats={[".JPG", ".JPEG", "Progressive JPEG", "High-resolution photos"]}
      faqs={[
        { q: "Why convert JPG to PNG?", a: "PNG supports lossless compression and transparent backgrounds. It's better for logos, icons, screenshots, and images that require crisp edges." },
        { q: "Will I lose image quality?", a: "No. PNG is a lossless format, so the converted image retains 100% of the original pixel data from your JPG." },
        { q: "Does PNG support transparency?", a: "Yes, PNG natively supports transparent backgrounds (alpha channel). However, since JPG has no transparency, the background will remain solid white after conversion." },
        { q: "Is there a file size limit?", a: "The maximum file size for conversion is 50 MB, which handles even very high-resolution photographs." },
        { q: "Is the tool completely free?", a: "Yes. No hidden fees, no subscriptions, and no watermarks on the output image." },
        { q: "Can I use PNG images commercially?", a: "The converted file is entirely yours to use however you like, with no restrictions imposed by our tool." },
      ]}
      schemaJson={schema}
    />
  );
}
