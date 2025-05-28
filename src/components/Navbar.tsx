
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cortex-black bg-opacity-80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold text-gradient animate-fade-in-down"
          >
            Cortex-AI
          </a>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="animate-fade-in-down">
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-cortex-gray hover:text-cortex-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cortex-blue hover:after:w-full after:transition-all after:duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          
          {/* CTA Button */}
          {!isMobile && (
            <a 
              href="#contact" 
              className="bg-cortex-blue px-6 py-2 rounded text-white font-medium hover:bg-opacity-80 transition-all duration-300 animate-pulse-glow animate-fade-in-down"
            >
              Get Started
            </a>
          )}
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              onClick={handleMenuToggle}
              className="text-cortex-white p-2 focus:outline-none animate-fade-in-down"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
        
        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <nav className="mt-4 pb-4 animate-fade-in-up">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-cortex-gray hover:text-cortex-white transition-colors block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#contact" 
                  className="bg-cortex-blue px-6 py-2 rounded text-white font-medium hover:bg-opacity-80 transition-all duration-300 inline-block animate-pulse-glow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
