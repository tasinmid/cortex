
import React from 'react';
import { Facebook, Linkedin, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    // Navigate to home page first if not already there
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-cortex-black py-12 border-t border-cortex-gray border-opacity-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <Link to="/" className="text-2xl font-bold text-gradient">Cortex-AI</Link>
            <p className="mt-4 text-cortex-gray">
              Building AI that works for you — 24/7. We help businesses scale smarter through custom chatbots, automation systems, and AI agents.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/people/Cortex-AI/61577954522052/" target="_blank" rel="noopener noreferrer" className="text-cortex-gray hover:text-cortex-blue transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/107782405" target="_blank" rel="noopener noreferrer" className="text-cortex-gray hover:text-cortex-blue transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/cortex_ai_dev/" target="_blank" rel="noopener noreferrer" className="text-cortex-gray hover:text-cortex-blue transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="mailto:Hello@cortex-ai.dev" className="text-cortex-gray hover:text-cortex-blue transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <h3 className="text-cortex-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cortex-gray hover:text-cortex-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-cortex-gray hover:text-cortex-white transition-colors duration-300">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-cortex-gray hover:text-cortex-white transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/process" className="text-cortex-gray hover:text-cortex-white transition-colors duration-300">Process</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-cortex-gray hover:text-cortex-white transition-colors duration-300">Testimonials</Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-cortex-gray hover:text-cortex-white transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <h3 className="text-cortex-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="mailto:Hello@cortex-ai.dev" className="text-cortex-gray hover:text-cortex-blue transition-colors duration-300 block">Hello@cortex-ai.dev</a>
              <p className="text-cortex-gray">+8801774087180</p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-block mt-4 bg-cortex-blue hover:bg-opacity-80 text-white font-medium py-2 px-4 rounded transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-cortex-gray border-opacity-10 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          <p className="text-cortex-gray">© {currentYear} Cortex-AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
