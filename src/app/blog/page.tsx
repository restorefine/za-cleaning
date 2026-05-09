import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "./data";

export const metadata = {
  title: "Blog | ZA Cleaning - Cleaning Tips & Service Guides",
  description: "Expert cleaning tips, service guides, and insights from ZA Cleaning. Learn about end of tenancy cleaning, deep cleaning, and more.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Our Blog</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">Cleaning Insights & Tips</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">Expert guides, insider tips, and everything you need to know about keeping your home spotless.</p>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-accent/10 to-accent/5 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{post.category}</p>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h2>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                  {/* Meta & CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{post.readTime} min read</span>
                    <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-accent via-blue-600 to-accent py-20 text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-2xl px-6 relative z-10">
          <p className="text-accent-lighter text-xs font-bold uppercase tracking-widest mb-4 opacity-90">Limited Time Offer</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">Ready for a Spotless Home?</h2>
          <p className="text-white/90 text-lg mb-10 max-w-lg mx-auto leading-relaxed">Book in under 2 minutes. Get a free quote from our professional cleaning teams. Satisfaction guaranteed.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-base font-bold text-accent shadow-2xl shadow-accent/50 transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-slate-50 active:translate-y-0">
              Get a Free Quote
              <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <a
              href="https://wa.me/447774845901?text=Hi%20ZA%20Cleaning%2C%20I%27d%20like%20to%20get%20a%20free%20quote%20for%20cleaning%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 backdrop-blur-sm px-10 py-4 text-base font-bold text-white transition-all hover:bg-white/20 hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04.917-1.04 2.23 0 1.313 1.065 2.586 1.214 2.766.149.18 2.094 3.201 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.01-4.88 5.217-4.88 8.905 0 1.232.125 2.449.37 3.633L2 22l3.585-.952c1.15.622 2.44.954 3.783.96 5.231 0 9.449-4.211 9.449-9.409 0-2.524-.979-4.897-2.764-6.683-1.784-1.784-4.16-2.766-6.683-2.766" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
