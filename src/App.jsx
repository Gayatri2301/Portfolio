import React from 'react';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-black p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or Title */}
          <div className="text-xl font-bold text-white">
            My Portfolio
          </div>
          
          {/* Navigation Links */}
          <div className="space-x-6">
            <a href="#about" className="text-gray-800 text-white hover:text-cyan-600">About Me</a>
            <a href="#projects" className="text-gray-800 text-white hover:text-cyan-600">Projects</a>
            <a href="#contact" className="text-gray-800 text-white hover:text-cyan-600">Contact</a>
          </div>
        </div>
      </nav>

      <Portfolio />
    </div>
  );
}

export default App;
