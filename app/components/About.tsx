"use client";

import Image from "next/image";
import React from "react";
import {
  Camera,
  MapPin,
  Utensils,
  Video,
  Eye,
  Plane,
  GraduationCap,
  Code2,
  Sparkles,
  Users,
  TrendingUp,
  Trophy,
  Mic,
  Megaphone,
} from "lucide-react";
import { useReveal } from "@/app/hooks/useReveal";

const About = () => {
  const bioRef = useReveal();
  const eduRef = useReveal();
  const interestsRef = useReveal();

  const interests = [
    { icon: <Eye className="w-5 h-5" />, title: "Sports" },
    { icon: <Camera className="w-5 h-5" />, title: "Photography" },
    { icon: <Video className="w-5 h-5" />, title: "Content Creation" },
    { icon: <Utensils className="w-5 h-5" />, title: "Food" },
    { icon: <Plane className="w-5 h-5" />, title: "Travel" },
    { icon: <Code2 className="w-5 h-5" />, title: "Tech" },
  ];

  const cocurricular = [
    { icon: <Users className="w-5 h-5" />, title: "CUTC Tech Associate" },
    { icon: <Trophy className="w-5 h-5" />, title: "Hackathon Competitor" },
    { icon: <Mic className="w-5 h-5" />, title: "Speaker & Judge" },
    { icon: <Megaphone className="w-5 h-5" />, title: "Alumni Ambassador" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white grain relative overflow-hidden">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 text-stone-900 tracking-tight">
            About Me
          </h2>
        </div>

        {/* Bio — tighter, editorial */}
        <div ref={bioRef} className="reveal max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg" style={{ background: 'var(--copper-muted)' }}>
              <Sparkles className="w-4 h-4" style={{ color: 'var(--copper)' }} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Who I Am
            </span>
          </div>

          <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
            <p>
              CS student at York University who loves building at the intersection of software engineering and digital media. I&apos;ve shipped full-stack products in startup environments, created content reaching{" "}
              <span className="font-semibold text-stone-800">1.4M+ views</span> across TikTok and Instagram, and grown my personal brand while helping others do the same.
            </p>
            <p>
              Beyond the technical work, I genuinely care about community — mentoring students, judging at competitions, and being someone people can reach out to in the tech space.
            </p>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-2.5 mt-6">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-stone-200 bg-white text-sm font-medium text-stone-600">
              <TrendingUp className="w-3.5 h-3.5" style={{ color: 'var(--copper)' }} />
              1.4M+ Views
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-stone-200 bg-white text-sm font-medium text-stone-600">
              <Code2 className="w-3.5 h-3.5" style={{ color: 'var(--copper)' }} />
              Full-Stack
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-stone-200 bg-white text-sm font-medium text-stone-600">
              <Users className="w-3.5 h-3.5" style={{ color: 'var(--copper)' }} />
              Community
            </div>
          </div>
        </div>

        {/* Profile + Education — side by side on desktop */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Profile card — video hero */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-4 border border-stone-200">
              <div className="flex flex-col items-center text-center">
                <div
                  className="relative w-full aspect-[9/16] rounded-xl overflow-hidden mb-4 bg-stone-100 group"
                  style={{ border: '2px solid var(--copper-light)' }}
                >
                  <video
                    src="/v14044g50000d6dpas7og65u0tfadj00.MP4"
                    poster="/miguel2.jpeg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  <div className="pointer-events-none absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm" style={{ background: 'rgba(0,0,0,0.45)' }}>
                    About Me
                  </div>
                </div>
                <div className="space-y-2 px-2 pb-2">
                  <div className="flex items-center justify-center gap-1.5 text-stone-500 text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    Toronto, ON
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    3rd year CS student. Figuring out how things work and building stuff along the way.
                  </p>
                </div>
              </div>
            </div>

            {/* Education — cleaner */}
            <div ref={eduRef} className="reveal lg:col-span-3 bg-white rounded-2xl p-6 md:p-8 border border-stone-200 flex flex-col">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-2.5 rounded-lg" style={{ background: 'var(--copper)' }}>
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-stone-900">
                  Education
                </h3>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-stone-50 rounded-xl flex items-center justify-center border border-stone-200">
                  <Image
                    src="/yorkulogo.jpg"
                    alt="York University"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-stone-900">
                    York University, Lassonde School of Engineering
                  </h4>
                  <p className="font-medium" style={{ color: 'var(--copper-dark)' }}>
                    BA (Specialized Honours) — Computer Science
                  </p>
                  <p className="text-stone-500 text-sm">
                    Software Development Stream
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 text-xs text-stone-500">
                    <span className="px-2.5 py-1 rounded-md bg-stone-50 border border-stone-100">
                      Expected 2027
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-50 border border-stone-100">
                      3rd Year
                    </span>
                  </div>
                </div>
              </div>

              {/* Relevant coursework — fills remaining space */}
              <div className="mt-auto pt-6">
                <div className="border-t border-stone-100 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                    Relevant Coursework
                  </span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {[
                      "Data Structures",
                      "Algorithms",
                      "Object-Oriented Programming",
                      "Operating Systems",
                      "Databases",
                      "Web Development",
                      "Software Design",
                      "Computer Organization",
                    ].map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1.5 rounded-md bg-stone-50 border border-stone-100 text-xs text-stone-600 font-medium"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interests + Co-curricular — merged as pill lists */}
        <div ref={interestsRef} className="reveal max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Interests */}
            <div>
              <h3 className="font-display text-lg font-bold text-stone-900 mb-4">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {interests.map((i) => (
                  <div
                    key={i.title}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm font-medium text-stone-600 hover:border-stone-300 transition-colors"
                  >
                    <span style={{ color: 'var(--copper)' }}>{i.icon}</span>
                    {i.title}
                  </div>
                ))}
              </div>
            </div>

            {/* Co-curricular */}
            <div>
              <h3 className="font-display text-lg font-bold text-stone-900 mb-4">
                Co-curricular
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cocurricular.map((a) => (
                  <div
                    key={a.title}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm font-medium text-stone-600 hover:border-stone-300 transition-colors"
                  >
                    <span style={{ color: 'var(--copper)' }}>{a.icon}</span>
                    {a.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
