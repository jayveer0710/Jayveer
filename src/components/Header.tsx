import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="p-2 bg-black rounded-full transition-all-smooth group-hover:scale-110 animate-float">
              <Shield size={24} className="text-white" />
            </div>
            <span className="text-2xl md:text-3xl font-serif font-bold tracking-tight">
              <span className="text-black">Jayveer</span>
              <span className="text-gray-500"> Vasava</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            {['home', 'about', 'skills', 'projects', 'resume', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-lg font-medium text-gray-700 hover:text-black transition-all-smooth capitalize py-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black after:transition-all hover:after:w-full hover:scale-105"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none p-2 transition-all-smooth hover:scale-110" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 bg-white/95 backdrop-blur-sm shadow-md' : 'max-h-0'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4 py-8">
            {['home', 'about', 'skills', 'projects', 'resume', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-xl font-medium text-gray-700 hover:text-black transition-all-smooth capitalize py-3 hover:scale-105"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;