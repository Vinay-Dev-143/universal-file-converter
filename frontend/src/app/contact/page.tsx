"use client";

import { Mail, MessageSquare, Clock } from "lucide-react";



export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4 text-slate-900">Contact Us</h1>
      <p className="text-lg text-slate-600 mb-10">Have a question, found a bug, or want to suggest a new tool? We&apos;d love to hear from you.</p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: <Mail className="w-6 h-6 text-blue-600" />, title: "Email Support", sub: "support@universalconvert.app", desc: "For general questions and support" },
          { icon: <MessageSquare className="w-6 h-6 text-green-600" />, title: "Bug Reports", sub: "bugs@universalconvert.app", desc: "Report conversion errors or technical issues" },
          { icon: <Clock className="w-6 h-6 text-purple-600" />, title: "Response Time", sub: "Within 24–48 hours", desc: "We respond to all emails on business days" },
        ].map((c, i) => (
          <div key={i} className="p-6 bg-white border rounded-xl shadow-sm text-center">
            <div className="flex justify-center mb-3">{c.icon}</div>
            <h3 className="font-semibold text-slate-800 mb-1">{c.title}</h3>
            <p className="text-sm font-medium text-blue-700 mb-1">{c.sub}</p>
            <p className="text-xs text-slate-500">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-6 text-slate-900">Send Us a Message</h2>
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
              <input type="text" className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input type="email" className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="you@email.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="How can we help?" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
            <textarea rows={5} className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none" placeholder="Describe your question or issue in detail…" />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 transition-colors">
            Send Message
          </button>
          <p className="text-xs text-slate-400 text-center">We typically respond within 24–48 business hours.</p>
        </form>
      </div>
    </div>
  );
}
