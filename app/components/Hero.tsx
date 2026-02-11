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
      className={`min-h-screen grid lg:grid-cols-2 ${
        mounted ? "animate-fade-down" : ""
      }`}
    >
      {/* Left Side */}
      <div className="flex items-center justify-center p-8 bg-stone-50 min-h-screen">
        <div className="flex flex-col items-center gap-4 pt-16 lg:pt-0">
          {/* Profile Picture */}
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Image
                src="/miguel.jpeg"
                alt="miguel"
                width="350"
                height="350"
                className="rounded-full object-cover object-top border-2 border-stone-200 shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex flex-col bg-stone-50 min-h-screen p-8">
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center pt-16 lg:pt-0">
          {/* Currently status */}
          <div className="mb-6 px-4 py-2 border border-stone-300 rounded-full text-sm text-stone-500 text-center lg:text-left">
            Currently: Building at HAVN Inc. · Interning at Pitstop · Creating content with Chatbase
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6 text-center lg:text-left">
            Miguel (Juan-Miguel) Advincula
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold text-stone-600 mb-4 text-center lg:text-left">
            CS Student · Full-Stack Developer · Content Creator
          </h3>
          <p className="text-lg text-stone-500 max-w-lg mb-8 text-center lg:text-left">
            CS student at York University. I build full-stack apps, create content, and care about building things that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="gap-2 bg-slate-700 hover:bg-slate-600 text-white"
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
          <div className="flex gap-6 mt-6 justify-center lg:justify-center">
            <a
              href="https://github.com/910jmiguel"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-stone-100 border border-stone-200 hover:bg-stone-200 hover:border-stone-300 transition-colors duration-200"
              aria-label="Visit Miguel's GitHub profile"
            >
              <Github
                className="text-stone-600 group-hover:text-stone-900 transition-colors duration-200"
                size={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/910jmiguel/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-stone-100 border border-stone-200 hover:bg-stone-200 hover:border-stone-300 transition-colors duration-200"
              aria-label="Visit Miguel's LinkedIn profile"
            >
              <Linkedin
                className="text-stone-600 group-hover:text-stone-900 transition-colors duration-200"
                size={24}
              />
            </a>
            <a
              href="https://www.tiktok.com/@jmiguel.adv"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-stone-100 border border-stone-200 hover:bg-stone-200 hover:border-stone-300 transition-colors duration-200"
              aria-label="Visit Miguel's TikTok profile"
            >
              <TikTokIcon
                className="text-stone-600 group-hover:text-stone-900 transition-colors duration-200"
                size={24}
              />
            </a>
            <a
              href="https://www.instagram.com/jmiguel.adv"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-stone-100 border border-stone-200 hover:bg-stone-200 hover:border-stone-300 transition-colors duration-200"
              aria-label="Visit Miguel's Instagram profile"
            >
              <Instagram
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
