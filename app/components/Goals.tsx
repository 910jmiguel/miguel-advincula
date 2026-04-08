"use client";

import {
  Target,
  Compass,
  BookOpen,
  Heart,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { useReveal } from "@/app/hooks/useReveal";

const Goals = () => {
  const headerRef = useReveal();
  const contentRef = useReveal(0.1);
  const valuesRef = useReveal(0.1);

  const values = [
    { icon: <Heart className="w-5 h-5" />, title: "Community First" },
    { icon: <Lightbulb className="w-5 h-5" />, title: "Build What Matters" },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Always Growing" },
    { icon: <Compass className="w-5 h-5" />, title: "Authenticity" },
  ];

  return (
    <section id="goals" className="py-16 md:py-24 bg-white grain relative overflow-hidden">
      <div className="container relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center mb-14">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 text-stone-900 tracking-tight">
            Goals & Reflections
          </h2>
          <p className="text-stone-400 text-base max-w-lg mx-auto">
            Where I&apos;m headed and how I got here
          </p>
        </div>

        <div ref={contentRef} className="reveal max-w-3xl mx-auto space-y-14">

          {/* Career Goals — clean prose style */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-lg" style={{ background: "var(--copper-subtle)" }}>
                <Target className="w-5 h-5" style={{ color: "var(--copper)" }} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-stone-900">
                Career Goals
              </h3>
            </div>

            <p className="text-stone-600 leading-relaxed mb-6">
              I chose CS because I love turning ideas into products people actually use — the intersection of problem-solving, creativity, and impact.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl p-5" style={{ background: "var(--copper-subtle)" }}>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Now</h4>
                <ul className="space-y-2.5 text-stone-600 text-[15px]">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-stone-400" />
                    Deepen AI/ML expertise at Pitstop co-op
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-stone-400" />
                    Ship HAVN Inc. MVP to early users
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-stone-400" />
                    Grow content reach and help more people break into tech
                  </li>
                </ul>
              </div>
              <div className="rounded-xl p-5 bg-stone-50">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Long-term</h4>
                <ul className="space-y-2.5 text-stone-600 text-[15px]">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-stone-400" />
                    Build and scale a company that solves meaningful problems
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-stone-400" />
                    Lead at the intersection of engineering and digital media
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-stone-400" />
                    Mentor the next generation of developers
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-stone-100" />

          {/* Philosophy — no emojis, prose-driven */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-lg" style={{ background: "var(--copper-subtle)" }}>
                <BookOpen className="w-5 h-5" style={{ color: "var(--copper)" }} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-stone-900">
                Philosophy of Learning
              </h3>
            </div>

            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                I believe the best learning happens when you&apos;re building something real. Textbooks lay the foundation, but late-night debugging, hackathon deadlines, and watching users interact with something you built — that&apos;s where real growth lives.
              </p>
              <p>
                My approach: <span className="text-stone-800 font-medium">say yes to things that scare you a little.</span> Judging a hackathon as a student, co-founding a startup with zero experience, creating content publicly — every one of those accelerated my growth more than any course could.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-stone-100" />

          {/* Reflections — timeline */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg" style={{ background: "var(--copper-subtle)" }}>
                <TrendingUp className="w-5 h-5" style={{ color: "var(--copper)" }} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-stone-900">
                Reflections on Growth
              </h3>
            </div>

            <div className="space-y-0">
              {[
                { label: "Retail Roots", text: "Sales floor at Canada\u2019s Wonderland taught me communication, leadership, and empathy \u2014 skills that became my superpower in tech." },
                { label: "Building in Public", text: "Content creation led to 1.4M+ views, a Chatbase partnership, and a community \u2014 all from sharing the journey, not just the results." },
                { label: "Startup + Co-op", text: "Co-founding HAVN while interning at Pitstop gave me both zero-to-one building and enterprise-scale engineering perspectives." },
              ].map((item, i, arr) => (
                <div key={i} className="relative pl-7 pb-7 last:pb-0">
                  {i < arr.length - 1 && (
                    <div className="absolute left-[5px] top-3 bottom-0 w-px bg-stone-200" />
                  )}
                  <div className="absolute left-0 top-[5px] w-[11px] h-[11px] rounded-full border-2 bg-white" style={{ borderColor: "var(--copper)" }} />
                  <h4 className="font-semibold text-stone-800 mb-0.5">{item.label}</h4>
                  <p className="text-stone-500 text-[15px] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values — horizontal strip */}
        <div ref={valuesRef} className="reveal max-w-3xl mx-auto mt-14">
          <div className="flex flex-wrap justify-center gap-3">
            {values.map((v) => (
              <div key={v.title} className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-stone-200 bg-white text-sm font-medium text-stone-600">
                <span style={{ color: "var(--copper)" }}>{v.icon}</span>
                {v.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
