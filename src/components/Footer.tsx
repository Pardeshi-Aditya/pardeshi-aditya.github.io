import React from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  ExternalLink,
  Heart,
  ArrowUp,
  Mail,
  MapPin
} from 'lucide-react'

const socialLinks = [
  { 
    icon: <Github className="w-5 h-5" />, 
    href: 'https://github.com/Pardeshi-Aditya',
    name: 'GitHub',
    color: 'hover:text-gray-300'
  },
  { 
    icon: <Linkedin className="w-5 h-5" />, 
    href: 'https://www.linkedin.com/in/adityapardeshi/',
    name: 'LinkedIn',
    color: 'hover:text-blue-400'
  },
  { 
    icon: <Twitter className="w-5 h-5" />, 
    href: 'https://twitter.com/adityahere_24',
    name: 'Twitter',
    color: 'hover:text-blue-300'
  },
  { 
    icon: <Instagram className="w-5 h-5" />, 
    href: 'https://www.instagram.com/names__aditya/',
    name: 'Instagram',
    color: 'hover:text-pink-400'
  },
  { 
    icon: <ExternalLink className="w-5 h-5" />, 
    href: 'https://linktr.ee/namesaditya',
    name: 'Linktree',
    color: 'hover:text-green-400'
  }
]

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
]

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-t from-dark-light to-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <motion.h3 
                  className="text-2xl font-thin"
                  whileHover={{ scale: 1.02 }}
                >
                  Aditya <span className="text-accent font-light">Pardeshi</span>
                </motion.h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Crafting digital experiences with precision and passion. 
                  Always learning, always building, always growing.
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm font-light">Pune, Maharashtra, India</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-medium text-accent">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-accent transition-colors duration-300 font-light"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-medium text-accent">Let's Connect</h4>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:adityapardeshi2004@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors duration-300 font-light"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">adityapardeshi2004@gmail.com</span>
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <p className="text-sm text-gray-400 font-light">Follow me on</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 ${social.color} border border-white/10 hover:border-accent/30 transition-all duration-300 backdrop-blur-sm`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                className="text-gray-400 text-sm font-light flex items-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                © 2025 Aditya Pardeshi. Made with 
                <Heart className="w-4 h-4 text-red-400" /> 
                in India
              </motion.p>

              <div className="flex items-center gap-6">
                <motion.p
                  className="text-gray-400 text-sm font-light"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  All rights reserved.
                </motion.p>
                
                <motion.button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent hover:bg-accent/20 transition-all duration-300 border border-accent/20 hover:border-accent/40"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 border border-accent/20 rounded-full"
          />
        </div>
        
        <div className="absolute bottom-20 left-10 opacity-10">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-6 h-6 bg-accent/20 rounded-full"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer