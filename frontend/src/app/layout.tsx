import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";
import { Shield, Mail, Lock } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Universal File Converter – Free Online PDF, Image & Audio Tools",
    template: "%s | UniversalConvert",
  },
  description: "Free online file conversion tools. Convert PDF to Word, JPG to PNG, compress PDFs, and extract audio from video – all in your browser, instantly.",
  keywords: ["file converter", "pdf to word", "jpg to png", "compress pdf", "free online converter"],
  metadataBase: new URL("https://universalconvert.app"),
  openGraph: {
    siteName: "UniversalConvert",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#tools", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const toolLinks = [
  { href: "/pdf-to-word", label: "PDF to Word" },
  { href: "/word-to-pdf", label: "Word to PDF" },
  { href: "/image-to-pdf", label: "Image to PDF" },
  { href: "/jpg-to-png", label: "JPG to PNG" },
  { href: "/video-to-mp3", label: "Video to MP3" },
  { href: "/audio-convert", label: "Audio Converter" },
  { href: "/pdf-compress", label: "Compress PDF" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/dmca", label: "DMCA Policy" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-50 flex flex-col">
          {/* ── Header ── */}
          <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur shadow-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
              <Link href="/" className="font-bold text-xl tracking-tight">
                Universal<span className="text-blue-600">Convert</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                {navLinks.map(l => (
                  <Link key={l.href} href={l.href} className="transition-colors hover:text-blue-600 text-slate-600">
                    {l.label}
                  </Link>
                ))}
              </nav>
              {/* Mobile nav hint */}
              <div className="md:hidden text-sm text-slate-500 font-medium">Menu</div>
            </div>
          </header>

          {/* ── Trust Bar ── */}
          <div className="bg-blue-600 text-white text-xs py-2 text-center">
            <span className="flex items-center justify-center gap-4 flex-wrap px-4">
              <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Files auto-deleted within 30 minutes</span>
              <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> SSL Encrypted Uploads</span>
              <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> support@universalconvert.app</span>
            </span>
          </div>

          {/* ── Page Content ── */}
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>

          {/* ── Footer ── */}
          <footer className="border-t bg-white pt-12 pb-6">
            <div className="container mx-auto px-4">
              {/* Footer Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                {/* Brand */}
                <div className="col-span-2 md:col-span-1">
                  <Link href="/" className="font-bold text-lg">Universal<span className="text-blue-600">Convert</span></Link>
                  <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                    Free, fast, and secure online file conversion tools. No registration required.
                  </p>
                  <p className="text-xs text-slate-400 mt-3 flex items-center gap-1">
                    <Mail className="w-3 h-3" /> support@universalconvert.app
                  </p>
                </div>
                {/* Tools */}
                <div>
                  <h3 className="font-semibold text-sm mb-4 text-slate-800">Tools</h3>
                  <ul className="space-y-2">
                    {toolLinks.map(l => (
                      <li key={l.href}><Link href={l.href} className="text-sm text-slate-500 hover:text-blue-600 transition-colors">{l.label}</Link></li>
                    ))}
                  </ul>
                </div>
                {/* Company */}
                <div>
                  <h3 className="font-semibold text-sm mb-4 text-slate-800">Company</h3>
                  <ul className="space-y-2">
                    {navLinks.map(l => (
                      <li key={l.href}><Link href={l.href} className="text-sm text-slate-500 hover:text-blue-600 transition-colors">{l.label}</Link></li>
                    ))}
                    <li><Link href="/faq" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">FAQ</Link></li>
                  </ul>
                </div>
                {/* Legal */}
                <div>
                  <h3 className="font-semibold text-sm mb-4 text-slate-800">Legal</h3>
                  <ul className="space-y-2">
                    {legalLinks.map(l => (
                      <li key={l.href}><Link href={l.href} className="text-sm text-slate-500 hover:text-blue-600 transition-colors">{l.label}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Ad Banner Placeholder */}
              <div className="w-full max-w-[728px] mx-auto h-[90px] bg-slate-100 border border-dashed rounded-lg flex items-center justify-center text-slate-400 text-xs uppercase font-bold mb-8">
                Advertisement
              </div>

              {/* Bottom bar */}
              <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                <p>© {new Date().getFullYear()} UniversalConvert. All rights reserved.</p>
                <p className="flex items-center gap-1"><Shield className="w-3 h-3" /> Your files are encrypted and auto-deleted. We never store or sell your data.</p>
              </div>
            </div>
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
