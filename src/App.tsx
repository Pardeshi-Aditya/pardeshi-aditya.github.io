import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

const App: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Hero />
    </div>
  );
};

export default App;
