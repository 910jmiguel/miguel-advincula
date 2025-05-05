"use client"
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import LoadingScreen from "./components/Loading";
import { useState, useEffect } from 'react';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., for data fetching)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <div className="">
      <About />
      <Skills />
      <Projects />
      <Contact />
      </div>
    </div>
  );
}
