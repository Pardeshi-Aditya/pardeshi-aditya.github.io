import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
// import meImage from '@/assets/mascots/smiling_mascot.png'

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
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

  const name = "Aditya Pardeshi"
  
  return (
    <motion.section 
      className="min-h-screen bg-gradient-to-br from-dark via-dark to-dark-light flex items-center justify-center relative overflow-hidden pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-accent/20 rounded-full pointer-events-none z-10 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      <div className="text-center space-y-8 px-4 z-20">
        <motion.div
          className="flex items-center justify-center gap-2 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Sparkles className="w-5 h-5 text-accent animate-pulse" />
          <span className="text-accent text-sm font-light tracking-widest uppercase">
            Developer & Designer
          </span>
          <Sparkles className="w-5 h-5 text-accent animate-pulse" />
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-thin text-white leading-tight"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {name.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={char === ' ' ? 'inline-block w-4' : `inline-block ${index >= 6 ? 'text-accent' : ''}`}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with{' '}
            <span className="text-accent font-medium">precision</span> and{' '}
            <span className="text-accent font-medium">passion</span>
          </p>
          
          <motion.div
            className="flex items-center justify-center gap-2 text-sm text-gray-400 font-mono"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            developer.tsx
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="relative mx-auto w-48 h-48 md:w-56 md:h-56"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            delay: 1.5, 
            duration: 1.2,
            type: "spring",
            stiffness: 100
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/40 rounded-full animate-pulse" />
          <div className="absolute inset-2 bg-dark rounded-full flex items-center justify-center">
            <div className="w-32 h-32 bg-accent/10 rounded-full flex items-center justify-center">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </div>
          {/* <img 
            src={meImage} 
            alt="Aditya Pardeshi" 
            className="relative z-10 w-full h-full object-cover rounded-full border-2 border-accent/30"
          /> */}
        </motion.div>
        
        <motion.div 
          className="flex justify-center gap-6 pt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-accent text-dark font-medium rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 group-hover:text-dark transition-colors">
              View My Work
            </span>
          </motion.button>
          
          <motion.button
            className="group px-8 py-4 border border-accent/50 text-accent rounded-full hover:bg-accent/10 transition-all duration-300"
            whileHover={{ scale: 1.05, borderColor: "#rgba(255,255,255,0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="group-hover:text-white transition-colors">
              Get In Touch
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-xs font-light">Scroll to explore</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero