import { Shield, CheckCircle, Clock, Lock, HelpCircle, FileText, ChevronDown } from "lucide-react";
import ConversionForm from "@/components/ConversionForm";
import { Card, CardContent } from "@/components/ui/card";

interface FAQ { q: string; a: string; }
interface Step { title: string; desc: string; }

interface ToolPageLayoutProps {
  title: string;
  tagline: string;
  intro: string;
  endpoint: string;
  acceptedFileTypes: string;
  targetFormat?: string;
  steps: Step[];
  supportedFormats: string[];
  faqs: FAQ[];
  schemaJson?: object;
}

export default function ToolPageLayout({
  title, tagline, intro, endpoint, acceptedFileTypes, targetFormat,
  steps, supportedFormats, faqs, schemaJson,
}: ToolPageLayoutProps) {
  return (
    <>
      {/* JSON-LD Schema */}
      {schemaJson && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
      )}

      {/* ── Hero ── */}
      <section className="text-center py-10 mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">{title}</h1>
        <p className="text-lg text-blue-600 font-medium mb-4">{tagline}</p>
        <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">{intro}</p>
      </section>

      {/* ── Top Ad Placeholder ── */}
      <div className="w-full max-w-[728px] mx-auto h-[90px] bg-slate-100 border border-dashed rounded-lg flex items-center justify-center text-slate-400 text-xs uppercase font-bold mb-8">
        Advertisement
      </div>

      {/* ── Conversion Form ── */}
      <ConversionForm
        endpoint={endpoint}
        acceptedFileTypes={acceptedFileTypes}
        title={title}
        description={tagline}
        targetFormat={targetFormat}
      />

      {/* ── Ad Below Upload ── */}
      <div className="w-full max-w-[728px] mx-auto h-[90px] bg-slate-100 border border-dashed rounded-lg flex items-center justify-center text-slate-400 text-xs uppercase font-bold my-10">
        Advertisement
      </div>

      {/* ── Trust Signals ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 max-w-3xl mx-auto">
        {[
          { icon: <Shield className="w-5 h-5 text-blue-600" />, label: "SSL Encrypted", sub: "All uploads secured" },
          { icon: <Clock className="w-5 h-5 text-green-600" />, label: "Auto-Deleted", sub: "Files gone in 30 min" },
          { icon: <Lock className="w-5 h-5 text-purple-600" />, label: "Private & Safe", sub: "No data stored" },
          { icon: <CheckCircle className="w-5 h-5 text-orange-600" />, label: "100% Free", sub: "No account needed" },
        ].map((t, i) => (
          <Card key={i} className="text-center p-4 border-slate-200">
            <div className="flex justify-center mb-2">{t.icon}</div>
            <p className="font-semibold text-sm text-slate-800">{t.label}</p>
            <p className="text-xs text-slate-500 mt-1">{t.sub}</p>
          </Card>
        ))}
      </div>

      {/* ── How It Works ── */}
      <section className="my-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">How to Use This Tool</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-xl border shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg mb-4">
                {i + 1}
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Supported Formats ── */}
      <section className="my-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">Supported File Formats</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {supportedFormats.map((fmt) => (
            <span key={fmt} className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700">
              {fmt}
            </span>
          ))}
        </div>
      </section>

      {/* ── Mid-Page Ad ── */}
      <div className="w-full max-w-[728px] mx-auto h-[90px] bg-slate-100 border border-dashed rounded-lg flex items-center justify-center text-slate-400 text-xs uppercase font-bold my-10">
        Advertisement
      </div>

      {/* ── Privacy Statement ── */}
      <section className="my-12 max-w-3xl mx-auto">
        <div className="p-6 bg-green-50 border border-green-200 rounded-xl flex gap-4">
          <FileText className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h2 className="font-bold text-green-900 mb-2">Your File Privacy & Security</h2>
            <p className="text-sm text-green-800 leading-relaxed">
              All files uploaded to UniversalConvert are processed over an encrypted HTTPS connection.
              Your files are <strong>never shared with third parties</strong>, never used for advertising,
              and never stored permanently. Every uploaded file is <strong>automatically and permanently
              deleted from our servers within 30 minutes</strong> of conversion, regardless of outcome.
              We do not log file contents or metadata beyond what is required for processing.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="my-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border rounded-xl bg-white shadow-sm overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-5 font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  {faq.q}
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-5 pb-5 pt-2 text-sm text-slate-600 leading-relaxed border-t">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
