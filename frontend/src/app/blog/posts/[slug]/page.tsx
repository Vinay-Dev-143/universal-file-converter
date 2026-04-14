import { notFound } from "next/navigation";
import { blogPosts } from "../../blogData";
import { Clock, Calendar, ChevronLeft, Share2, Mail, Twitter, Facebook } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | UniversalConvert`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["UniversalConvert"],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto py-12 px-4">
      {/* ── Breadcrumb & Back ── */}
      <nav className="mb-10">
        <Link href="/blog" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 group transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Blog
        </Link>
      </nav>

      {/* ── Post Header ── */}
      <header className="mb-12 border-b pb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
          {post.category}
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.15] tracking-tight">{post.title}</h1>
        
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-slate-500 font-semibold">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] uppercase font-bold">UC</div>
            <span>By UniversalConvert Team</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> {post.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> {post.readTime} read
          </div>
        </div>
      </header>

      {/* ── Ad Placement ── */}
      <div className="w-full max-w-[728px] mx-auto h-[90px] bg-slate-100 border border-dashed rounded-lg flex items-center justify-center text-slate-400 text-xs uppercase font-bold mb-12">
        Advertisement
      </div>

      {/* ── Body Content ── */}
      <div className="grid lg:grid-cols-[1fr,240px] gap-16">
        <div className="prose prose-slate prose-lg max-w-none 
          prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
          prose-p:text-slate-600 prose-p:leading-relaxed
          prose-a:text-blue-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline
          prose-li:text-slate-600
          prose-strong:text-slate-900 prose-strong:font-black"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* ── Sidebar ── */}
        <aside className="hidden lg:block space-y-12">
           <div className="sticky top-24 space-y-12">
             {/* Share Section */}
             <div className="space-y-4">
               <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-400">Share This</h4>
               <div className="flex gap-2">
                 <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 transition-colors"><Twitter className="w-4 h-4 text-blue-400" /></Button>
                 <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Facebook className="w-4 h-4" /></Button>
                 <Button variant="outline" size="icon" className="rounded-full hover:bg-slate-900 hover:text-white transition-colors"><Mail className="w-4 h-4" /></Button>
               </div>
             </div>

             {/* Newsletter/CTAs */}
             <div className="p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
               <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                 <Share2 className="w-5 h-5 text-white" />
               </div>
               <h4 className="font-bold text-lg mb-2 leading-tight">Fastest Conversions.</h4>
               <p className="text-xs text-slate-400 mb-6 leading-relaxed">No wait, no account, 100% free forever.</p>
               <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 font-bold" asChild>
                 <Link href="/#tools">Try Tools</Link>
               </Button>
             </div>

             {/* Ad in Sidebar */}
             <div className="w-full h-[250px] bg-slate-100 border border-dashed rounded-lg flex items-center justify-center text-slate-400 text-xs uppercase font-bold">
               Side Banner Ad
             </div>
           </div>
        </aside>
      </div>

      {/* ── Footer CTAs ── */}
      <footer className="mt-20 pt-16 border-t">
        <div className="text-center space-y-8">
           <h3 className="text-2xl font-black text-slate-900 tracking-tight">Enjoyed reading? Convert a file today!</h3>
           <div className="flex justify-center gap-4 flex-wrap">
              <Button variant="outline" className="h-12 px-6 rounded-xl font-bold" asChild><Link href="/pdf-to-word">PDF to Word</Link></Button>
              <Button variant="outline" className="h-12 px-6 rounded-xl font-bold" asChild><Link href="/jpg-to-png">JPG to PNG</Link></Button>
              <Button variant="outline" className="h-12 px-6 rounded-xl font-bold" asChild><Link href="/pdf-compress">Compress PDF</Link></Button>
           </div>
        </div>
      </footer>
    </article>
  );
}
