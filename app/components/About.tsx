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
} from "lucide-react";

const About = () => {
  const interests = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Sports",
      description:
        "Fan of the Toronto Maple Leafs, Toronto Blue Jays and the Toronto Raptors",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography & Videography",
      description:
        "I shoot photos and videos — mostly street and travel stuff",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Content Creation",
      description: "Making videos and experimenting with different formats",
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Foodie",
      description: "Always looking for good food spots around the city",
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Travel",
      description: "I like seeing new places when I get the chance",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Tech",
      description: "Messing around with new tools and frameworks",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
            About Me
          </h2>
        </div>

        {/* Hero Profile Card */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 transition-colors duration-200">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Profile Image */}
              <div className="relative flex-shrink-0">
                <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-stone-200 shadow-sm">
                  <Image
                    src="/miguel2.jpeg"
                    alt="Miguel Advincula"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center lg:text-left space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-stone-50 rounded-xl p-5 text-center border border-stone-200">
                    <div className="text-2xl lg:text-3xl font-bold text-slate-700">
                      Toronto
                    </div>
                    <div className="text-sm text-stone-500 mt-1">
                      Ontario, Canada
                    </div>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-5 text-center border border-stone-200">
                    <div className="text-2xl lg:text-3xl font-bold text-slate-700">
                      Full-Stack
                    </div>
                    <div className="text-sm text-stone-500 mt-1">
                      Developer
                    </div>
                  </div>
                </div>

                <p className="text-stone-600 leading-relaxed text-lg lg:text-xl max-w-2xl lg:max-w-none">
                  I like figuring out how things work and building stuff along
                  the way. Currently in my 3rd year at York studying Computer
                  Science.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 transition-colors duration-200">
            <div className="flex items-center gap-6 mb-10">
              <div className="p-4 bg-slate-700 rounded-2xl">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-stone-900">
                Education
              </h3>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* York University Logo */}
              <div className="flex-shrink-0 relative">
                <div className="relative w-40 h-40 lg:w-48 lg:h-48 bg-stone-50 rounded-3xl flex items-center justify-center border border-stone-200">
                  <Image
                    src="/yorkulogo.jpg"
                    alt="York University Logo"
                    width={120}
                    height={120}
                    className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
                  />
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left space-y-4">
                <h4 className="text-3xl lg:text-3xl font-bold text-stone-900">
                  York University, Lassonde School of Engineering
                </h4>
                <p className="text-xl lg:text-2xl text-slate-700 font-semibold">
                  Bachelor of Arts (Specialized Honours) - Computer Science
                </p>
                <p className="text-lg lg:text-xl text-stone-600 font-medium">
                  Software Development Stream
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 text-base lg:text-lg text-stone-500 pt-2">
                  <span className="flex items-center gap-2 bg-stone-100 px-3 py-2 rounded-lg border border-stone-200">
                    <MapPin className="w-4 h-4" />
                    Toronto, Ontario, Canada
                  </span>
                  <span className="bg-stone-100 px-3 py-2 rounded-lg border border-stone-200">
                    Expected Graduation: 2027
                  </span>
                  <span className="bg-stone-100 px-3 py-2 rounded-lg border border-stone-200">
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
            <h3 className="text-3xl font-bold text-stone-900 mb-4">
              Interests
            </h3>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Some things I&apos;m into outside of coding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div
                key={interest.title}
                className="group bg-white rounded-2xl p-6 border border-stone-200 hover:border-stone-300 transition-colors duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <div className="inline-flex p-3 rounded-xl bg-stone-100 mb-4">
                    <div className="text-stone-600">{interest.icon}</div>
                  </div>
                  <h4 className="font-bold text-xl text-stone-900 mb-3">
                    {interest.title}
                  </h4>
                  <p className="text-stone-500 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
