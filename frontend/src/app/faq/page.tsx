import { Metadata } from "next";
import { HelpCircle, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | UniversalConvert",
  description: "Find answers to the most common questions about UniversalConvert — file privacy, supported formats, upload limits, and more.",
  alternates: { canonical: "https://universalconvert.app/faq" },
};

const generalFaqs = [
  { q: "Is UniversalConvert free to use?", a: "Yes, completely free. All tools on UniversalConvert are available without creating an account or paying any fee. There are no hidden charges." },
  { q: "Do I need to create an account?", a: "No. All conversions work without registration. Simply upload your file, convert, and download." },
  { q: "What is the maximum file size I can upload?", a: "The current maximum file size per conversion is 50 MB. This is sufficient for most documents, images, and audio files." },
  { q: "How are my files protected?", a: "All file transfers are encrypted using HTTPS/TLS. Files are processed in an isolated environment and automatically deleted from our servers within 30 minutes of conversion." },
  { q: "Do you store my files permanently?", a: "No. Files are automatically and permanently deleted within 30 minutes, regardless of whether the conversion succeeds or fails. We do not maintain any file archive." },
  { q: "Who can see my uploaded files?", a: "Nobody. Your files are processed by our automated system only. No human ever views your file content. We never share files with third parties." },
  { q: "Can I convert files on my phone?", a: "Yes. UniversalConvert is fully mobile-responsive and works on smartphones and tablets in any modern browser." },
  { q: "Why is my conversion taking a long time?", a: "Larger files, particularly videos and high-resolution PDFs, take longer to process. If your conversion takes more than 2 minutes, please try again with a smaller file." },
  { q: "What browsers are supported?", a: "We support all modern browsers: Chrome, Firefox, Safari, Edge, and Opera on desktop and mobile." },
  { q: "Can I use UniversalConvert for commercial purposes?", a: "Yes. The converted files are entirely yours to use for personal or commercial projects. We place no restrictions on the output files." },
];

export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <div className="text-center mb-12">
        <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-3 text-slate-900">Frequently Asked Questions</h1>
        <p className="text-slate-600">Everything you need to know about UniversalConvert.</p>
      </div>
      <div className="space-y-3">
        {generalFaqs.map((faq, i) => (
          <details key={i} className="group border rounded-xl bg-white shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center cursor-pointer p-5 font-semibold text-slate-800 hover:bg-slate-50 transition-colors list-none">
              <span>{faq.q}</span>
              <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
      <div className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-xl text-center">
        <p className="text-slate-700 mb-2">Still have a question?</p>
        <a href="/contact" className="text-blue-600 font-semibold hover:underline">Contact our support team →</a>
      </div>
    </div>
  );
}
