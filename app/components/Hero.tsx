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

  return (
    <section
      id="hero"
      className={`min-h-screen grid lg:grid-cols-2 ${
        mounted ? "animate-fade-down" : ""
      }`}
    >
      {/* Left Side */}
      <div className="flex items-center justify-center p-8 bg-gradient-to-b from-black to-zinc-950 min-h-screen">
        <div className="flex flex-col items-center lg:items-start gap-4 pt-16 lg:pt-0">
          {/* Profile Picture */}
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              {/* Gradient background layers */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full blur-md opacity-60"></div>

              {/* Profile picture */}
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
          <div className="flex gap-4 mt-6">
            <Github
              className="text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer"
              onClick={() => window.open("https://github.com/910jmiguel", "_blank")}
              size={24}
            />
            <Linkedin
              className="text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer"
              onClick={() => window.open("https://www.linkedin.com/in/miguel-advincula-691ba0279/", "_blank")}
              size={24}
            />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex flex-col bg-gradient-to-b from-black to-zinc-950 min-h-screen p-8">
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center pt-16 lg:pt-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center lg:text-left">
            Miguel Advincula
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold text-zinc-300 mb-4 text-center lg:text-left">
            Computer Science Student | AI & Full Stack Developer
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
