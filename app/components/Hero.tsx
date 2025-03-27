import { Download, Github, Linkedin, Mail  } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
<section id="hero" className="min-h-screen grid lg:grid-cols-2">
          {/* Left Side */}
          <div className="flex items-center justify-center p-8 bg-zinc-900">
            <div className="flex flex-col items-center lg:items-start gap-4 pt-16 lg:pt-0">
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-black">M</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Miguel Advincula</h2>
              <p className="text-xl text-zinc-400">Computer Science Student at York University</p>
              <Github className="text-zinc-400 hover:text-white transition-colors duration-300" size={24} />
              <Linkedin className="text-zinc-400 hover:text-white transition-colors duration-300" size={24} />
              <div className="flex gap-4 mt-6">
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex flex-col bg-black p-8">
            <div className="flex-1 flex flex-col items-center lg:items-start justify-center pt-16 lg:pt-0">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center lg:text-left">
                GREAT THINGS
                <br />
                ARE COMING
              </h1>
              <p className="text-lg text-zinc-400 max-w-lg mb-8 text-center lg:text-left">
                I'm a full-stack developer specializing in creating beautiful, functional, and user-friendly websites
                and applications tailored to meet your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">

                <Button size="lg" className="gap-2 bg-blue-500 hover:bg-blue-400 text-white hover:text-black">
                  <Mail className="text-white" size={24} />
                Contact Me
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-white/20 hover:bg-white/10">
                <Download className="h-4 w-4" />
                See Resume
                </Button>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Hero
