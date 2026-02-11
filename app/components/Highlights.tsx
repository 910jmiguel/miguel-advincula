"use client";

import Link from "next/link";
import { Video, Trophy, Calendar, PenLine, ArrowUpRight, ArrowRight } from "lucide-react";
import { highlights } from "@/constants/highlights";

const typeConfig = {
  content: { label: "Content", icon: Video, color: "text-blue-600 bg-blue-50 border-blue-200" },
  achievement: { label: "Achievement", icon: Trophy, color: "text-amber-600 bg-amber-50 border-amber-200" },
  event: { label: "Event", icon: Calendar, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
  blog: { label: "Blog", icon: PenLine, color: "text-purple-600 bg-purple-50 border-purple-200" },
};

const Highlights = () => {
  return (
    <section id="highlights" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
            Highlights
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Content, achievements, and things I&apos;m proud of
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4">
          {highlights.map((card) => {
            const config = typeConfig[card.type];
            const Icon = config.icon;

            return (
              <Link
                key={card.id}
                href={`/blog#${card.slug}`}
                className={`${card.colSpan} ${card.rowSpan || ""} group relative bg-white rounded-2xl p-6 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between overflow-hidden cursor-pointer`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${config.color}`}>
                      <Icon className="w-3 h-3" />
                      {config.label}
                    </span>
                    {card.externalLink && (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(card.externalLink, "_blank");
                        }}
                        className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 transition-colors duration-200"
                      >
                        <ArrowUpRight className="w-4 h-4 text-stone-500" />
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-lg text-stone-900 mb-2 leading-snug group-hover:text-slate-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">
                    {card.subtitle}
                  </p>
                </div>
                <p className="text-xs text-stone-400 mt-3">{card.date}</p>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors duration-200"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
