import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Code, Zap, Calendar, Tag } from 'lucide-react'

interface Project {
  id: number
  name: string
  description: string
  longDescription: string
  technologies: string[]
  githubLink: string
  liveLink?: string
  status: 'completed' | 'in-progress' | 'planned'
  category: 'web' | 'mobile' | 'ai' | 'tool'
  year: string
  highlights: string[]
}

const projects: Project[] = [
  {
    id: 1,
    name: "Tracker - Issue Management System",
    description: "Comprehensive issue tracking application with intuitive drag-and-drop functionality",
    longDescription: "A full-stack issue tracking application built with React.js and Frappe Framework. Features include real-time updates, customizable workflows, team collaboration tools, and advanced filtering capabilities. The application provides a seamless experience for managing development workflows.",
    technologies: ["React.js", "Frappe Framework", "MySQL", "JavaScript", "CSS3"],
    githubLink: "https://github.com/Pardeshi-Aditya/tracker_app",
    status: "in-progress",
    category: "web",
    year: "2024",
    highlights: [
      "Real-time collaboration features",
      "Drag-and-drop kanban board",
      "Advanced filtering and search",
      "Custom workflow automation"
    ]
  },
  {
    id: 2,
    name: "NeatEye - AI Gesture Controller",
    description: "Revolutionary media player controlled through hand gestures using computer vision",
    longDescription: "An innovative media player that leverages Google Mediapipe and OpenCV for gesture recognition. Users can control playback, volume, and seeking functions through natural hand movements captured via webcam, creating an intuitive hands-free media experience.",
    technologies: ["Python", "OpenCV", "MediaPipe", "Tkinter", "NumPy"],
    githubLink: "https://github.com/Pardeshi-Aditya/NeatEye_1.1",
    liveLink: "https://demo-neateye.example.com",
    status: "completed",
    category: "ai",
    year: "2024",
    highlights: [
      "Ultra-low latency gesture recognition",
      "Works completely offline",
      "Natural hand gesture controls",
      "Cross-platform compatibility"
    ]
  },
  {
    id: 3,
    name: "Portfolio Website",
    description: "Modern, responsive portfolio showcasing my work and skills",
    longDescription: "A sleek, animated portfolio website built with React and TypeScript. Features smooth page transitions, interactive elements, and a modern design aesthetic. Optimized for performance and accessibility across all devices.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/Pardeshi-Aditya/portfolio",
    liveLink: "https://adityapardeshi.dev",
    status: "completed",
    category: "web",
    year: "2024",
    highlights: [
      "Smooth animations and transitions",
      "Responsive design",
      "Modern UI/UX patterns",
      "Performance optimized"
    ]
  }
]

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  type FilterCategory = 'all' | 'web' | 'mobile' | 'ai' | 'tool';
  const [filter, setFilter] = useState<FilterCategory>('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const statusColors = {
    'completed': 'bg-green-500/20 text-green-400 border-green-500/30',
    'in-progress': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'planned': 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  }

  const categoryColors = {
    'web': 'bg-purple-500/20 text-purple-400',
    'mobile': 'bg-blue-500/20 text-blue-400',
    'ai': 'bg-pink-500/20 text-pink-400',
    'tool': 'bg-green-500/20 text-green-400'
  }

  return (
    <motion.section 
      className="min-h-screen bg-gradient-to-br from-dark to-dark-light text-white py-20 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Featured Work</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-thin mb-6">
            My <span className="text-accent font-light">Projects</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            A collection of projects that showcase my passion for creating innovative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex gap-2 bg-white/5 p-2 rounded-2xl backdrop-blur-sm border border-white/10">
            {['all', 'web', 'ai', 'tool'].map((category) => (
              <motion.button
                onClick={() => setFilter(category as FilterCategory)}
                className={`px-6 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                  filter === category
                    ? 'bg-accent text-dark shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-500 h-full">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-lg text-xs font-medium ${categoryColors[project.category]}`}>
                            {project.category.toUpperCase()}
                          </span>
                          <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${statusColors[project.status]}`}>
                            {project.status.replace('-', ' ').toUpperCase()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </div>
                      </div>
                      <motion.div
                        className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-medium group-hover:text-accent transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-gray-400 font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-white/10 text-gray-400 text-xs rounded-full font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                      </motion.a>
                      {project.liveLink && (
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm font-medium">Live</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-dark-light rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-8">
                  <div className="flex items-start justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-lg text-sm font-medium ${categoryColors[selectedProject.category]}`}>
                          {selectedProject.category.toUpperCase()}
                        </span>
                        <span className={`px-3 py-1 rounded-lg text-sm font-medium border ${statusColors[selectedProject.status]}`}>
                          {selectedProject.status.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                      <h2 className="text-3xl font-light">{selectedProject.name}</h2>
                    </div>
                    <motion.button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>

                  <p className="text-gray-300 font-light leading-relaxed text-lg">
                    {selectedProject.longDescription}
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium flex items-center gap-2">
                      <Zap className="w-5 h-5 text-accent" />
                      Key Highlights
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {selectedProject.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium flex items-center gap-2">
                      <Tag className="w-5 h-5 text-accent" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <motion.a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-accent text-dark px-6 py-3 rounded-xl font-medium hover:bg-accent/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </motion.a>
                    {selectedProject.liveLink && (
                      <motion.a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 border border-accent text-accent px-6 py-3 rounded-xl font-medium hover:bg-accent/10 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

export default Projects