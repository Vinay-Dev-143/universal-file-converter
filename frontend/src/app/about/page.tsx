import { Metadata } from "next";
import { Shield, Users, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | UniversalConvert – Free Online File Converter",
  description: "Learn about UniversalConvert — our mission, values, and the team behind the free online file conversion toolkit.",
  alternates: { canonical: "https://universalconvert.app/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4 text-slate-900">About UniversalConvert</h1>
      <p className="text-lg text-blue-600 font-medium mb-8">Making file conversion free, simple, and private for everyone.</p>

      <div className="space-y-8 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">Our Mission</h2>
          <p>UniversalConvert was built with a simple but powerful goal: give everyone access to high-quality, professional file conversion tools — completely free, without requiring an account, without watermarks, and without collecting your data.</p>
          <p className="mt-3">We believe that converting a PDF to Word, compressing an oversized file, or extracting audio from a video should never require expensive software or complex procedures. Our tools handle the complexity so you don't have to.</p>
        </section>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
          {[
            { icon: <Users className="w-6 h-6 text-blue-600" />, label: "100K+", sub: "Files Converted" },
            { icon: <Star className="w-6 h-6 text-yellow-500" />, label: "7", sub: "Free Tools" },
            { icon: <Shield className="w-6 h-6 text-green-600" />, label: "100%", sub: "Privacy Focused" },
            { icon: <Clock className="w-6 h-6 text-purple-600" />, label: "30 min", sub: "Auto-Delete" },
          ].map((s, i) => (
            <div key={i} className="text-center p-5 bg-white border rounded-xl shadow-sm">
              <div className="flex justify-center mb-2">{s.icon}</div>
              <p className="text-2xl font-bold text-slate-900">{s.label}</p>
              <p className="text-xs text-slate-500 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">What We Offer</h2>
          <p>Our toolkit currently includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>PDF to Word</strong> — Convert PDFs to editable DOCX files</li>
            <li><strong>Word to PDF</strong> — Turn Word documents into professional PDFs</li>
            <li><strong>Image to PDF</strong> — Convert JPG, PNG, and other images to PDF</li>
            <li><strong>JPG to PNG</strong> — Convert JPG images to lossless PNG format</li>
            <li><strong>Video to MP3</strong> — Extract audio from any video file</li>
            <li><strong>Audio Converter</strong> — Convert between MP3, WAV, OGG, and more</li>
            <li><strong>PDF Compressor</strong> — Reduce PDF file size without losing quality</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">Privacy First</h2>
          <p>Privacy is not an afterthought at UniversalConvert — it&apos;s the foundation. Every file you upload is processed over an encrypted HTTPS connection. We never read your files, never analyze their content, and never share them with third parties. All files are permanently and automatically deleted from our servers within 30 minutes.</p>
          <p className="mt-3">We don&apos;t require you to create an account. We don&apos;t ask for your email. We don&apos;t track what files you convert. Your work stays yours.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">Contact Us</h2>
          <p>We&apos;d love to hear your feedback or answer any questions. Reach us at <strong className="text-blue-700">support@universalconvert.app</strong></p>
        </section>
      </div>
    </div>
  );
}
