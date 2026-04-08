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
  Heart,
} from "lucide-react";
import { useReveal } from "@/app/hooks/useReveal";

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
  const [activeTab, setActiveTab] = useState<"tech" | "parttime" | "leadership" | "volunteer">("tech");
  const headerRef = useReveal();
  const contentRef = useReveal(0.1);

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

  const volunteerExperience: Experience[] = [
    {
      id: 1,
      company: "Canadian Undergraduate Technology Conference (CUTC)",
      position: "Tech Associate & Panelist",
      type: "Volunteer",
      duration: "Nov 2025 – Present",
      location: "Toronto, ON",
      description:
        "Contributing to CUTC as a Tech Associate, helping organize and run technology-focused events for undergraduate students across Canada. Served as a judge at the Caffeine.ai Promptathon evaluating AI prompt engineering projects, and participated as a panelist at OTU's 'Hello AI' event discussing AI trends, career paths, and the future of tech with students and industry professionals.",
      logo: "/company-placeholder.svg",
      skills: ["Event Organization", "Public Speaking", "Judging", "AI", "Mentorship", "Community Building"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 2,
      company: "York University",
      position: "Student Alumni Ambassador",
      type: "Volunteer",
      duration: "2025 – Present",
      location: "Toronto, ON",
      description:
        "Representing York University as a Student Alumni Ambassador, bridging the gap between current students and alumni networks. Engaging with prospective and current students to share experiences, promote university initiatives, and foster a sense of community within the York alumni ecosystem.",
      logo: "/yorkulogo.jpg",
      skills: ["Networking", "Public Speaking", "Community Engagement", "Event Coordination", "Mentorship"],
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const ExperienceCard = ({
    experience,
    isTech = true,
  }: {
    experience: Experience;
    isTech?: boolean;
  }) => (
    <div className="group bg-white rounded-2xl p-6 border border-stone-200 card-lift">
      <div className="flex items-start gap-4 mb-6">
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
              <div className="w-full h-full flex items-center justify-center" style={{ background: 'var(--copper-subtle)' }}>
                <Building className="w-8 h-8" style={{ color: 'var(--copper)' }} />
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-xl text-stone-900 mb-1">
            {experience.position}
          </h3>
          <p className="text-lg font-medium mb-2" style={{ color: 'var(--copper-dark)' }}>
            {experience.company}
          </p>
          <div className="flex flex-wrap gap-2 text-sm text-stone-500">
            <span className="flex items-center gap-1 px-2 py-1 rounded-md border border-stone-200" style={{ background: 'var(--copper-subtle)' }}>
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

      <p className="text-stone-600 leading-relaxed mb-6">
        {experience.description}
      </p>

      <div className="space-y-3">
        <h4 className="text-sm font-medium text-stone-500 uppercase tracking-wide">
          {isTech ? "Tech Stack" : "Key Skills"}
        </h4>
        <div className="flex flex-wrap gap-2">
          {(isTech ? experience.techStack : experience.skills)?.map(
            (skill: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm font-medium border"
                style={{
                  background: 'var(--copper-subtle)',
                  borderColor: 'var(--copper-muted)',
                  color: 'var(--copper-dark)',
                }}
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { key: "tech" as const, label: "Tech Experience", icon: Code2 },
    { key: "parttime" as const, label: "Non-Tech Experience", icon: Clock },
    { key: "leadership" as const, label: "Leadership", icon: Award },
    { key: "volunteer" as const, label: "Volunteer & Community", icon: Heart },
  ];

  const experienceMap = {
    tech: { data: techExperience, isTech: true },
    parttime: { data: partTimeExperience, isTech: false },
    leadership: { data: leadershipExperience, isTech: false },
    volunteer: { data: volunteerExperience, isTech: false },
  };

  return (
    <section id="work" className="py-20 md:py-32 bg-white grain relative">
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className="reveal text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 text-stone-900 tracking-tight">
            Work Experience
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Where I&apos;ve worked
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-1 border border-stone-200 flex flex-wrap justify-center gap-1 shadow-sm">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl transition-all duration-200 font-medium ${
                  activeTab === key
                    ? "text-white shadow-sm"
                    : "text-stone-500 hover:text-stone-900"
                }`}
                style={activeTab === key ? { background: 'var(--copper)' } : {}}
              >
                <span className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div ref={contentRef} className="reveal max-w-4xl mx-auto">
          {(() => {
            const { data, isTech } = experienceMap[activeTab];
            if (data.length === 0) {
              return (
                <div className="text-center py-16">
                  <div className="bg-white rounded-2xl p-8 border border-stone-200">
                    <Briefcase className="w-16 h-16 text-stone-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-stone-900 mb-2">
                      Ready for New Opportunities
                    </h3>
                    <p className="text-stone-500 max-w-md mx-auto">
                      I&apos;m actively seeking roles where I can apply my skills and grow.
                    </p>
                  </div>
                </div>
              );
            }
            return (
              <div className="space-y-8">
                {data.map((experience, index) => (
                  <div
                    key={experience.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ExperienceCard experience={experience} isTech={isTech} />
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export default Work;
