import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container flex flex-col items-center justify-center gap-8 py-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Welcome to DevPortfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-[42rem] mx-auto">
            A showcase of my development projects and skills
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
