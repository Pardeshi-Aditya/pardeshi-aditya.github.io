import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Footer />
      </main>
    </div>
  )
}

export default App