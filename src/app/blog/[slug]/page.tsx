import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, CalendarDays } from "lucide-react";
import { BLOG_DATA, BLOG_POSTS } from "../data";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_DATA[slug as keyof typeof BLOG_DATA];
  if (!post) return { title: "Blog Post Not Found | ZA Cleaning" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [{ url: post.image }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

function applyInline(text: string): string {
  return text
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-accent font-medium underline decoration-accent/30 underline-offset-2 hover:text-accent-light transition-colors">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

function renderMarkdown(content: string): string {
  const lines = content.trim().split("\n");
  const out: string[] = [];
  let inList = false;
  let inOrderedList = false;
  let firstHeading = true;

  for (const raw of lines) {
    const line = raw.trim();

    if (line === "") {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      if (inOrderedList) {
        out.push("</ol>");
        inOrderedList = false;
      }
      continue;
    }

    // Skip the first # heading — it duplicates the page <h1>
    if (line.startsWith("# ") && firstHeading) {
      firstHeading = false;
      continue;
    }
    firstHeading = false;

    const numberedMatch = line.match(/^(\d+)\. (.*)/);

    if (line.startsWith("### ")) {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      if (inOrderedList) {
        out.push("</ol>");
        inOrderedList = false;
      }
      // Sub-section label styled as a pill
      out.push(`<div class="mt-7 mb-3"><span class="inline-block text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1.5 rounded-full">${applyInline(line.slice(4))}</span></div>`);
    } else if (line.startsWith("## ")) {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      if (inOrderedList) {
        out.push("</ol>");
        inOrderedList = false;
      }
      // Section heading with bottom border
      out.push(`<h3 class="text-xl font-bold text-slate-900 mt-10 mb-4 pb-3 border-b-2 border-slate-100">${applyInline(line.slice(3))}</h3>`);
    } else if (line.startsWith("# ")) {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      if (inOrderedList) {
        out.push("</ol>");
        inOrderedList = false;
      }
      // Major heading with left accent bar + light bg
      out.push(`<h2 class="text-2xl font-extrabold text-slate-900 mt-12 mb-5 px-4 py-3 bg-slate-50 rounded-xl border-l-4 border-accent">${applyInline(line.slice(2))}</h2>`);
    } else if (line.startsWith("- ")) {
      if (inOrderedList) {
        out.push("</ol>");
        inOrderedList = false;
      }
      if (!inList) {
        out.push(`<ul class="my-4 space-y-2">`);
        inList = true;
      }
      // Card-style list item with checkmark
      out.push(`<li class="flex gap-3 items-start px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 text-[16px] leading-relaxed"><span class="text-accent font-bold text-base shrink-0 mt-0.5">✓</span><span>${applyInline(line.slice(2))}</span></li>`);
    } else if (numberedMatch) {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      if (!inOrderedList) {
        out.push(`<ol class="my-5 space-y-3">`);
        inOrderedList = true;
      }
      // Numbered step card with solid accent badge
      out.push(
        `<li class="flex gap-4 items-start p-4 rounded-xl bg-slate-50 border border-slate-100"><span class="shrink-0 w-7 h-7 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">${numberedMatch[1]}</span><span class="text-slate-700 text-[16.5px] leading-relaxed pt-0.5">${applyInline(numberedMatch[2])}</span></li>`,
      );
    } else {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      if (inOrderedList) {
        out.push("</ol>");
        inOrderedList = false;
      }
      out.push(`<p class="text-slate-600 leading-[1.9] mb-5 text-[17px]">${applyInline(line)}</p>`);
    }
  }

  if (inList) out.push("</ul>");
  if (inOrderedList) out.push("</ol>");
  return out.join("\n");
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_DATA[slug as keyof typeof BLOG_DATA];
  if (!post) notFound();

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  const html = renderMarkdown(post.content);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ── White content card ── */}
      <div className="max-w-3xl mx-auto bg-white shadow-sm sm:rounded-b-2xl px-6 pt-28 pb-14">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-accent text-sm font-medium transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Image */}
        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden shadow-sm border border-slate-100 mb-8">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* Category */}
        <span className="inline-block text-accent text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-accent/10 rounded-full mb-4">{post.category}</span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-snug mb-4">{post.title}</h1>

        {/* Excerpt as lead */}
        <p className="text-slate-500 text-[17px] leading-relaxed border-l-4 border-accent/30 pl-4 mb-6">{post.excerpt}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-slate-400 text-sm mb-10">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-accent" />
            {post.readTime} min read
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="flex items-center gap-1.5">
            <CalendarDays className="w-4 h-4 text-accent" />9 May 2026
          </span>
        </div>

        <hr className="border-slate-100 mb-10" />

        {/* ── Article Body ── */}
        <article dangerouslySetInnerHTML={{ __html: html }} />

        <hr className="border-slate-100 mt-10" />
      </div>

      {/* ── CTA ── */}
      <div className="max-w-3xl mx-auto px-6 mt-12 mb-16">
        <div className="relative rounded-3xl bg-accent overflow-hidden py-14 px-8 text-center">
          {/* decorative circles */}
          <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10" />

          <p className="relative text-white/60 text-xs font-bold uppercase tracking-widest mb-3">Free Quote</p>
          <h2 className="relative text-3xl sm:text-4xl font-extrabold text-white mb-3 leading-tight">
            Ready to Get Your<br />Home Cleaned?
          </h2>
          <p className="relative text-white/70 mb-8 max-w-sm mx-auto leading-relaxed text-[15px]">
            Professional, certified cleaning teams. Satisfaction guaranteed or we return free.
          </p>
          <div className="relative flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-accent shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/447774845901?text=Hi%20ZA%20Cleaning%2C%20I%27d%20like%20to%20get%20a%20free%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-xl transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ── Related Posts ── */}
      <section className="py-16 px-6 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Keep Reading</p>
            <h2 className="text-2xl font-bold text-slate-900">Related Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-40 overflow-hidden">
                  <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1.5">{rel.category}</p>
                  <h3 className="text-base font-bold text-slate-900 mb-auto group-hover:text-accent transition-colors line-clamp-2 leading-snug">{rel.title}</h3>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {rel.readTime} min
                    </span>
                    <span className="text-accent text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
