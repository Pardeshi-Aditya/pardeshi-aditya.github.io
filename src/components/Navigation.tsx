import React from "react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
}) => {
  return (
    // Navigation
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-light tracking-wide hover:opacity-80 transition-opacity text-black"
          >
            Aditya Pardeshi
          </a>

          {/* <div className="hidden md:flex items-center space-x-8">
            {["about", "experience", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`text-sm font-light tracking-wide transition-all duration-300 hover:tracking-wider ${
                  activeSection === section
                    ? "text-gray-900 border-b border-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
