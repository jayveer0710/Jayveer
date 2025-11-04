import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo?: string;
  github?: string;
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "NetManager",
      description: "A browser-based network scanner tool that provides detailed information about devices on your network.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Python", "JavaScript", "HTML/CSS", "Flask"],
      demo: "https://netmanager.netlify.app/",
      github: "https://github.com/Akshay7311/NetManager"
    },
    {
      title: "Online Book Store",
      description: "A complete online bookstore with secure authentication and role-based access control.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      github: "https://github.com/Akshay7311/onlineshopping"
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-black after:mx-auto after:mt-4 animate-on-scroll">
          Recent Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all-smooth hover-lift animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all-smooth"
                  style={{ 
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-all-smooth">
                  <div className="flex space-x-4">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-gray-100 transition-all-smooth hover:scale-110 animate-scaleIn">
                        <ExternalLink size={20} className="text-black" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-gray-100 transition-all-smooth hover:scale-110 animate-scaleIn">
                        <Github size={20} className="text-black" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded transition-all-smooth hover:bg-gray-200 hover:scale-105"
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;