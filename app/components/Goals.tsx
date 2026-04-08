"use client";

import {
  Target,
  Compass,
  BookOpen,
  Heart,
  Lightbulb,
  TrendingUp,
  Rocket,
  Users,
  Zap,
} from "lucide-react";
import { useReveal } from "@/app/hooks/useReveal";

const Goals = () => {
  const headerRef = useReveal();
  const goalsRef = useReveal(0.1);
  const philosophyRef = useReveal(0.1);
  const reflectionRef = useReveal(0.1);
  const valuesRef = useReveal(0.1);

  const shortTermGoals = [
    { icon: <Zap className="w-5 h-5" />, text: "Deepen AI/ML expertise at Pitstop co-op" },
    { icon: <Rocket className="w-5 h-5" />, text: "Ship HAVN Inc. MVP to early users" },
    { icon: <Users className="w-5 h-5" />, text: "Grow content reach and help more people break into tech" },
  ];

  const longTermGoals = [
    { icon: <Target className="w-5 h-5" />, text: "Build and scale a company that solves meaningful problems" },
    { icon: <Compass className="w-5 h-5" />, text: "Lead at the intersection of software engineering and digital media" },
    { icon: <Heart className="w-5 h-5" />, text: "Mentor the next generation of developers" },
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community First",
      description: "Making tech more accessible and welcoming for everyone.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Build What Matters",
      description: "Drawn to projects that solve real problems with real impact.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Always Growing",
      description: "Embracing every opportunity to learn and push boundaries.",
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Authenticity",
      description: "Bringing my whole self to my code, content, and collaborations.",
    },
  ];

  const timeline = [
    {
      label: "Retail Roots",
      description: "Sales floor at Canada's Wonderland taught me communication, leadership, and empathy — skills that became my superpower in tech.",
    },
    {
      label: "Building in Public",
      description: "Content creation led to 1.4M+ views, a Chatbase partnership, and a community — all from sharing the journey, not just the results.",
    },
    {
      label: "Startup + Co-op",
      description: "Co-founding HAVN while interning at Pitstop gave me both zero-to-one building and enterprise-scale engineering perspectives.",
    },
  ];

  return (
    <section id="goals" className="py-20 md:py-32 bg-white grain relative overflow-hidden">
      <div className="container relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 text-stone-900 tracking-tight">
            Goals & Reflections
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Where I&apos;m headed, what drives me, and how I&apos;ve grown
          </p>
        </div>

        {/* Career Goals — Visual Grid */}
        <div ref={goalsRef} className="reveal max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200 card-lift">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl" style={{ background: "var(--copper)" }}>
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-stone-900">
                Career Goals
              </h3>
            </div>

            {/* Why CS — Short */}
            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-3xl">
              I chose CS because I love turning ideas into products people actually use — the intersection of problem-solving, creativity, and impact.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Short Term */}
              <div className="rounded-2xl p-6 border border-stone-200" style={{ background: "var(--copper-subtle)" }}>
                <h4 className="font-semibold text-sm uppercase tracking-widest text-stone-400 mb-4">Short-Term</h4>
                <div className="space-y-4">
                  {shortTermGoals.map((goal, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0" style={{ color: "var(--copper)" }}>{goal.icon}</div>
                      <span className="text-stone-700">{goal.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Long Term */}
              <div className="rounded-2xl p-6 border border-stone-200 bg-white">
                <h4 className="font-semibold text-sm uppercase tracking-widest text-stone-400 mb-4">Long-Term</h4>
                <div className="space-y-4">
                  {longTermGoals.map((goal, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0" style={{ color: "var(--copper)" }}>{goal.icon}</div>
                      <span className="text-stone-700">{goal.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy — Compact */}
        <div ref={philosophyRef} className="reveal max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200 card-lift">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl" style={{ background: "var(--copper)" }}>
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-stone-900">
                Philosophy of Learning
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl p-5 border border-stone-200 text-center" style={{ background: "var(--copper-subtle)" }}>
                <div className="text-3xl mb-3">🔨</div>
                <h4 className="font-bold text-stone-800 mb-2">Learn by Building</h4>
                <p className="text-stone-500 text-sm">The best learning happens when you&apos;re shipping something real, not just reading about it.</p>
              </div>
              <div className="rounded-2xl p-5 border border-stone-200 text-center" style={{ background: "var(--copper-subtle)" }}>
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-stone-800 mb-2">Say Yes to Scary</h4>
                <p className="text-stone-500 text-sm">Judging hackathons, co-founding a startup, creating content publicly — growth lives outside comfort zones.</p>
              </div>
              <div className="rounded-2xl p-5 border border-stone-200 text-center" style={{ background: "var(--copper-subtle)" }}>
                <div className="text-3xl mb-3">🌐</div>
                <h4 className="font-bold text-stone-800 mb-2">Learn in Public</h4>
                <p className="text-stone-500 text-sm">Sharing the journey — wins and failures — builds accountability and opens unexpected doors.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Timeline — Visual */}
        <div ref={reflectionRef} className="reveal max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200 card-lift">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl" style={{ background: "var(--copper)" }}>
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-stone-900">
                Reflections on Growth
              </h3>
            </div>

            <div className="space-y-0">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8 pb-8 last:pb-0">
                  {/* Vertical line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-[7px] top-4 bottom-0 w-0.5" style={{ background: "var(--copper-muted)" }} />
                  )}
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 bg-white" style={{ borderColor: "var(--copper)" }} />
                  <h4 className="font-bold text-lg text-stone-800 mb-1">{item.label}</h4>
                  <p className="text-stone-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values — Card Grid */}
        <div ref={valuesRef} className="reveal max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-display text-3xl font-bold text-stone-900 mb-3">
              Core Values
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-white rounded-2xl p-5 border border-stone-200 card-lift text-center"
              >
                <div className="inline-flex p-3 rounded-xl mb-3 transition-transform duration-300 group-hover:scale-105" style={{ background: "var(--copper-muted)" }}>
                  <div style={{ color: "var(--copper)" }}>{value.icon}</div>
                </div>
                <h4 className="font-bold text-stone-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
