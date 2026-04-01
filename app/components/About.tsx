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
} from "lucide-react";
import { useReveal } from "@/app/hooks/useReveal";

const About = () => {
  const bioRef = useReveal();
  const profileRef = useReveal();
  const eduRef = useReveal();
  const interestsRef = useReveal();

  const interests = [
    {
      icon: <Eye className="w-7 h-7" />,
      title: "Sports",
      description:
        "Fan of the Toronto Maple Leafs, Toronto Blue Jays and the Toronto Raptors",
    },
    {
      icon: <Camera className="w-7 h-7" />,
      title: "Photography & Videography",
      description:
        "I shoot photos and videos — mostly street and travel stuff",
    },
    {
      icon: <Video className="w-7 h-7" />,
      title: "Content Creation",
      description: "Making videos and experimenting with different formats",
    },
    {
      icon: <Utensils className="w-7 h-7" />,
      title: "Foodie",
      description: "Always looking for good food spots around the city",
    },
    {
      icon: <Plane className="w-7 h-7" />,
      title: "Travel",
      description: "I like seeing new places when I get the chance",
    },
    {
      icon: <Code2 className="w-7 h-7" />,
      title: "Tech",
      description: "Messing around with new tools and frameworks",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white grain relative overflow-hidden">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 text-stone-900 tracking-tight">
            About Me
          </h2>
        </div>

        {/* Bio Introduction */}
        <div ref={bioRef} className="reveal max-w-4xl mx-auto mb-20">
          <div className="relative bg-gradient-to-br from-stone-50 to-white rounded-3xl p-8 md:p-12 border border-stone-200/80 overflow-hidden">
            {/* Decorative corner accent */}
            <div className="absolute top-0 left-0 w-24 h-24 overflow-hidden">
              <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full" style={{ background: 'var(--copper-muted)' }} />
            </div>

            <div className="relative space-y-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg" style={{ background: 'var(--copper-muted)' }}>
                  <Sparkles className="w-5 h-5 text-copper" style={{ color: 'var(--copper)' }} />
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest text-stone-400">
                  Who I Am
                </span>
              </div>

              <p className="text-stone-700 text-lg md:text-xl leading-relaxed">
                CS student at York University who loves building at the intersection of software engineering and digital media. I&apos;ve shipped full-stack products in startup environments, created content reaching{" "}
                <span className="font-semibold" style={{ color: 'var(--copper)' }}>1.4M+ views</span> across TikTok and Instagram, and grown my personal brand while helping others do the same.
              </p>

              <p className="text-stone-600 text-lg md:text-xl leading-relaxed">
                Beyond the technical work, I genuinely care about community. Whether that&apos;s mentoring students through events/organizations, judging at competitions, or just being someone people can reach out to in the tech space.
              </p>

              <p className="text-stone-600 text-lg md:text-xl leading-relaxed">
                Always looking to connect and chat with people building cool things, exploring new opportunities, or just starting out in tech.
              </p>

              {/* Quick stats strip */}
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 bg-white text-sm font-medium text-stone-600">
                  <TrendingUp className="w-4 h-4" style={{ color: 'var(--copper)' }} />
                  1.4M+ Content Views
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 bg-white text-sm font-medium text-stone-600">
                  <Code2 className="w-4 h-4" style={{ color: 'var(--copper)' }} />
                  Full-Stack Builder
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 bg-white text-sm font-medium text-stone-600">
                  <Users className="w-4 h-4" style={{ color: 'var(--copper)' }} />
                  Community Focused
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div ref={profileRef} className="reveal max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 card-lift">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Profile Image */}
              <div className="relative flex-shrink-0">
                <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg" style={{ border: '3px solid var(--copper-light)' }}>
                  <Image
                    src="/miguel2.jpeg"
                    alt="Miguel Advincula"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-3 rounded-full border border-dashed pointer-events-none animate-[spin_30s_linear_infinite]" style={{ borderColor: 'var(--copper-muted)' }} />
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center lg:text-left space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl p-5 text-center border border-stone-200" style={{ background: 'var(--copper-subtle)' }}>
                    <div className="text-2xl lg:text-3xl font-bold text-stone-800">
                      Toronto
                    </div>
                    <div className="text-sm text-stone-500 mt-1">
                      Ontario, Canada
                    </div>
                  </div>
                  <div className="rounded-xl p-5 text-center border border-stone-200" style={{ background: 'var(--copper-subtle)' }}>
                    <div className="text-2xl lg:text-3xl font-bold text-stone-800">
                      Full-Stack
                    </div>
                    <div className="text-sm text-stone-500 mt-1">
                      Developer
                    </div>
                  </div>
                </div>

                <p className="text-stone-600 leading-relaxed text-lg lg:text-xl max-w-2xl lg:max-w-none">
                  I like figuring out how things work and building stuff along
                  the way. Currently in my 3rd year at York studying Computer
                  Science.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div ref={eduRef} className="reveal max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 card-lift">
            <div className="flex items-center gap-6 mb-10">
              <div className="p-4 rounded-2xl" style={{ background: 'var(--copper)' }}>
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-stone-900">
                Education
              </h3>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-shrink-0 relative">
                <div className="relative w-40 h-40 lg:w-48 lg:h-48 bg-stone-50 rounded-3xl flex items-center justify-center border border-stone-200">
                  <Image
                    src="/yorkulogo.jpg"
                    alt="York University Logo"
                    width={120}
                    height={120}
                    className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
                  />
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left space-y-4">
                <h4 className="text-2xl lg:text-3xl font-bold text-stone-900">
                  York University, Lassonde School of Engineering
                </h4>
                <p className="text-xl lg:text-2xl font-semibold" style={{ color: 'var(--copper-dark)' }}>
                  Bachelor of Arts (Specialized Honours) - Computer Science
                </p>
                <p className="text-lg lg:text-xl text-stone-600 font-medium">
                  Software Development Stream
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 text-base lg:text-lg text-stone-500 pt-2">
                  <span className="flex items-center gap-2 px-3 py-2 rounded-lg border border-stone-200" style={{ background: 'var(--copper-subtle)' }}>
                    <MapPin className="w-4 h-4" />
                    Toronto, Ontario, Canada
                  </span>
                  <span className="px-3 py-2 rounded-lg border border-stone-200" style={{ background: 'var(--copper-subtle)' }}>
                    Expected Graduation: 2027
                  </span>
                  <span className="px-3 py-2 rounded-lg border border-stone-200" style={{ background: 'var(--copper-subtle)' }}>
                    Current: 3rd Year
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interests Grid */}
        <div ref={interestsRef} className="reveal mb-16">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-bold text-stone-900 mb-4">
              Interests
            </h3>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Some things I&apos;m into outside of coding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest) => (
              <div
                key={interest.title}
                className="group bg-white rounded-2xl p-6 border border-stone-200 card-lift cursor-default"
              >
                <div>
                  <div className="inline-flex p-3 rounded-xl mb-4 transition-colors duration-300 group-hover:scale-105 transform" style={{ background: 'var(--copper-muted)' }}>
                    <div className="transition-colors duration-300" style={{ color: 'var(--copper)' }}>{interest.icon}</div>
                  </div>
                  <h4 className="font-bold text-xl text-stone-900 mb-3">
                    {interest.title}
                  </h4>
                  <p className="text-stone-500 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
