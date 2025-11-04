import React from 'react';
import { Github, Linkedin, Mail, Shield } from 'lucide-react'; // Added UserCog

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/jayveer0710', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/jayveer0710/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:jayveer00433@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white rounded-full">
                <Shield size={24} className="text-gray-900" />
              </div>
              <span className="font-playfair text-2xl font-bold">Jayveer Vasava</span>
            </div>
            <p className="text-gray-400">
              Cybersecurity Enthusiast & Ethical Hacker passionate about securing digital assets.
            </p>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Projects', 'Skills', 'Resume', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;