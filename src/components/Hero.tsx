import React, { useState, useEffect } from 'react';
import { Terminal, Shield, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Securing Digital Assets with Precision and Purpose";
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 p-4 bg-black text-white rounded-full animate-scaleIn animate-float">
            <Shield size={40} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fadeInUp animate-delay-200">
            Jayveer Vasava
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-600 mb-8 flex items-center gap-3 animate-fadeInUp animate-delay-300">
            <span>Cybersecurity Enthusiast</span>
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span>Ethical Hacker</span>
          </div>
          
          <div className="h-16 mb-12 animate-fadeInUp animate-delay-400">
            <p className="text-xl md:text-2xl text-gray-800 font-serif italic relative after:content-[''] after:inline-block after:w-1 after:h-6 after:bg-black after:animate-blink after:ml-1">
              {typedText}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fadeInUp animate-delay-500">
            <a 
              href="#projects"
              className="px-8 py-4 bg-black text-white rounded-md hover:bg-gray-800 transition-all-smooth hover:scale-105 hover:shadow-lg text-lg font-medium flex items-center justify-center gap-2"
            >
              View Projects
              <ExternalLink size={18} />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border-2 border-black text-black rounded-md hover:bg-gray-100 transition-all-smooth hover:scale-105 hover:shadow-lg text-lg font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;