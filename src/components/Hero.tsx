import React from 'react'
import { motion } from 'framer-motion'
import meImage from '@/assets/me.png'

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-dark text-white flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-secondary font-bold">
          Hi, I'm <span className="text-accent">Aditya Pardeshi</span>
        </h1>
        <p className="text-xl md:text-2xl font-code text-gray-300">
          developer.tsx
        </p>
        
        <motion.img 
          src={meImage} 
          alt="Aditya smiling" 
          className="mx-auto w-64 h-64 object-cover rounded-full border-4 border-accent"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        
        <div className="flex justify-center space-x-4 mt-6">
          <motion.a 
            href="#about" 
            className="px-6 py-3 bg-accent text-dark rounded-full hover:bg-accent-dark transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            About Me
          </motion.a>
          <motion.a 
            href="#projects" 
            className="px-6 py-3 border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-dark transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View Projects
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero