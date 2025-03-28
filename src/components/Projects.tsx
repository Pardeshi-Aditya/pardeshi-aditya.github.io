import React from 'react'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

const projects = [
  {
    name: "Tracker - Issue Tracker",
    description: [
      "Comprehensive issue tracking application using React.js and Frappe Framework",
      "Features include adding, categorizing, and tracking issues across development stages",
      "Developing intuitive drag-and-drop functionality"
    ],
    githubLink: "https://github.com/Pardeshi-Aditya/tracker_app",
    status: "Work in Progress"
  },
  {
    name: "NeatEye - Gesture Controlled Media Player",
    description: [
      "Innovative media player controlled through hand gestures using AI technologies",
      "Utilizes Google Mediapipe and OpenCV for gesture recognition",
      "Enables play/pause, seeking, and volume control via webcam input",
      "Ultra-low latency functionality without internet connectivity"
    ],
    githubLink: "https://github.com/Pardeshi-Aditya/NeatEye_1.1"
  }
]

const ProjectCard: React.FC<{
  name: string, 
  description: string[], 
  githubLink: string,
  status?: string
}> = ({ name, description, githubLink, status }) => (
  <motion.div 
    className="bg-dark-light p-6 rounded-xl space-y-4 hover:shadow-2xl transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex justify-between items-center">
      <h3 className="text-2xl font-secondary text-white">{name}</h3>
      {status && (
        <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
          {status}
        </span>
      )}
    </div>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      {description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
    <a 
      href={githubLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-accent hover:text-white transition"
    >
      <Github className="w-6 h-6" />
      <span>View on GitHub</span>
    </a>
  </motion.div>
)

const Projects: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="min-h-screen bg-dark text-white py-16 px-4 md:px-16"
    >
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-secondary text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Featured <span className="text-accent">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              name={project.name}
              description={project.description}
              githubLink={project.githubLink}
              status={project.status}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects