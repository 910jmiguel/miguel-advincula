import About from "./components/About";
import Contact from "./components/Contact";
import Highlights from "./components/Highlights";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Hero />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Highlights />
      <Contact />
    </div>
  );
}
