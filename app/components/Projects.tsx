"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Code2,
  Folder,
  Filter,
} from "lucide-react";
import { projects, projectCategories } from "../../constants/projects";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  color: string;
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-stone-300 transition-colors duration-200">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        {project.image && project.image !== "/project-placeholder.svg" ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-stone-100 flex items-center justify-center">
            <Code2 className="w-16 h-16 text-stone-400" />
          </div>
        )}

        {/* Overlay with action buttons */}
        <div className="absolute inset-0 bg-stone-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/80 hover:bg-white rounded-full transition-colors duration-200 text-stone-700"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/80 hover:bg-white rounded-full transition-colors duration-200 text-stone-700"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs font-medium text-stone-700">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="font-bold text-xl text-stone-900 mb-2">
          {project.title}
        </h3>

        <p className="text-stone-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="space-y-3 mb-4">
          <h4 className="text-xs font-medium text-stone-500 uppercase tracking-wide">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-2 py-1 bg-stone-100 border border-stone-200 rounded-md text-xs font-medium text-stone-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4 border-t border-stone-200">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors duration-200 text-sm font-medium"
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
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
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
      className="py-16 md:py-24 bg-stone-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
            Projects
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Things I&apos;ve built
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-stone-100 rounded-2xl p-2 border border-stone-200 overflow-x-auto">
            <div className="flex gap-2">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl transition-colors duration-200 font-medium whitespace-nowrap text-sm ${
                    selectedCategory === category
                      ? "bg-slate-700 text-white shadow-sm"
                      : "text-stone-500 hover:text-stone-900 hover:bg-stone-200"
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
              <div className="bg-white rounded-2xl p-8 border border-stone-200 max-w-md mx-auto">
                <Folder className="w-16 h-16 text-stone-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-stone-900 mb-2">
                  No Projects Found
                </h3>
                <p className="text-stone-500">
                  No projects match the selected category. Try selecting a
                  different filter.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-500 mb-4">
            More on my GitHub.
          </p>
          <a
            href="https://github.com/910jmiguel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg font-medium transition-colors duration-200 border border-stone-200"
          >
            <Github className="w-4 h-4" />
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
