import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code2,
  Settings2,
  Zap,
  Database,
  Palette
} from 'lucide-react'

interface Skill {
  name: string
  level: number
  color: string
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
  description: string
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: <Code2 className="w-8 h-8" />,
    description: 'Core languages I use to build robust applications',
    skills: [
      { name: 'JavaScript', level: 90, color: '#F7DF1E' },
      { name: 'TypeScript', level: 85, color: '#3178C6' },
      { name: 'Python', level: 80, color: '#3776AB' },
      { name: 'C++', level: 75, color: '#00599C' }
    ]
  },
  {
    title: 'Frontend Development',
    icon: <Palette className="w-8 h-8" />,
    description: 'Creating beautiful and interactive user interfaces',
    skills: [
      { name: 'React.js', level: 90, color: '#61DAFB' },
      { name: 'Tailwind CSS', level: 85, color: '#06B6D4' },
      { name: 'Framer Motion', level: 80, color: '#0055FF' },
      { name: 'Radix UI', level: 75, color: '#6366F1' }
    ]
  },
  {
    title: 'Backend & Database',
    icon: <Database className="w-8 h-8" />,
    description: 'Server-side development and data management',
    skills: [
      { name: 'Node.js', level: 80, color: '#339933' },
      { name: 'MySQL', level: 75, color: '#4479A1' },
      { name: 'Frappe Framework', level: 70, color: '#FF6B6B' },
      { name: 'REST APIs', level: 85, color: '#FF7F50' }
    ]
  },
  {
    title: 'Tools & Workflow',
    icon: <Settings2 className="w-8 h-8" />,
    description: 'Development tools and version control',
    skills: [
      { name: 'Git', level: 85, color: '#F05032' },
      { name: 'VS Code', level: 90, color: '#007ACC' },
      { name: 'Docker', level: 70, color: '#2496ED' },
      { name: 'Figma', level: 80, color: '#F24E1E' }
    ]
  }
]

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
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
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Technical Expertise</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-thin mb-6">
            My <span className="text-accent font-light">Skills</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            A comprehensive toolkit built through continuous learning and hands-on experience
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                activeCategory === index 
                  ? 'bg-accent/20 border-2 border-accent shadow-lg shadow-accent/20' 
                  : 'bg-white/5 border-2 border-transparent hover:bg-white/10 hover:border-white/20'
              }`}
              onClick={() => setActiveCategory(index)}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`mb-4 ${activeCategory === index ? 'text-accent' : 'text-gray-400'}`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{category.title}</h3>
              <p className="text-sm text-gray-400 font-light">{category.description}</p>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10"
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="text-accent">
              {skillCategories[activeCategory].icon}
            </div>
            <div>
              <h2 className="text-2xl font-light">{skillCategories[activeCategory].title}</h2>
              <p className="text-gray-400 font-light">{skillCategories[activeCategory].description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                
                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ 
                      delay: index * 0.1 + 0.3,
                      duration: 1,
                      ease: "easeOut"
                    }}
                  />
                  
                  <motion.div
                    className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      delay: index * 0.1 + 0.5,
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Passionate about staying current with emerging technologies and constantly expanding my skill set to deliver cutting-edge solutions.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills