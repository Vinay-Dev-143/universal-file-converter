import { FileText, FileDown, Image as ImageIcon, Video, Headphones, Zap, Shield, Clock, Lock, Star, CheckCircle, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tools = [
  {
    title: "PDF to Word",
    description: "Convert PDF documents to editable Microsoft Word files while preserving layout.",
    icon: <FileText className="w-8 h-8 text-blue-500" />,
    href: "/pdf-to-word",
    category: "PDF Tools"
  },
  {
    title: "Word to PDF",
    description: "Transform DOCX documents into professional PDFs for easy sharing.",
    icon: <FileDown className="w-8 h-8 text-red-500" />,
    href: "/word-to-pdf",
    category: "PDF Tools"
  },
  {
    title: "PDF Compressor",
    description: "Reduce PDF file size significantly without compromising visual quality.",
    icon: <Zap className="w-8 h-8 text-orange-500" />,
    href: "/pdf-compress",
    category: "PDF Tools"
  },
  {
    title: "JPG to PNG",
    description: "Convert JPG/JPEG images to PNG with support for lossless quality.",
    icon: <ImageIcon className="w-8 h-8 text-green-500" />,
    href: "/jpg-to-png",
    category: "Image Tools"
  },
  {
    title: "Image to PDF",
    description: "Convert your photos and graphics into a high-quality PDF document.",
    icon: <ImageIcon className="w-8 h-8 text-purple-500" />,
    href: "/image-to-pdf",
    category: "Image Tools"
  },
  {
    title: "Video to MP3",
    description: "Extract high-quality audio tracks from video files effortlessly.",
    icon: <Video className="w-8 h-8 text-pink-500" />,
    href: "/video-to-mp3",
    category: "Media Tools"
  },
  {
    title: "Audio Converter",
    description: "Convert audio files between MP3, WAV, and OGG formats instantly.",
    icon: <Headphones className="w-8 h-8 text-yellow-500" />,
    href: "/audio-convert",
    category: "Media Tools"
  },
];

const stats = [
  { icon: <CheckCircle className="w-6 h-6 text-green-500" />, value: "100%", label: "Free Usage" },
  { icon: <Lock className="w-6 h-6 text-blue-500" />, value: "AES-256", label: "Encrypted" },
  { icon: <Clock className="w-6 h-6 text-purple-500" />, value: "Instant", label: "Conversion" },
  { icon: <Star className="w-6 h-6 text-yellow-500" />, value: "4.9/5", label: "User Rating" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* ── Hero Section ── */}
      <section className="text-center py-20 px-4 rounded-[2rem] bg-white border border-slate-200 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 bg-blue-50/50 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 p-20 bg-purple-50/50 rounded-full -ml-20 -mb-20 blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <BarChart3 className="w-4 h-4" /> Trusted by 10,000+ users monthly
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Simplified <span className="text-blue-600">File Solutions</span> for Everyone.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            UniversalConvert offers professional-grade online tools to convert, compress, and edit PDFs, images, and audio files—free, private, and lightning fast.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-8 text-lg rounded-xl shadow-lg shadow-blue-200" asChild>
              <Link href="#tools">Explore Tools</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center p-6 bg-white border border-slate-100 rounded-2xl shadow-sm text-center">
            <div className="mb-3">{stat.icon}</div>
            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* ── Main Tools Display ── */}
      <section id="tools" className="px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Powerful Conversion Tools</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Browse our collection of high-performance tools designed to make your daily file management tasks easier.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, idx) => (
            <Link href={tool.href} key={idx} className="block group">
              <Card className="h-full border-slate-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden">
                <CardHeader className="p-8">
                  <div className="mb-6 bg-slate-50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 ease-out">
                    {tool.icon}
                  </div>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    {tool.category}
                  </div>
                  <CardTitle className="text-2xl font-bold mb-3">{tool.title}</CardTitle>
                  <CardDescription className="text-base text-slate-500 leading-relaxed">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* ── How It Works Section ── */}
      <section className="bg-slate-900 text-white rounded-[3rem] py-20 px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        <div className="grid lg:grid-cols-2 gap-16 relative z-10 max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Cloud-Based <span className="text-blue-500">Security</span> You Can Trust.
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              We process your files in an isolated, secure environment. Once your conversion is finished, your data is yours to keep, and we wipe it from our servers.
            </p>
            <ul className="space-y-6">
              {[
                { icon: <Shield className="text-blue-500" />, title: "End-to-End Encryption", desc: "All transfers are secured via HTTPS (SSL) with AES-256 encryption." },
                { icon: <Clock className="text-blue-500" />, title: "Instant Deletion", desc: "Files are automatically and permanently deleted within 30 minutes." },
                { icon: <Lock className="text-blue-500" />, title: "Privacy Guaranteed", desc: "We never sell your data or read your converted documents." },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-normal">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-white/5 border border-white/10 p-1 rounded-3xl backdrop-blur-sm w-full max-w-md aspect-square flex flex-col items-center justify-center text-center px-10">
               <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/20">
                 <Zap className="w-12 h-12 text-white" />
               </div>
               <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Powered by FFmpeg & PDF Conversion Engines</h3>
               <p className="text-slate-500 text-sm">We use industrial-standard libraries like FFmpeg, reportlab, and pdf2docx to ensure the highest quality results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO Content Section ── */}
      <section className="px-4 max-w-4xl mx-auto text-center space-y-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">The All-in-One Online File Toolkit</h2>
          <p className="text-slate-600 leading-relaxed">
            Whether you need to <strong>convert PDF to Word</strong>, compress large documents for email, or extract high-quality audio from videos, UniversalConvert is your go-to destination. Our platform is optimized for performance, ensuring that even large files up to 50MB are processed in seconds. We support widely used formats like PDF, DOCX, JPG, PNG, MP3, and WAV, making us a versatile solution for students, professionals, and developers alike.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-bold mb-3">Why Choose UniversalConvert?</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Unlike other tools that add watermarks or require expensive subscriptions, UniversalConvert provides a completely free experience. Our clean, ad-friendly interface is designed for speed and ease of use, allowing you to get your work done without distractions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Universal Compatibility</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Our tools work flawlessly across all devices—iPhone, Android, Windows, and macOS. Our cloud infrastructure handles the processing power, so you don&apos;t have to install any bulky software on your local machine.
            </p>
          </div>
        </div>
      </section>

      {/* ── Ad Banner ── */}
      <div className="w-full max-w-[728px] h-[90px] mx-auto bg-slate-50 border border-dashed rounded-lg flex flex-col items-center justify-center text-slate-400">
          <span className="text-xs uppercase font-bold tracking-widest">Advertisement</span>
      </div>
    </div>
  );
}
