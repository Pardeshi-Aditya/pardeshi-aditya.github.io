import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import Navigation from "./Navigation";

const Hero = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  const projects = [
    {
      title: "Rankon Fitness",
      subtitle: "Gym Management System",
      description:
        "Comprehensive system streamlining lead tracking, membership administration, invoicing, and payment due date management for fitness centers.",
      tags: ["Side Project", "Full Stack"],
      link: "https://rankonfitness.com/",
    },
    {
      title: "NeatEye",
      subtitle: "Gesture Based Media Player Controller",
      description:
        "AI-powered media player controller using hand gestures. Performs Play/Pause, Seek, and volume control operations with just a webcam.",
      tags: ["AI", "Google Mediapipe", "OpenCV"],
      link: "https://www.youtube.com/watch?v=ofLzcyQZymQ",
    },
    {
      title: "Commit",
      subtitle: "Open Source Developer Tool",
      description:
        "React and TypeScript application for viewing ERD and APIs in Frappe projects. Designed with Shadcn-ui and TailwindCSS.",
      tags: ["Open Source", "✨ 108+ GitHub Stars"],
      link: "https://github.com/The-Commit-Company/commit",
    },
  ];

  const experiences = [
    {
      title: "Project Manager",
      company: "Moofwd (Contingent at MasterCard)",
      duration: "Apr 2025 – present",
      description:
        "Leading Android development team building Community Pass Kernel and platform services for Mastercard's digital infrastructure in remote communities.",
    },
    {
      title: "Freelance Developer",
      company: "Self Employed",
      duration: "Jul 2024 – present",
      description:
        "Developing web apps and native mobile applications using TypeScript, React Native, and TailwindCSS.",
    },
    {
      title: "Software Developer (Contract)",
      company: "The Commit Company",
      duration: "Mar 2024 – Jul 2024",
      description:
        "Built React-based Chat Application with message pinning, saving, and timestamping features.",
    },
    {
      title: "Senior Software Engineer",
      company: "Capgemini",
      duration: "Oct 2022 – Jan 2024",
      description:
        "Spearheaded frontend development delivering scalable, responsive interfaces using React.js.",
    },
  ];

  const skills = [
    "TypeScript/JavaScript",
    "React.js",
    "Next.js",
    "TailwindCSS",
    "Node.js",
    "React Native",
    "Git/GitHub",
    "Python",
    "MongoDB",
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white text-gray-900 font-light">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-120px)]">
              {/* Left Side - Introduction */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="w-12 h-px bg-gray-900 transition-all duration-700 hover:w-24"></div>
                  <h1 className="text-5xl lg:text-6xl font-extralight tracking-tight leading-none">
                    Software
                    <span className="block text-gray-600 mt-2">Developer</span>
                  </h1>
                </div>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-xl">
                  <p className="transition-opacity duration-500 hover:opacity-80">
                    3 years of experience building scalable, responsive web
                    applications using React, TypeScript, and modern frameworks.
                    Passionate about creating intuitive interfaces and
                    meaningful user experiences.
                  </p>
                </div>

                <div className="flex items-center space-x-6 pt-4">
                  <a
                    href="mailto:mailadityapardeshi@gmail.com"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-light tracking-wide">
                      Get in touch
                    </span>
                  </a>
                  <div className="flex items-center space-x-4">
                    <a
                      href="https://github.com/pardeshi-aditya"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/adityapardeshi/"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side - Profile Card */}
              <div className="relative group">
                <div className="bg-gray-50 p-12 transition-all duration-700 group-hover:shadow-xl border border-gray-100">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-extralight tracking-tight">
                        Profile
                      </h2>
                      <div className="w-8 h-px bg-gray-900"></div>
                    </div>

                    <div className="space-y-6 text-gray-700">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="font-light tracking-wide">
                          Pune, Maharashtra, India
                        </span>
                      </div>

                      <div className="space-y-2">
                        <p className="font-medium text-gray-900 tracking-wide">
                          Education
                        </p>
                        <p className="font-light">
                          Bachelor of Engineering, Computer Science
                        </p>
                        <p className="text-sm text-gray-600">
                          University of Pune • 9.08 CGPA
                        </p>
                      </div>

                      {/* <div className="space-y-2">
                        <p className="font-medium text-gray-900 tracking-wide">
                          Certifications
                        </p>
                        <p className="font-light">
                          Salesforce Certified Administrator
                        </p>
                        <p className="text-sm text-gray-600">
                          TOEFL: 103/120 • GRE: 309/340
                        </p>
                      </div> */}
                    </div>

                    <div className="pt-4">
                      <a
                        href="https://drive.google.com/file/d/1QwssBlxY_ltc2tB6LE0uobxmr_BwTgeE/view?usp=sharing"
                        download="Aditya_Pardeshi_Resume.pdf"
                        className="w-fit group flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white font-medium tracking-wide transition-all duration-300 hover:bg-gray-800 hover:tracking-wider"
                      >
                        <span>Download Resume</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-900 rounded-sm opacity-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-4 mb-16">
              <div className="w-12 h-px bg-gray-900"></div>
              <h2 className="text-4xl font-extralight tracking-tight">
                Experience
              </h2>
            </div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="group">
                  <div className="bg-white p-8 transition-all duration-500 group-hover:shadow-lg border border-gray-100">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-light tracking-tight text-gray-900">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-gray-600 font-light mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <div className="mt-2 lg:mt-0">
                        <span className="text-sm text-gray-500 font-light tracking-wide">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-4 mb-16">
              <div className="w-12 h-px bg-gray-900"></div>
              <h2 className="text-4xl font-extralight tracking-tight">
                Projects
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-50 p-8 h-full transition-all duration-500 group-hover:shadow-xl border border-gray-100">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-light tracking-tight text-gray-900">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 font-light">
                            {project.subtitle}
                          </p>
                        </div>
                        <a href={project.link}>
                          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                        </a>
                      </div>

                      <p className="text-gray-700 leading-relaxed font-light">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs font-light tracking-wide text-gray-600 bg-white border border-gray-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-4 mb-16">
              <div className="w-12 h-px bg-gray-900"></div>
              <h2 className="text-4xl font-extralight tracking-tight">
                Skills & Technologies
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white p-4 text-center border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-gray-900"
                >
                  <span className="text-gray-900 font-light tracking-wide text-sm">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <div className="w-12 h-px bg-gray-900 mx-auto"></div>
                <h2 className="text-4xl font-extralight tracking-tight">
                  Let's Connect
                </h2>
              </div>

              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  Interested in working together? I'm always open to discussing
                  new opportunities and exciting projects. Let's create
                  something amazing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <a
                  href="mailto:mailadityapardeshi@gmail.com"
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white font-medium tracking-wide transition-all duration-300 hover:bg-gray-800 hover:tracking-wider"
                >
                  <Mail className="w-5 h-5" />
                  <span>mailadityapardeshi@gmail.com</span>
                </a>

                <a
                  href="tel:+919552066154"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-light tracking-wide">
                    +91 9552066154
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="text-sm text-gray-600 font-light tracking-wide">
                © 2025 Aditya Pardeshi. All rights reserved.
              </p>

              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <a
                  href="https://github.com/pardeshi-aditya"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/adityapardeshi"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Hero;
