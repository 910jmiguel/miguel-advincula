import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-zinc-900">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
        </div>
        <div className="space-y-4">
          <p className="text-lg text-zinc-300">
          Hey, I'm Miguel👋! Born and raised in the Toronto area, I'm currently a 2nd year Computer Science student at York University
          who is passionate about full-stack development and software engineering, constantly exploring new technologies to create innovative applications.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About