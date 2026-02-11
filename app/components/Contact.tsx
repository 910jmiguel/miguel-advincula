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
import { TikTokIcon } from "@/app/ui/icons";

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
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Miguel Advincula",
      href: "https://www.linkedin.com/in/910jmiguel/",
      copyText: "https://www.linkedin.com/in/910jmiguel/",
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "@910jmiguel",
      href: "https://github.com/910jmiguel",
      copyText: "https://github.com/910jmiguel",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Toronto, Ontario, Canada",
      href: "https://maps.google.com/?q=Toronto,Ontario,Canada",
      copyText: "Toronto, Ontario, Canada",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      value: "@jmiguel.adv",
      href: "https://www.instagram.com/jmiguel.adv",
      copyText: "https://www.instagram.com/jmiguel.adv",
    },
    {
      icon: <TikTokIcon className="w-6 h-6" size={24} />,
      title: "TikTok",
      value: "@jmiguel.adv",
      href: "https://www.tiktok.com/@jmiguel.adv",
      copyText: "https://www.tiktok.com/@jmiguel.adv",
    },
  ];

  // Prevent hydration mismatch by not rendering interactive elements on server
  if (!mounted) {
    return (
      <section
        id="contact"
        className="py-16 md:py-24 bg-stone-50 min-h-screen"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
              Contact
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
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
      className="py-16 md:py-24 bg-stone-50 min-h-screen"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
            Contact
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Whether it&apos;s a project idea, a quick chat about tech, career advice, or mentorship — I&apos;m always happy to connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-slate-700" />
              Get In Touch
            </h3>

            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <div
                  key={method.title}
                  className="group bg-white rounded-xl p-6 border border-stone-200 hover:border-stone-300 transition-colors duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-stone-100 rounded-lg text-stone-600">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="text-stone-900 font-semibold mb-1">
                          {method.title}
                        </h4>
                        <p className="text-stone-500 group-hover:text-stone-600 transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          handleCopy(method.copyText, method.title)
                        }
                        className="p-2 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors duration-200"
                        title={`Copy ${method.title}`}
                      >
                        {copied === method.title ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-stone-500" />
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
                        className="p-2 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors duration-200"
                        title={`Open ${method.title}`}
                      >
                        <ExternalLink className="w-4 h-4 text-stone-500" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 mt-8">
              <h4 className="text-stone-900 font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-slate-700" />
                Quick Actions
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/JMA_CS_Resume_Feb2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/910jmiguel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg font-medium transition-colors duration-200 border border-stone-200"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
              <Send className="w-6 h-6 text-slate-700" />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-stone-500 mb-2"
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
                    className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-stone-500 mb-2"
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
                    className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-stone-500 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-colors duration-200"
                  placeholder="Project, mentorship, career chat, or something else?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-stone-500 mb-2"
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
                  className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-colors duration-200 resize-vertical"
                  placeholder="Tell me about your project, mentorship request, career question, or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors duration-200"
              >
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
