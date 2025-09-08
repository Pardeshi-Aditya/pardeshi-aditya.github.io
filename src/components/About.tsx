import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Target, 
  Lightbulb, 
  Coffee, 
  Compass,
  MapPin,
  Sparkles,
  Code2,
  Heart
} from 'lucide-react'

const About: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const traits = [
    {
      icon: <Lightbulb className="w-6 h-6 text-accent" />,
      title: "Continuous Learner",
      description: "Quick learner with a passion for continuous skill development and staying updated with latest technologies"
    },
    {
      icon: <Target className="w-6 h-6 text-accent" />,
      title: "Problem Solver",
      description: "Strategic thinker who provides efficient and innovative solutions to complex challenges"
    },
    {
      icon: <Compass className="w-6 h-6 text-accent" />,
      title: "Adaptable Professional",
      description: "Thrives in dynamic work environments and embraces change as an opportunity for growth"
    },
    {
      icon: <Coffee className="w-6 h-6 text-accent" />,
      title: "Proactive Mindset",
      description: "Takes initiative in decision-making while maintaining an organized and efficient workspace"
    }
  ]

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "15+", label: "Projects Completed" },
    { number: "5+", label: "Technologies Mastered" },
    { number: "100%", label: "Passion Driven" }
  ]

  return (
    <motion.section 
      className="min-h-screen bg-gradient-to-br from-dark via-dark to-yellow-300 text-white py-20 px-4 md:px-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-4 h-4 bg-accent/30 rounded-full pointer-events-none z-10 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-20">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">About Me</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-thin mb-6">
            My <span className="text-accent font-light">Story</span>
          </h1>
          
          <motion.div
            className="flex items-center justify-center gap-2 text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <MapPin className="w-4 h-4" />
            <span className="font-light">Based in <strong className="text-accent">पुणे (Pune)</strong>, India</span>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Story */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.p 
                className="text-xl text-gray-300 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                I'm a passionate <span className="text-accent font-medium">full-stack developer</span> who believes in the power of continuous learning and innovative problem-solving. My journey in technology is driven by curiosity and a desire to create meaningful digital experiences.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-400 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I thrive in collaborative environments where innovation meets execution.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-light text-accent mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400 font-light">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/40 rounded-3xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <div className="relative bg-dark-light rounded-3xl p-8 border border-white/20 backdrop-blur-sm">
                <div className="w-64 h-64 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                {/* Replace with actual image when available */}
                {/* <img 
                  src={me2Image} 
                  alt="Aditya Pardeshi" 
                  className="w-64 h-64 object-cover rounded-2xl"
                /> */}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Traits Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">What Drives Me</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-thin">
              Core <span className="text-accent font-light">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {traits.map((trait, index) => (
              <motion.div
                key={index}
                className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    {trait.icon}
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-white group-hover:text-accent transition-colors duration-300">
                      {trait.title}
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed">
                      {trait.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/20 to-accent/10 px-8 py-4 rounded-full border border-accent/30"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">Let's build something amazing together</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About