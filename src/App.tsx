import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export type PageType = 'home' | 'skills' | 'about' | 'projects' | 'contact'

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero key="hero" />
      case 'skills':
        return <Skills key="skills" />
      case 'about':
        return <About key="about" />
      case 'projects':
        return <Projects key="projects" />
      case 'contact':
        return <Contact key="contact" />
      default:
        return <Hero key="hero" />
    }
  }

  return (
    <div className="bg-dark min-h-screen font-inter">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App