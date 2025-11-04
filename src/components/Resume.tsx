import React from 'react';
import { Download, Github } from 'lucide-react';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/Documents/resume.pdf'; // The PDF file in the public directory
    link.download = 'Akshay_Jadav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 animate-on-scroll">My Resume</h2>
        
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12 animate-on-scroll animate-delay-200">
          Want to know more about my experience, education, and skills? 
          Check out my full resume by downloading it below.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-on-scroll animate-delay-400">
          <button 
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all-smooth hover:scale-105 hover:shadow-lg"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </button>
          
          <a 
            href="https://github.com/Akshay7311" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-black rounded-md hover:bg-gray-100 transition-all-smooth hover:scale-105 hover:shadow-lg"
          >
            <Github size={18} />
            <span>View GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;