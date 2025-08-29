import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-gradient-to-b from-zinc-950 to-black"
    >
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"></div>
      </div>
    </section>
  );
};

export default Projects;
