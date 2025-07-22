
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cortex-black bg-opacity-90 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gradient">
            Cortex-AI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors duration-300 ${
                isActive('/') ? 'text-cortex-blue' : 'text-cortex-white hover:text-cortex-blue'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors duration-300 ${
                isActive('/about') ? 'text-cortex-blue' : 'text-cortex-white hover:text-cortex-blue'
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors duration-300 ${
                isActive('/services') ? 'text-cortex-blue' : 'text-cortex-white hover:text-cortex-blue'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/process" 
              className={`transition-colors duration-300 ${
                isActive('/process') ? 'text-cortex-blue' : 'text-cortex-white hover:text-cortex-blue'
              }`}
            >
              Process
            </Link>
            <Link 
              to="/testimonials" 
              className={`transition-colors duration-300 ${
                isActive('/testimonials') ? 'text-cortex-blue' : 'text-cortex-white hover:text-cortex-blue'
              }`}
            >
              Testimonials
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-cortex-blue hover:bg-opacity-80 text-white font-medium py-2 px-4 rounded transition-all duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-cortex-white hover:text-cortex-blue transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-cortex-black bg-opacity-95 backdrop-blur-md rounded-lg mt-2">
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                  isActive('/') ? 'text-cortex-blue bg-cortex-navy' : 'text-cortex-white hover:text-cortex-blue hover:bg-cortex-navy'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                  isActive('/about') ? 'text-cortex-blue bg-cortex-navy' : 'text-cortex-white hover:text-cortex-blue hover:bg-cortex-navy'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                  isActive('/services') ? 'text-cortex-blue bg-cortex-navy' : 'text-cortex-white hover:text-cortex-blue hover:bg-cortex-navy'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/process" 
                className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                  isActive('/process') ? 'text-cortex-blue bg-cortex-navy' : 'text-cortex-white hover:text-cortex-blue hover:bg-cortex-navy'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Process
              </Link>
              <Link 
                to="/testimonials" 
                className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                  isActive('/testimonials') ? 'text-cortex-blue bg-cortex-navy' : 'text-cortex-white hover:text-cortex-blue hover:bg-cortex-navy'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 rounded-md bg-cortex-blue hover:bg-opacity-80 text-white font-medium transition-all duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
