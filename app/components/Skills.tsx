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
    <div className="group bg-white p-6 rounded-xl border border-stone-200 hover:border-stone-300 transition-colors duration-200">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 flex items-center justify-center">
          {skill.icon.startsWith("http") ? (
            <Image
              src={skill.icon}
              alt={skill.name}
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-4xl">{skill.icon}</div>
          )}
        </div>
        <h3 className="font-semibold text-lg text-stone-900">{skill.name}</h3>
      </div>
    </div>
  );

  const SoftSkillCard = ({
    skill,
  }: {
    skill: { name: string; icon: string; description: string };
  }) => (
    <div className="group bg-white p-6 rounded-xl border border-stone-200 hover:border-stone-300 transition-colors duration-200">
      <div className="text-center">
        <div className="text-3xl mb-3">
          {skill.icon}
        </div>
        <h3 className="font-semibold text-lg text-stone-900 mb-2">{skill.name}</h3>
        <p className="text-sm text-stone-500 leading-relaxed">
          {skill.description}
        </p>
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-stone-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
            Skills
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            What I work with
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-stone-100 rounded-full p-1 border border-stone-200">
            <button
              onClick={() => setActiveTab("technical")}
              className={`px-8 py-3 rounded-full transition-colors duration-200 font-medium ${
                activeTab === "technical"
                  ? "bg-slate-700 text-white shadow-sm"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab("soft")}
              className={`px-8 py-3 rounded-full transition-colors duration-200 font-medium ${
                activeTab === "soft"
                  ? "bg-slate-700 text-white shadow-sm"
                  : "text-stone-500 hover:text-stone-900"
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
                <h3 className="text-2xl font-bold mb-6 text-center text-stone-700">
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
            <h3 className="text-2xl font-bold mb-8 text-center text-stone-700">
              Professional Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill) => (
                <SoftSkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;
