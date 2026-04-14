import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | UniversalConvert",
  description: "Read the UniversalConvert Privacy Policy to understand how we handle your files, data, and personal information.",
  alternates: { canonical: "https://universalconvert.app/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-2 text-slate-900">Privacy Policy</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: April 13, 2026</p>
      <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">1. Introduction</h2>
          <p>Welcome to UniversalConvert (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have regarding your data when you use our website at universalconvert.app.</p>
          <p>By using our services, you agree to the collection and use of information in accordance with this policy.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">2. Information We Collect</h2>
          <h3 className="text-lg font-semibold mt-4 mb-2">Files You Upload</h3>
          <p>When you use our file conversion tools, you upload files to our servers for processing. These files are processed solely for the purpose of completing the requested conversion. <strong>We do not read, analyze, share, or store the content of your files.</strong> All uploaded files are automatically and permanently deleted from our servers within 30 minutes of conversion, regardless of whether the conversion succeeded or failed.</p>
          <h3 className="text-lg font-semibold mt-4 mb-2">Log Data</h3>
          <p>Like most websites, we collect standard server log data when you visit our site. This may include your IP address, browser type and version, the pages you visit, time and date of your visit, and your internet service provider. This data is used solely for security monitoring and operational analytics.</p>
          <h3 className="text-lg font-semibold mt-4 mb-2">Cookies</h3>
          <p>We use essential cookies to ensure the site functions correctly. We may also use analytics cookies (such as Google Analytics) to understand how visitors use our site in aggregate. You can disable cookies through your browser settings, though some site features may be affected.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and operate our file conversion services</li>
            <li>To monitor and improve the performance, security, and reliability of our service</li>
            <li>To display relevant advertisements through ad networks such as Google AdSense</li>
            <li>To comply with legal obligations</li>
          </ul>
          <p className="mt-3">We do <strong>not</strong> sell, rent, or trade your personal data with third parties for marketing purposes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">4. Advertising</h2>
          <p>We use Google AdSense to display advertisements on our website. Google uses cookies to serve ads based on users' prior visits to our website or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">5. Security</h2>
          <p>All data transferred between your browser and our servers is encrypted using HTTPS/TLS. We implement industry-standard security measures for our servers and infrastructure. However, no method of transmission over the internet is 100% secure.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">6. Your Rights</h2>
          <p>Since we do not store personal data beyond log files, most rights related to data access and deletion are automatically satisfied. If you have any concerns, please contact us at <strong>support@universalconvert.app</strong>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">7. Children&apos;s Privacy</h2>
          <p>Our service is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of changes by posting the new policy on this page with an updated date. We encourage you to review this page periodically.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:<br />
            <strong>Email:</strong> support@universalconvert.app
          </p>
        </section>
      </div>
    </div>
  );
}
