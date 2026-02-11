"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  Calendar,
  MapPin,
  Building,
  Clock,
  Code2,
  Award,
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
  const [activeTab, setActiveTab] = useState<"tech" | "parttime" | "leadership">("tech");

  // Tech/Professional Experience
  const techExperience: Experience[] = [
    {
      id: 2,
      company: "Pitstop",
      position: "AI & Software Engineer Intern",
      type: "Co-op / Internship",
      duration: "Jan 2026 – Present",
      location: "Toronto, ON",
      description:
        "Improving the work order scan tool and dashboard report generation, collaborating with UI/UX, backend, and data teams to enhance product functionality. Supporting data analysis, visualization, and backend services that integrate vehicle telematics, IoT data, and predictive maintenance insights.",
      logo: "/pitstopconnect_logo.jpg",
      techStack: ["JavaScript", "Python"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      company: "HAVN Inc.",
      position: "Founding Engineer",
      type: "Co-Founder",
      duration: "Nov 2025 – Present",
      location: "Toronto, ON",
      description:
        "Building a privacy-first social platform from the ground up. Leading full-stack development across mobile and web, architecting backend services, and shipping features end-to-end in a fast-paced startup environment.",
      logo: "/havn.jpg",
      techStack: ["React Native", "Expo", "Python", "FastAPI", "AWS", "React.js", "TailwindCSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      company: "PharmShift",
      position: "Web Developer",
      type: "Part-Time Intern",
      duration: "Aug 2025 – Dec 2025",
      location: "Toronto, ON",
      description:
        "Built and integrated user-facing features (multilingual support, user profiles, and a free case submission system) using React.js and Node.js, developed frontend–backend integrations for AI-powered OSCE exam preparation simulations, and collaborated on GCP deployment to deliver scalable, accessible, and affordable clinical scenario practice tools.",
      logo: "/pharmshift_logo.jpg",
      techStack: ["React", "Node.js", "TypeScript", "MongoDB"],
      color: "from-blue-500 to-cyan-500",
    },
  ];

  // Part-time Experience
  const partTimeExperience: Experience[] = [
    {
      id: 6,
      company: "Chatbase",
      position: "Content Creator",
      type: "Freelance",
      duration: "Feb 2026 – Present",
      location: "Remote",
      description:
        "Creating branded content for Chatbase's AI chatbot platform across TikTok and Instagram. Developing content strategies to showcase AI capabilities and drive user engagement through short-form video content.",
      logo: "/chatbase_co_logo.jpg",
      skills: ["Content Strategy", "TikTok", "Instagram", "AI"],
      color: "from-orange-500 to-red-500",
    },
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
        "Collaborative Problem Solving",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  // Leadership Experience
  const leadershipExperience: Experience[] = [
    {
      id: 1,
      company: "CUTC & Various Industry Events",
      position: "Judge & Panelist",
      type: "Volunteer",
      duration: "Nov 2025 – Present",
      location: "Toronto, ON",
      description:
        "Judged AI projects at the Caffeine.ai Promptathon hosted by CUTC, evaluating prompt engineering and AI application quality. Served as a panelist at OTU's 'Hello AI' event, discussing AI trends and career paths in tech with students and industry professionals.",
      logo: "/company-placeholder.svg",
      skills: ["Public Speaking", "Judging", "AI", "Mentorship", "Networking"],
      color: "from-amber-500 to-yellow-500",
    },
  ];

  const ExperienceCard = ({
    experience,
    isTech = true,
  }: {
    experience: Experience;
    isTech?: boolean;
  }) => (
    <div className="group bg-white rounded-2xl p-6 border border-stone-200 hover:border-stone-300 transition-colors duration-200">
      {/* Company Header */}
      <div className="flex items-start gap-4 mb-6">
        {/* Company Logo */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-xl flex items-center justify-center border border-stone-200 overflow-hidden">
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
              <div className="w-full h-full bg-stone-100 flex items-center justify-center">
                <Building className="w-8 h-8 text-stone-500" />
              </div>
            )}
          </div>
        </div>

        {/* Company Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-xl text-stone-900 mb-1">
            {experience.position}
          </h3>
          <p className="text-lg text-slate-700 font-medium mb-2">
            {experience.company}
          </p>
          <div className="flex flex-wrap gap-2 text-sm text-stone-500">
            <span className="flex items-center gap-1 bg-stone-100 px-2 py-1 rounded-md border border-stone-200">
              <Briefcase className="w-3 h-3" />
              {experience.type}
            </span>
            <span className="flex items-center gap-1 bg-stone-100 px-2 py-1 rounded-md border border-stone-200">
              <Calendar className="w-3 h-3" />
              {experience.duration}
            </span>
            <span className="flex items-center gap-1 bg-stone-100 px-2 py-1 rounded-md border border-stone-200">
              <MapPin className="w-3 h-3" />
              {experience.location}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-stone-600 leading-relaxed mb-6">
        {experience.description}
      </p>

      {/* Skills/Tech Stack */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-stone-500 uppercase tracking-wide">
          {isTech ? "Tech Stack" : "Key Skills"}
        </h4>
        <div className="flex flex-wrap gap-2">
          {(isTech ? experience.techStack : experience.skills)?.map(
            (skill: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-stone-100 border border-stone-200 rounded-full text-sm font-medium text-stone-700"
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
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
            Work Experience
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Where I&apos;ve worked
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-stone-100 rounded-2xl p-1 border border-stone-200 flex flex-wrap justify-center gap-1">
            <button
              onClick={() => setActiveTab("tech")}
              className={`px-6 py-3 rounded-xl transition-colors duration-200 font-medium ${
                activeTab === "tech"
                  ? "bg-slate-700 text-white shadow-sm"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              <span className="flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                Tech Experience
              </span>
            </button>
            <button
              onClick={() => setActiveTab("parttime")}
              className={`px-6 py-3 rounded-xl transition-colors duration-200 font-medium ${
                activeTab === "parttime"
                  ? "bg-slate-700 text-white shadow-sm"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Non-Tech Experience
              </span>
            </button>
            <button
              onClick={() => setActiveTab("leadership")}
              className={`px-6 py-3 rounded-xl transition-colors duration-200 font-medium ${
                activeTab === "leadership"
                  ? "bg-slate-700 text-white shadow-sm"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Leadership
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
                  <div className="bg-white rounded-2xl p-8 border border-stone-200">
                    <Briefcase className="w-16 h-16 text-stone-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-stone-900 mb-2">
                      Ready for New Opportunities
                    </h3>
                    <p className="text-stone-500 max-w-md mx-auto">
                      I&apos;m actively seeking internships, co-op positions,
                      and entry-level roles where I can apply my skills and grow
                      as a developer.
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

          {activeTab === "leadership" && (
            <div className="space-y-8">
              {leadershipExperience.map((experience, index) => (
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

      </div>
    </section>
  );
};

export default Work;
