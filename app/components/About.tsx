import Image from "next/image";
import React from "react";
import {
  Camera,
  MapPin,
  Utensils,
  Video,
  Eye,
  Plane,
  GraduationCap,
  Code2,
  Heart,
} from "lucide-react";

const About = () => {
  const interests = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Sports",
      description:
        "Fan of the Toronto Maple Leafs, Toronto Blue Jays and the Toronto Raptors",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography & Videography",
      description:
        "Capturing moments and creating visual stories through the lens",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Content Creation",
      description:
        "Creating engaging digital content and exploring new creative mediums",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Foodie",
      description:
        "Exploring different cuisines and discovering new flavors from around the world",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Travel",
      description:
        "Passionate about exploring new places and experiencing different cultures",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Tech Innovation",
      description:
        "Always exploring emerging technologies and their potential applications",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-b from-zinc-950 to-black"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        {/* Hero Profile Card */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Profile Image */}
              <div className="relative flex-shrink-0 group">
                <div className="absolute -inset-6 bg-gradient-conic from-blue-500 via-purple-500 to-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 animate-[spin_10s_linear_infinite] transition-opacity duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-2xl">
                  <Image
                    src="/miguel2.jpeg"
                    alt="Miguel Advincula"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center lg:text-left space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="group bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-5 text-center border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                    <div className="text-2xl lg:text-3xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">
                      Toronto
                    </div>
                    <div className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors mt-1">
                      Ontario, Canada
                    </div>
                  </div>
                  <div className="group bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-5 text-center border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                    <div className="text-2xl lg:text-3xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">
                      Full-Stack
                    </div>
                    <div className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors mt-1">
                      Developer
                    </div>
                  </div>
                </div>

                <p className="text-zinc-300 leading-relaxed text-lg lg:text-xl max-w-2xl lg:max-w-none">
                  Aspiring full-stack developer based in Toronto, currently
                  studying Computer Science. Passionate about learning,
                  experimenting with new technologies, and creating applications
                  that make an impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-6 mb-10">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text">
                Education
              </h3>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* York University Logo */}
              <div className="flex-shrink-0 relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-red-500/20 to-red-700/20 rounded-3xl blur-2xl group-hover:blur-3xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
                <div className="relative w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-red-500/30 transition-all duration-500 border border-red-500/20">
                  <Image
                    src="/yorkulogo.jpg"
                    alt="York University Logo"
                    width={120}
                    height={120}
                    className="w-24 h-24 lg:w-32 lg:h-32 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left space-y-4">
                <h4 className="text-3xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-white via-red-100 to-white bg-clip-text">
                  York University, Lassonde School of Engineering
                </h4>
                <p className="text-xl lg:text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  Bachelor of Arts (Specialized Honours) - Computer Science
                </p>
                <p className="text-lg lg:text-xl text-purple-400 font-medium">
                  Software Development Stream
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 text-base lg:text-lg text-zinc-400 pt-2">
                  <span className="flex items-center gap-2 bg-zinc-800/50 px-3 py-2 rounded-lg">
                    <MapPin className="w-4 h-4" />
                    Toronto, Ontario, Canada
                  </span>
                  <span className="bg-zinc-800/50 px-3 py-2 rounded-lg">
                    Expected Graduation: 2027
                  </span>
                  <span className="bg-zinc-800/50 px-3 py-2 rounded-lg">
                    Current: 3rd Year
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interests Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Heart className="w-8 h-8 text-red-400" />
              Beyond the Code
            </h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              The passions and interests that fuel my creativity and drive for
              innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div
                key={interest.title}
                className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 hover:border-zinc-600 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${interest.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{interest.icon}</div>
                  </div>
                  <h4 className="font-bold text-xl text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {interest.title}
                  </h4>
                  <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800 hover:border-zinc-600 transition-all duration-500">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Let&apos;s Connect!
            </h3>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              I&apos;m always excited to discuss new opportunities, collaborate
              on innovative projects, or simply chat about technology,
              creativity, and life experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                <span className="flex items-center justify-center gap-2">
                  Get In Touch
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </button>
              <button className="px-8 py-4 border border-zinc-600 text-zinc-300 rounded-xl font-medium hover:border-zinc-500 hover:text-white hover:bg-zinc-800/50 transition-all duration-300">
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
