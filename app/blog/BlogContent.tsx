"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Video, Trophy, Calendar, PenLine, ArrowUpRight, ArrowLeft } from "lucide-react";
import { highlights } from "@/constants/highlights";

const typeConfig = {
  content: { label: "Content", icon: Video, color: "text-blue-600 bg-blue-50 border-blue-200" },
  achievement: { label: "Achievement", icon: Trophy, color: "text-amber-600 bg-amber-50 border-amber-200" },
  event: { label: "Event", icon: Calendar, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
  blog: { label: "Blog", icon: PenLine, color: "text-purple-600 bg-purple-50 border-purple-200" },
};

export default function BlogContent() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          href="/#highlights"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Blog & Highlights
          </h1>
          <p className="text-stone-500 text-lg">
            Stories, achievements, and things I&apos;ve been up to.
          </p>
        </div>

        <div className="space-y-8">
          {highlights.map((card) => {
            const config = typeConfig[card.type];
            const Icon = config.icon;

            return (
              <article
                key={card.id}
                id={card.slug}
                className="bg-white rounded-2xl p-8 border border-stone-200 scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${config.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                    {config.label}
                  </span>
                  <span className="text-sm text-stone-400">{card.date}</span>
                </div>

                <h2 className="text-2xl font-bold text-stone-900 mb-3">
                  {card.title}
                </h2>

                <p className="text-stone-600 leading-relaxed mb-4">
                  {card.body}
                </p>

                {card.externalLink && (
                  <a
                    href={card.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-slate-500 transition-colors"
                  >
                    View on {card.type === "content" ? "TikTok" : "External"}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
