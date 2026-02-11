"use client";

import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/app/ui/button";
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
    window.open("/JMA_CS_Resume_Oct2025.pdf", "_blank");
  };
  return (
    <section
      id="hero"
      className={`min-h-screen grid lg:grid-cols-2 ${
        mounted ? "animate-fade-down" : ""
      }`}
    >
      {/* Left Side */}
      <div className="flex items-center justify-center p-8 bg-black min-h-screen">
        <div className="flex flex-col items-center gap-4 pt-16 lg:pt-0">
          {/* Profile Picture */}
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-md"></div>
              <div className="relative">
                <Image
                  src="/miguel.jpeg"
                  alt="miguel"
                  width="350"
                  height="350"
                  className="rounded-full object-cover object-top border-4 border-white/10 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex flex-col bg-black min-h-screen p-8">
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center pt-16 lg:pt-0">
          {/* v2 teaser */}
          <div className="mb-6 px-4 py-2 border border-zinc-700 rounded-full text-sm text-zinc-400 text-center lg:text-left">
            v2 coming soon — full revamp in progress
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center lg:text-left">
            Miguel Advincula
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold text-zinc-300 mb-4 text-center lg:text-left">
            Computer Science Student | AI & Full Stack Developer
          </h3>
          <p className="text-lg text-zinc-400 max-w-lg mb-8 text-center lg:text-left">
            CS student at York. I build things for the web and tinker with AI on
            the side.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="gap-2 bg-blue-500 hover:bg-blue-400 text-white"
              onClick={scrollToContact}
            >
              <Mail size={24} />
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-white/20 hover:bg-white/10 bg-black"
              onClick={handleDownloadResume}
            >
              <Download className="h-4 w-4" />
              See Resume
            </Button>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 mt-6 justify-center lg:justify-center">
            <a
              href="https://github.com/910jmiguel"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-700/50 hover:border-zinc-600 transition-colors duration-300"
              aria-label="Visit Miguel's GitHub profile"
            >
              <Github
                className="text-zinc-300 group-hover:text-white transition-colors duration-300"
                size={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/miguel-advincula-691ba0279/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-700/50 hover:border-zinc-600 transition-colors duration-300"
              aria-label="Visit Miguel's LinkedIn profile"
            >
              <Linkedin
                className="text-zinc-300 group-hover:text-blue-400 transition-colors duration-300"
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
