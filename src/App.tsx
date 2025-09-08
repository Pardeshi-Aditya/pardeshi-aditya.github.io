import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

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
    <div className="bg-dark min-h-screen">
      <Hero />
    </div>
  );
};

export default App;
