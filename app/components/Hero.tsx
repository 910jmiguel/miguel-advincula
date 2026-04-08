"use client";

import { Download, Github, Linkedin, Mail, Instagram, BookOpen } from "lucide-react";
import { TikTokIcon } from "@/app/ui/icons";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleDownloadResume = () => {
    window.open("/JMA_CS_Resume_Feb2026.pdf", "_blank");
  };

  return (
    <section
      id="hero"
      className={`min-h-screen grid lg:grid-cols-2 grain relative overflow-hidden ${
        mounted ? "animate-fade-down" : ""
      }`}
    >
      {/* Subtle warm gradient wash */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 70% 40%, var(--copper-subtle), transparent)'
      }} />

      {/* Left Side */}
      <div className="flex items-center justify-center p-8 bg-stone-50 min-h-screen relative z-10">
        <div className="flex flex-col items-center gap-4 pt-16 lg:pt-0">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div
                className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden shadow-xl"
                style={{ border: '3px solid var(--copper-light)' }}
              >
                <Image
                  src="/miguel3.jpg"
                  alt="miguel"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 15%' }}
                  priority
                />
              </div>
              {/* Floating decorative dot */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full animate-float" style={{ background: 'var(--copper)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex flex-col bg-stone-50 min-h-screen p-8 z-10">
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center pt-16 lg:pt-0">
          {/* Currently status */}
          <div className="mb-6 px-4 py-2 rounded-full text-sm text-stone-500 text-center lg:text-left" style={{ border: '1px solid var(--copper-light)', background: 'var(--copper-subtle)' }}>
            Currently: Building at HAVN Inc. · Interning at Pitstop · Creating content with Chatbase
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-stone-900 mb-6 text-center lg:text-left tracking-tight">
            Miguel{" "}
            <span className="italic" style={{ color: 'var(--copper)' }}>(Juan-Miguel)</span>{" "}
            Advincula
          </h1>

          <h3 className="text-xl md:text-2xl font-semibold text-stone-600 mb-4 text-center lg:text-left">
            CS Student{" "}
            <span style={{ color: 'var(--copper-light)' }}>·</span>{" "}
            Full-Stack Developer{" "}
            <span style={{ color: 'var(--copper-light)' }}>·</span>{" "}
            Content Creator
          </h3>

          <p className="text-lg text-stone-500 max-w-lg mb-8 text-center lg:text-left">
            CS student at York University. I build full-stack apps, create content, and care about building things that matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="gap-2 text-white transition-all duration-200 hover:shadow-lg"
              style={{ background: 'var(--copper)', borderColor: 'var(--copper)' }}
              onClick={scrollToContact}
            >
              <Mail size={24} />
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-stone-300 bg-white text-stone-700 hover:bg-stone-100"
              onClick={handleDownloadResume}
            >
              <Download className="h-4 w-4" />
              See Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-stone-300 bg-white text-stone-700 hover:bg-stone-100"
              asChild
            >
              <Link href="/blog">
                <BookOpen className="h-4 w-4" />
                Read Blog
              </Link>
            </Button>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-5 mt-6 justify-center lg:justify-center">
            {[
              { href: "https://github.com/910jmiguel", label: "GitHub", Icon: Github },
              { href: "https://www.linkedin.com/in/910jmiguel/", label: "LinkedIn", Icon: Linkedin },
              { href: "https://www.instagram.com/jmiguel.adv", label: "Instagram", Icon: Instagram },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white border border-stone-200 hover:border-transparent transition-all duration-300 hover:shadow-md"
                style={{ '--hover-bg': 'var(--copper-muted)' } as React.CSSProperties}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--copper-muted)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--copper-light)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'white';
                  (e.currentTarget as HTMLElement).style.borderColor = '';
                }}
                aria-label={`Visit Miguel's ${label} profile`}
              >
                <Icon
                  className="text-stone-600 group-hover:text-stone-900 transition-colors duration-200"
                  size={24}
                />
              </a>
            ))}
            <a
              href="https://www.tiktok.com/@jmiguel.adv"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-white border border-stone-200 hover:border-transparent transition-all duration-300 hover:shadow-md"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--copper-muted)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--copper-light)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'white';
                (e.currentTarget as HTMLElement).style.borderColor = '';
              }}
              aria-label="Visit Miguel's TikTok profile"
            >
              <TikTokIcon
                className="text-stone-600 group-hover:text-stone-900 transition-colors duration-200"
                size={24}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
