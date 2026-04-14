import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | UniversalConvert",
  description: "Read the UniversalConvert disclaimer regarding the accuracy, reliability, and use of our file conversion tools and content.",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-2 text-slate-900">Disclaimer</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: April 13, 2026</p>
      <div className="space-y-8 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">No Guarantees on Accuracy</h2>
          <p>The information and tools provided on UniversalConvert are offered &quot;as is&quot; without any guarantee of accuracy, completeness, or fitness for a particular purpose. File conversion is a complex process, and output quality may vary depending on the source file, its content, and its formatting.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">Tool Limitations</h2>
          <p>Our conversion tools may not produce perfect results for all files. Complex PDFs, heavily formatted Word documents, or unusual media encodings may result in imperfect conversions. We recommend reviewing all converted files before use in professional or critical contexts.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">No Professional Advice</h2>
          <p>Nothing on this website constitutes legal, financial, or professional advice. Our blog articles and guides are for informational purposes only.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">External Links</h2>
          <p>Our website may contain links to external websites. UniversalConvert has no control over the content or privacy practices of those sites and accepts no responsibility for them.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">Contact</h2>
          <p>Questions? Email us at <strong>support@universalconvert.app</strong></p>
        </section>
      </div>
    </div>
  );
}
