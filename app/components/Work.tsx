"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  Calendar,
  MapPin,
  Building,
  Clock,
  Users,
  Code2,
} from "lucide-react";

interface Experience {
  id: number;
  company: string;
  position: string;
  type: string;
  duration: string;
  location: string;
  description: string;
  logo: string;
  techStack?: string[];
  skills?: string[];
  color: string;
}

const Work = () => {
  const [activeTab, setActiveTab] = useState<"tech" | "parttime">("tech");

  // Tech/Professional Experience
  const techExperience = [
    {
      id: 1,
      company: "PharmShift",
      position: "AI & Full-Stack Developer",
      type: "Contract Part-Time",
      duration: "Fall 2025",
      location: "Toronto, ON",
      description:
        "Built and integrated user-facing features (multilingual support, user profiles, and a free case submission system) using React.js and Node.js, developed frontend–backend integrations for AI-powered OSCE exam preparation simulations, and collaborated on GCP deployment to deliver scalable, accessible, and affordable clinical scenario practice tools.",
      logo: "/pharmshift_logo.jpg",
      techStack: ["React", "Node.js", "TypeScript", "MongoDB"],
      color: "from-blue-500 to-cyan-500",
    },
  ];

  // Part-time Experience
  const partTimeExperience = [
    {
      id: 1,
      company: "Canada's Wonderland",
      position: "Sales Team Lead",
      type: "Contract Part-Time",
      duration: "May 2024 - Aug 2025",
      location: "Vaughan, ON",
      description:
        "Led a team by assigning tasks, training and supporting associates, ensuring compliance with standards, supervising staffing and inventory, and resolving guest concerns while fostering a positive and collaborative work environment.",
      logo: "/cwlogo.png",
      skills: [
        "Communication",
        "Problem Solving",
        "Time Management",
        "Leadership",
        "Supervisory",
        "Employee Training",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      id: 2,
      company: "Elections Canada, Toronto-St. Paul's Riding",
      position: "Data Entry Clerk",
      type: "On-Call",
      duration: "Apr 2025 - May 2025",
      location: "Toronto, ON",
      description:
        "Maintained accurate voter registration data by securely entering and verifying information under tight deadlines, handled confidential electoral records in compliance with Elections Canada protocols, and collaborated with colleagues to ensure data accuracy and proper execution.",
      logo: "/electionscanadalogo.png",
      skills: ["Keying", "Data Entry", "Collaboration", "Time Management"],
      color: "from-orange-500 to-red-500",
    },
    {
      id: 3,
      company: "Elections Canada, Toronto-St. Paul's Riding",
      position: "Deputy Returning Officer",
      type: "On-Call",
      duration: "Apr 2025",
      location: "Toronto, ON",
      description:
        "Assisted in managing polling station operations during elections, ensured compliance with electoral procedures, and provided excellent customer service to voters while upholding the integrity of the electoral process.",
      logo: "/electionscanadalogo.png",
      skills: ["Keying", "Data Entry", "Collaboration", "Time Management"],
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      company: "Canada's Wonderland",
      position: "Sales Associate",
      type: "Contract Part-Time",
      duration: "Mar 2024 - May 2024",
      location: "Vaughan, ON",
      description:
        "Greeted and assisted guests to deliver an excellent customer experience, demonstrated strong product knowledge across clothing, accessories, souvenirs, and theme park items, and efficiently processed 100+ purchases per shift using multiple POS systems. Promoted to Sales Team Lead in May 2025.",
      logo: "/cwlogo.png",
      skills: [
        "Guest Service",
        "Point of Sales (POS) Systems",
        "Associate Development",
        "Collaborative Problem Solving"
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      company: "Food Basics",
      position: "Front End Clerk & Supervisor",
      type: "Permanent Part-Time",
      duration: "Jul 2022 - Jul 2024",
      location: "Richmond Hill, ON",
      description:
        "Assisted 100+ customer inquiries per shift, resolved complaints, trained new employees on POS and self-checkout systems, gained supervisory experience supporting cashier colleagues, and was recognized as Employee of the Month for excellent customer service and handling challenging situations.",
      logo: "/foodbasics.jpg",
      skills: [
        "Leadership",
        "Point of Systems (POS) Systems",
        "Cash Handling",
        "Employee Training",
        "Customer Service",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const ExperienceCard = ({
    experience,
    isTech = true,
  }: {
    experience: Experience;
    isTech?: boolean;
  }) => (
    <div className="group bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2">
      {/* Company Header */}
      <div className="flex items-start gap-4 mb-6">
        {/* Company Logo */}
        <div className="flex-shrink-0">
          <div
            className={`w-16 h-16 bg-gradient-to-r ${experience.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden`}
          >
            {experience.logo &&
            experience.logo !== "/company-placeholder.svg" ? (
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <Building className="w-8 h-8 text-white" />
            )}
          </div>
        </div>

        {/* Company Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-xl text-white mb-1 group-hover:text-blue-300 transition-colors">
            {experience.position}
          </h3>
          <p className="text-lg text-blue-400 font-medium mb-2">
            {experience.company}
          </p>
          <div className="flex flex-wrap gap-2 text-sm text-zinc-400">
            <span className="flex items-center gap-1 bg-zinc-800/50 px-2 py-1 rounded-md">
              <Briefcase className="w-3 h-3" />
              {experience.type}
            </span>
            <span className="flex items-center gap-1 bg-zinc-800/50 px-2 py-1 rounded-md">
              <Calendar className="w-3 h-3" />
              {experience.duration}
            </span>
            <span className="flex items-center gap-1 bg-zinc-800/50 px-2 py-1 rounded-md">
              <MapPin className="w-3 h-3" />
              {experience.location}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-zinc-300 leading-relaxed mb-6">
        {experience.description}
      </p>

      {/* Skills/Tech Stack */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wide">
          {isTech ? "Tech Stack" : "Key Skills"}
        </h4>
        <div className="flex flex-wrap gap-2">
          {(isTech ? experience.techStack : experience.skills)?.map(
            (skill: string, index: number) => (
              <span
                key={index}
                className={`px-3 py-1 bg-gradient-to-r ${experience.color} bg-opacity-10 border border-current border-opacity-20 rounded-full text-sm font-medium text-white hover:bg-opacity-20 transition-all duration-300`}
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="work"
      className="py-16 md:py-24 bg-gradient-to-b from-black to-zinc-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            My professional journey and experiences that have shaped my skills
            and perspective
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-full p-1 border border-zinc-800">
            <button
              onClick={() => setActiveTab("tech")}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
                activeTab === "tech"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                Tech Experience
              </span>
            </button>
            <button
              onClick={() => setActiveTab("parttime")}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
                activeTab === "parttime"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Part-time Experience
              </span>
            </button>
          </div>
        </div>

        {/* Experience Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "tech" && (
            <div className="space-y-8">
              {techExperience.length > 0 ? (
                techExperience.map((experience, index) => (
                  <div
                    key={experience.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ExperienceCard experience={experience} isTech={true} />
                  </div>
                ))
              ) : (
                <div className="text-center py-16">
                  <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
                    <Briefcase className="w-16 h-16 text-zinc-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Ready for New Opportunities
                    </h3>
                    <p className="text-zinc-400 max-w-md mx-auto">
                      I&apos;m actively seeking internships, co-op positions, and
                      entry-level roles where I can apply my skills and grow as
                      a developer.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "parttime" && (
            <div className="space-y-8">
              {partTimeExperience.map((experience, index) => (
                <div
                  key={experience.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ExperienceCard experience={experience} isTech={false} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Let&apos;s Work Together
            </h3>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-6">
              I&apos;m always open to new opportunities and collaborations. Whether
              it&apos;s an internship, co-op position, or project collaboration, I&apos;d
              love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                <span className="flex items-center justify-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  View Resume
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </button>
              <button className="px-6 py-3 border border-zinc-600 text-zinc-300 rounded-lg font-medium hover:border-zinc-500 hover:text-white hover:bg-zinc-800/50 transition-all duration-300">
                <span className="flex items-center justify-center gap-2">
                  <Users className="w-4 h-4" />
                  Get In Touch
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
