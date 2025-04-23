"use client";

import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/app/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
//I'm Miguel, and I am a passionate full-stack developer with a keen interest in software engineering. I love creating innovative applications and exploring new technologies to enhance my skills.
const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className={`min-h-screen grid lg:grid-cols-2 ${
        mounted ? "animate-fade-down" : ""
      }`}
    >
      {/* Left Side */}
      <div className="flex items-center justify-center p-8 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 min-h-screen">
        <div className="flex flex-col items-center lg:items-start gap-4 pt-16 lg:pt-0">
          <div className="flex items-center justify-center mb-4">
            <Image src="/miguel.jpeg" alt="miguel" width="350" height="400" />
          </div>
          <div className="flex gap-4 mt-6">
            <Github
              className="text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer"
              size={24}
            />
            <Linkedin
              className="text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer"
              size={24}
            />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex flex-col bg-gradient-to-b from-black via-zinc-950 to-zinc-900 min-h-screen p-8">
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center pt-16 lg:pt-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center lg:text-left">
            Miguel Advincula
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold text-zinc-300 mb-4 text-center lg:text-left">
            Computer Science Student @ York University
          </h3>
          <p className="text-lg text-zinc-400 max-w-lg mb-8 text-center lg:text-left">
            Hi there! 👋
            <br></br>
            Welcome to my portfolio! Scroll down to see more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="gap-2 bg-blue-500 hover:bg-blue-400 text-white"
            >
              <Mail size={24} />
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-white/20 hover:bg-white/10 bg-black"
            >
              <Download className="h-4 w-4" />
              See Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
