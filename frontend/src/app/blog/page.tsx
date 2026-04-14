import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "./blogData";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | UniversalConvert - File Conversion Tips & Guides",
  description: "Read our latest articles on PDF conversion, image optimization, and file management tips to work smarter.",
};

export default function BlogIndex() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">The UniversalConvert <span className="text-blue-600">Blog</span></h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto italic leading-relaxed">Expert guides, technical tips, and deep dives into the world of file conversion and digital productivity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/posts/${post.slug}`} className="group h-full">
            <Card className="h-full border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-100 flex items-center justify-center p-8 group-hover:bg-blue-50 transition-colors">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                  {post.category === "PDF Guide" && <span className="text-3xl">📄</span>}
                  {post.category === "Graphics" && <span className="text-3xl">🖼️</span>}
                  {post.category === "Multimedia" && <span className="text-3xl">🎬</span>}
                  {post.category === "Efficiency" && <span className="text-3xl">⚡</span>}
                  {post.category === "Professionalism" && <span className="text-3xl">💼</span>}
                </div>
              </div>
              <CardHeader className="flex-1">
                <div className="flex items-center gap-4 text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
                   {post.category}
                </div>
                <CardTitle className="text-xl font-bold leading-tight group-hover:text-blue-700 transition-colors">{post.title}</CardTitle>
                <CardDescription className="text-sm mt-3 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 pb-6 border-t border-slate-50 mt-auto">
                <div className="flex items-center justify-between text-xs text-slate-400 font-medium pt-4">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </div>
                </div>
                <div className="mt-4 flex items-center text-blue-600 font-bold text-sm tracking-tight group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-20 p-12 bg-slate-900 rounded-[2.5rem] text-center text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-4">Want to work smarter with files?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">We're constantly adding new tools and guides to help you manage your digital life better. Stay tuned for more updates.</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 rounded-xl h-12" asChild>
            <Link href="/#tools">Try Our Free Tools</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
