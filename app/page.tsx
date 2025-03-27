import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="animate-fade-down min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
    </div>
  );
}
