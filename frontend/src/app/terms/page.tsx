import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | UniversalConvert",
  description: "Read the UniversalConvert Terms of Service to understand the rules and conditions for using our file conversion tools.",
  alternates: { canonical: "https://universalconvert.app/terms" },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-2 text-slate-900">Terms of Service</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: April 13, 2026</p>
      <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">1. Acceptance of Terms</h2>
          <p>By accessing or using the UniversalConvert website and its file conversion tools, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">2. Description of Service</h2>
          <p>UniversalConvert provides free, browser-based file conversion tools including but not limited to PDF conversion, image conversion, audio extraction, and file compression. All conversions are performed server-side and the results are made available for immediate download.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">3. Acceptable Use</h2>
          <p>You agree to use our services only for lawful purposes. You must not upload files that:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Contain illegal content, including but not limited to child exploitation material</li>
            <li>Infringe on the intellectual property rights of others</li>
            <li>Contain malware, viruses, or malicious code</li>
            <li>Violate privacy or data protection laws</li>
          </ul>
          <p className="mt-3">We reserve the right to terminate access to users who violate these terms.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">4. Intellectual Property</h2>
          <p>You retain all ownership rights to the files you upload. By uploading a file, you grant UniversalConvert a limited, non-exclusive, temporary license to process that file solely for the purpose of performing the requested conversion. This license expires immediately upon completion of the conversion and deletion of the file.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">5. Disclaimer of Warranties</h2>
          <p>Our services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied. We do not warrant that the service will be uninterrupted, error-free, or that the converted files will meet your specific requirements.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">6. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, UniversalConvert shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the service, even if we have been advised of the possibility of such damages.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">7. File Deletion</h2>
          <p>All uploaded files are automatically deleted from our servers within 30 minutes of processing. Users are responsible for downloading their converted files before this deletion window expires. We cannot recover deleted files.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">8. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the service following any changes constitutes acceptance of the revised terms.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">9. Contact</h2>
          <p>For questions about these terms: <strong>support@universalconvert.app</strong></p>
        </section>
      </div>
    </div>
  );
}
