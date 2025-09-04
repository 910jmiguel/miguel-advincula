"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Code2,
  Folder,
  Filter,
  Star,
} from "lucide-react";
import { projects, projectCategories } from "../../constants/projects";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="group bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
        />
        {project.image && project.image !== "/project-placeholder.svg" ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
            <Code2 className="w-16 h-16 text-white/80" />
          </div>
        )}
        
        {/* Overlay with action buttons */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="font-bold text-xl text-white mb-2 group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="space-y-3 mb-4">
          <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string, index: number) => (
              <span
                key={index}
                className={`px-2 py-1 bg-gradient-to-r ${project.color} bg-opacity-10 border border-current border-opacity-20 rounded-md text-xs font-medium text-white hover:bg-opacity-20 transition-all duration-300`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4 border-t border-zinc-800">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-lg transition-all duration-300 text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r ${project.color} hover:opacity-90 text-white rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105`}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-gradient-to-b from-zinc-950 to-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-2 border border-zinc-800 overflow-x-auto">
            <div className="flex gap-2">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium whitespace-nowrap text-sm ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {category === "All" ? (
                      <Folder className="w-4 h-4" />
                    ) : (
                      <Filter className="w-4 h-4" />
                    )}
                    {category}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 max-w-md mx-auto">
                <Folder className="w-16 h-16 text-zinc-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  No Projects Found
                </h3>
                <p className="text-zinc-400">
                  No projects match the selected category. Try selecting a different filter.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              More Projects Coming Soon
            </h3>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-6">
              I'm constantly working on new projects and learning new technologies. 
              Check out my GitHub for the latest updates and contributions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/910jmiguel"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <span className="flex items-center justify-center gap-2">
                  <Github className="w-4 h-4" />
                  View GitHub Profile
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-zinc-600 text-zinc-300 rounded-lg font-medium hover:border-zinc-500 hover:text-white hover:bg-zinc-800/50 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <Star className="w-4 h-4" />
                  Let's Collaborate
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
