import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Server, 
  Layers, 
  Cpu, 
  Database, 
  Settings 
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code className="w-12 h-12 text-accent" />,
    skills: ['JavaScript', 'Python', 'C++', 'TypeScript']
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Layers className="w-12 h-12 text-accent" />,
    skills: ['React.js', 'Frappe Framework', 'Tailwind CSS', 'Radix-UI']
  },
  {
    title: 'Tools & Technologies',
    icon: <Settings className="w-12 h-12 text-accent" />,
    skills: ['Visual Studio', 'MySQL Server', 'Git', 'Microsoft Excel']
  }
]

const SkillCard: React.FC<{
  title: string, 
  icon: React.ReactNode, 
  skills: string[]
}> = ({ title, icon, skills }) => (
  <motion.div 
    className="bg-dark-light p-6 rounded-xl space-y-4 hover:shadow-2xl transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center space-x-4">
      {icon}
      <h3 className="text-xl font-secondary text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span 
          key={index} 
          className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
)

const Skills: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="min-h-screen bg-dark text-white py-16 px-4 md:px-16"
    >
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-secondary text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My <span className="text-accent">Technical Toolkit</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>

        <motion.p 
          className="text-center mt-12 text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          As a dynamic software engineer, I thrive on learning and innovating. My versatile skill set allows me to craft robust solutions to complex problems, adapting quickly to new technologies and challenges.
        </motion.p>
      </div>
    </section>
  )
}

export default Skills