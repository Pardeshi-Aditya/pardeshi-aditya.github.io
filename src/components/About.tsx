import React from 'react'
import { motion } from 'framer-motion'
import me2Image from '@/assets/me2.png'
import { 
  Target, 
  Lightbulb, 
  Coffee, 
  Compass 
} from 'lucide-react'

const About: React.FC = () => {
  const traits = [
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      text: "Quick learner with a passion for continuous skill development"
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      text: "Problem solver who provides efficient and innovative solutions"
    },
    {
      icon: <Compass className="w-8 h-8 text-accent" />,
      text: "Adaptable professional who thrives in dynamic work environments"
    },
    {
      icon: <Coffee className="w-8 h-8 text-accent" />,
      text: "Proactive decision-maker who maintains an organized workspace"
    }
  ]

  return (
    <section 
      id="about" 
      className="min-h-screen bg-dark text-white py-16 px-4 md:px-16 flex items-center"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-secondary mb-8">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Developer based out of <strong>पुणे (Pune)</strong>, I'm a passionate technologist who believes in the power of continuous learning and innovative problem-solving.
          </p>
          
          <div className="space-y-4">
            {traits.map((trait, index) => (
              <motion.div 
                key={index} 
                className="flex items-center space-x-4 bg-dark-light p-4 rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {trait.icon}
                <span className="text-gray-300">{trait.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img 
            src={me2Image} 
            alt="Aditya smiling" 
            className="w-full max-w-md rounded-2xl shadow-2xl border-4 border-accent"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default About