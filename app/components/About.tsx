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
            With over 5 years of experience in web development, I've worked with clients across various industries
            to deliver exceptional digital experiences.
          </p>
          <p className="text-lg text-zinc-300">
            My approach combines technical expertise with creative problem-solving to build solutions that not
            only look great but also perform exceptionally well.
          </p>
          <p className="text-lg text-zinc-300">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
            or enjoying outdoor activities.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About