import About from "./components/About";
import Contact from "./components/Contact";
import Goals from "./components/Goals";
import Highlights from "./components/Highlights";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";

const Separator = () => <div className="section-separator" />;

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Goals />
      <Separator />
      <Skills />
      <Separator />
      <Work />
      <Separator />
      <Projects />
      <Separator />
      <Highlights />
      <Separator />
      <Contact />
    </div>
  );
}
