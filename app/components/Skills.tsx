"use client";
import skillCategories, {
  softSkills,
  SkillCategory,
  Skill,
} from "@/constants/skills";
import { useState } from "react";
import Image from "next/image";

const Skills = () => {
  const [activeTab, setActiveTab] = useState<"technical" | "soft">("technical");

  const SkillCard = ({ skill }: { skill: Skill }) => (
    <div className="group bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {skill.icon.startsWith("http") ? (
            <Image
              src={skill.icon}
              alt={skill.name}
              width={64}
              height={64}
              className="w-full h-full object-contain"
              style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.3))" }}
            />
          ) : (
            <div className="text-4xl">{skill.icon}</div>
          )}
        </div>
        <h3 className="font-semibold text-lg text-white">{skill.name}</h3>
      </div>
    </div>
  );

  const SoftSkillCard = ({
    skill,
  }: {
    skill: { name: string; icon: string; description: string };
  }) => (
    <div className="group bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
      <div className="text-center">
        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {skill.description}
        </p>
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-gradient-to-b from-black to-zinc-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiencies and
            professional capabilities
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-full p-1 border border-zinc-800">
            <button
              onClick={() => setActiveTab("technical")}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
                activeTab === "technical"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab("soft")}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
                activeTab === "soft"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Soft Skills
            </button>
          </div>
        </div>

        {/* Technical Skills */}
        {activeTab === "technical" && (
          <div className="space-y-12">
            {skillCategories.map((category: SkillCategory, idx: number) => (
              <div
                key={category.title}
                className="animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center text-zinc-200">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {category.skills.map((skill: Skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Soft Skills */}
        {activeTab === "soft" && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-center text-zinc-200">
              Professional Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill) => (
                <SoftSkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-xl font-semibold mb-4">Always Learning</h3>
            <p className="text-zinc-400 max-w-3xl mx-auto">
              Technology evolves rapidly, and I&apos;m committed to continuous
              learning. Currently exploring advanced AI/ML concepts, cloud
              architecture patterns, and emerging web technologies to stay at
              the forefront of software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
