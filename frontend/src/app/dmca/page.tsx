import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Policy | UniversalConvert",
  description: "UniversalConvert's DMCA policy for reporting copyright infringement and how we handle takedown notices.",
};

export default function DmcaPage() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-2 text-slate-900">DMCA Policy</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: April 13, 2026</p>
      <div className="space-y-8 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">Our Commitment to Copyright</h2>
          <p>UniversalConvert respects the intellectual property rights of others and expects its users to do the same. We comply with the Digital Millennium Copyright Act (DMCA) and respond promptly to valid copyright infringement notices.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">How to File a DMCA Notice</h2>
          <p>If you believe content on our website infringes your copyright, please send a DMCA takedown notice to our designated agent with the following information:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Your name, address, telephone number, and email address</li>
            <li>A description of the copyrighted work you claim has been infringed</li>
            <li>A description of the infringing material and its location on our website</li>
            <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner</li>
            <li>A statement that the information in the notice is accurate, and under penalty of perjury, that you are the copyright owner or authorized to act on their behalf</li>
            <li>Your physical or electronic signature</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">Important Note About User-Uploaded Files</h2>
          <p>UniversalConvert processes files uploaded by users for conversion purposes only. All uploaded files are <strong>automatically deleted within 30 minutes</strong> and are never permanently stored on our servers. We therefore cannot be held responsible for the momentary processing of files uploaded by users.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">Send DMCA Notices To</h2>
          <p>Email: <strong>support@universalconvert.app</strong><br />Subject line: <strong>DMCA Takedown Notice</strong></p>
          <p className="mt-3">We will respond to all valid DMCA notices within 72 hours.</p>
        </section>
      </div>
    </div>
  );
}
