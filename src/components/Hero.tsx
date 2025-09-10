"use client"

import { Mail, Phone, Github, Linkedin, ExternalLink, ChevronRight, MapPin, Sun, Moon } from "lucide-react"
import { useTheme } from "../hooks/useTheme"
import logo from "../assets/mascots/smiling_mascot.png"
import { experiences, projects, skills } from "../assets/data"

const Hero = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-gray-100 dark:border-zinc-800/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="flex gap-2 text-xl font-light tracking-wide hover:opacity-80 transition-opacity text-black dark:text-zinc-100"
            >
              <img src={logo || "/placeholder.svg"} alt="me" className="h-8 w-auto" />
              Aditya Pardeshi
            </a>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-zinc-900/50 hover:bg-gray-200 dark:hover:bg-zinc-800/60 rounded-full transition-all duration-300 border border-gray-200 dark:border-zinc-700/50"
            >
              <div
                className={`flex items-center justify-center w-5 h-5 transition-transform duration-300 ${theme === "dark" ? "rotate-180" : "rotate-0"}`}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-gray-600 dark:text-zinc-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </nav>
      <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-neutral-900 dark:via-zinc-900 dark:to-neutral-900 text-gray-900 dark:text-zinc-50 font-light transition-colors duration-300">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-120px)]">
              {/* Left Side - Introduction */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="w-12 h-px bg-gray-900 dark:bg-gradient-to-r dark:from-zinc-400 dark:to-emralsd-400 transition-all duration-700 hover:w-24"></div>
                  <h1 className="text-5xl lg:text-6xl font-extralight tracking-tight leading-none">
                    Software
                    <span className="block text-gray-600 dark:text-zinc-300 mt-2">Developer</span>
                  </h1>
                </div>

                <div className="space-y-6 text-lg text-gray-700 dark:text-zinc-200 leading-relaxed max-w-xl">
                  <p className="transition-opacity duration-500 hover:opacity-80">
                    3 years of experience building scalable, responsive web applications using React, TypeScript, and
                    modern frameworks. Passionate about creating intuitive interfaces and meaningful user experiences.
                  </p>
                </div>

                <div className="flex items-center space-x-6 pt-4">
                  <a
                    href="mailto:mailadityapardeshi@gmail.com"
                    className="flex items-center space-x-2 text-gray-600 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-light tracking-wide">Get in touch</span>
                  </a>
                  <div className="flex items-center space-x-4">
                    <a
                      href="https://github.com/pardeshi-aditya"
                      className="text-gray-600 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-zinc-100 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/adityapardeshi/"
                      className="text-gray-600 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-zinc-100 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side - Profile Card */}
              <div className="relative group">
                <div className="bg-gray-50 dark:bg-neutral-800/50 dark:backdrop-blur-sm p-12 transition-all duration-700 group-hover:shadow-xl dark:group-hover:shadow-zinc-500/20 border border-gray-100 dark:border-zinc-700/30">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-extralight tracking-tight">Profile</h2>
                      <div className="w-8 h-px bg-gray-900 dark:bg-gradient-to-r dark:from-zinc-400 dark:to-red-400"></div>
                    </div>

                    <div className="space-y-6 text-gray-700 dark:text-zinc-200">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-gray-400 dark:text-zinc-400" />
                        <span className="font-light tracking-wide">Pune, Maharashtra, India</span>
                      </div>

                      <div className="space-y-2">
                        <p className="font-medium text-gray-900 dark:text-zinc-100 tracking-wide">Education</p>
                        <p className="font-light">Bachelor of Engineering, Computer Science</p>
                        <p className="text-sm text-gray-600 dark:text-zinc-300">University of Pune • 9.08 CGPA</p>
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
                        className="w-fit group flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gradient-to-r dark:from-zinc-600 dark:to-red-600 text-white dark:text-white font-medium tracking-wide transition-all duration-300 hover:bg-gray-800 dark:hover:from-zinc-700 dark:hover:to-red-700 hover:tracking-wider dark:shadow-lg dark:shadow-zinc-500/25"
                      >
                        <span>Download Resume</span>
                        <ChevronRight className="w-4 h-4 group-hover:tranneutral-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-900 dark:bg-gradient-to-br dark:from-zinc-600 dark:to-red-600 rounded-sm opacity-10 dark:opacity-20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-gray-50 dark:bg-neutral-800/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-4 mb-16">
              <div className="w-12 h-px bg-gray-900 dark:bg-gradient-to-r dark:from-zinc-400 dark:to-red-400"></div>
              <h2 className="text-4xl font-extralight tracking-tight">Experience</h2>
            </div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="group">
                  <div className="bg-white dark:bg-neutral-800/50 dark:backdrop-blur-sm p-8 transition-all duration-500 group-hover:shadow-lg dark:group-hover:shadow-zinc-500/20 border border-gray-100 dark:border-zinc-700/30">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-light tracking-tight text-gray-900 dark:text-zinc-100">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-zinc-300 font-light mt-1">{exp.company}</p>
                      </div>
                      <div className="mt-2 lg:mt-0">
                        <span className="text-sm text-gray-500 dark:text-zinc-400 font-light tracking-wide">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-zinc-200 leading-relaxed font-light">{exp.description}</p>
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
              <div className="w-12 h-px bg-gray-900 dark:bg-gradient-to-r dark:from-zinc-400 dark:to-red-400"></div>
              <h2 className="text-4xl font-extralight tracking-tight">Projects</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-50 dark:bg-neutral-800/50 dark:backdrop-blur-sm p-8 h-full transition-all duration-500 group-hover:shadow-xl dark:group-hover:shadow-zinc-500/20 border border-gray-100 dark:border-zinc-700/30">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-light tracking-tight text-gray-900 dark:text-zinc-100">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-zinc-300 font-light">{project.subtitle}</p>
                        </div>
                        <a href={project.link}>
                          <ExternalLink className="w-5 h-5 text-gray-400 dark:text-zinc-400 group-hover:text-gray-600 dark:group-hover:text-zinc-200 transition-colors" />
                        </a>
                      </div>

                      <p className="text-gray-700 dark:text-zinc-200 leading-relaxed font-light">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs font-light tracking-wide text-gray-600 dark:text-zinc-200 bg-white dark:bg-zinc-900/30 border border-gray-200 dark:border-zinc-600/30"
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
        <section className="py-20 bg-gray-50 dark:bg-neutral-800/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-4 mb-16">
              <div className="w-12 h-px bg-gray-900 dark:bg-gradient-to-r dark:from-zinc-400 dark:to-red-400"></div>
              <h2 className="text-4xl font-extralight tracking-tight">Skills & Technologies</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-neutral-800/50 dark:backdrop-blur-sm p-4 text-center border border-gray-100 dark:border-zinc-700/30 transition-all duration-300 hover:shadow-md dark:hover:shadow-zinc-500/20 hover:border-gray-900 dark:hover:border-zinc-400"
                >
                  <span className="text-gray-900 dark:text-zinc-100 font-light tracking-wide text-sm">{skill}</span>
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
                <div className="w-12 h-px bg-gray-900 dark:bg-gradient-to-r dark:from-zinc-400 dark:to-red-400 mx-auto"></div>
                <h2 className="text-4xl font-extralight tracking-tight">Let's Connect</h2>
              </div>

              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 dark:text-zinc-200 leading-relaxed font-light">
                  Interested in working together? I'm always open to discussing new opportunities and exciting projects.
                  Let's create something amazing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <a
                  href="mailto:mailadityapardeshi@gmail.com"
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gradient-to-r dark:from-zinc-600 dark:to-red-600 text-white dark:text-white font-medium tracking-wide transition-all duration-300 hover:bg-gray-800 dark:hover:from-zinc-700 dark:hover:to-red-700 hover:tracking-wider dark:shadow-lg dark:shadow-zinc-500/25"
                >
                  <Mail className="w-5 h-5" />
                  <span>mailadityapardeshi@gmail.com</span>
                </a>

                <a
                  href="tel:+919552066154"
                  className="flex items-center space-x-2 text-gray-600 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-light tracking-wide">+91 9552066154</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100 dark:border-zinc-800/30 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-zinc-300 font-light tracking-wide">
                © 2025 Aditya Pardeshi. All rights reserved.
              </p>

              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <a
                  href="https://github.com/pardeshi-aditya"
                  className="text-gray-600 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/adityapardeshi"
                  className="text-gray-600 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Hero
