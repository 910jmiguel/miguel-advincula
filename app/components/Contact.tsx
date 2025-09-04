"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  MapPin,
  MessageSquare,
  Send,
  Copy,
  Check,
  ExternalLink,
  Download,
  Calendar,
} from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = async (text: string, type: string) => {
    if (!mounted) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mounted) return;
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Hi Miguel,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:910jmiguel@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "910jmiguel@gmail.com",
      href: "mailto:910jmiguel@gmail.com",
      copyText: "910jmiguel@gmail.com",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "hover:shadow-blue-500/20",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Miguel Advincula",
      href: "https://www.linkedin.com/in/miguel-advincula-691ba0279/",
      copyText: "https://www.linkedin.com/in/miguel-advincula-691ba0279/",
      color: "from-blue-600 to-blue-400",
      hoverColor: "hover:shadow-blue-600/20",
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "@910jmiguel",
      href: "https://github.com/910jmiguel",
      copyText: "https://github.com/910jmiguel",
      color: "from-gray-600 to-gray-400",
      hoverColor: "hover:shadow-gray-500/20",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Toronto, Ontario, Canada",
      href: "https://maps.google.com/?q=Toronto,Ontario,Canada",
      copyText: "Toronto, Ontario, Canada",
      color: "from-green-500 to-emerald-500",
      hoverColor: "hover:shadow-green-500/20",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      value: "@miguel.advincula_",
      href: "https://www.instagram.com/miguel.advincula_/",
      copyText: "https://www.instagram.com/miguel.advincula_/",
      color: "from-pink-500 to-purple-500",
      hoverColor: "hover:shadow-pink-500/20",
    }
  ];

  // Prevent hydration mismatch by not rendering interactive elements on server
  if (!mounted) {
    return (
      <section
        id="contact"
        className="py-16 md:py-24 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 min-h-screen"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Connect with Me
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Loading...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 min-h-screen"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Connect with Me
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            I&apos;m always excited to discuss new opportunities, collaborate on
            projects, or simply chat about technology and innovation. Let&apos;s
            connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-blue-400" />
              Get In Touch
            </h3>

            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <div
                  key={method.title}
                  className="group bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 bg-gradient-to-r ${method.color} rounded-lg shadow-lg ${method.hoverColor} transition-all duration-300 group-hover:scale-110`}
                      >
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          {method.title}
                        </h4>
                        <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          handleCopy(method.copyText, method.title)
                        }
                        className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all duration-300 hover:scale-110"
                        title={`Copy ${method.title}`}
                      >
                        {copied === method.title ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-zinc-400" />
                        )}
                      </button>
                      <a
                        href={method.href}
                        target={
                          method.href.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          method.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all duration-300 hover:scale-110"
                        title={`Open ${method.title}`}
                      >
                        <ExternalLink className="w-4 h-4 text-zinc-400" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 mt-8">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                Quick Actions
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/JMA_Resume_Sep2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/miguel-advincula-691ba0279/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-lg font-medium transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Send className="w-6 h-6 text-purple-400" />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-400 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-400 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-zinc-400 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="What&apos;s this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-400 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full group px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center">
          <div className="bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Let&apos;s Build Something Amazing Together
            </h3>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Whether you&apos;re looking for a dedicated developer for your team,
              have an exciting project idea, or want to discuss the latest in
              technology, I&apos;m always open to meaningful conversations. Let&apos;s
              connect and explore how we can create something impactful
              together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
