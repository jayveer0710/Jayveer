import React from 'react';
import { 
  Code, Globe, Wrench, Brain, 
  FileCode, Database, Shield, 
  GitBranch, Server, Languages
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Shield size={24} />,
      title: "Cybersecurity",
      skills: ["Linux", "Nmap", "Burp Suite", "Wireshark", "Metasploit", "OWASP Top 10", "Social Engineering"]
    },
    {
      icon: <Code size={24} />,
      title: "Development",
      skills: ["HTML & CSS", "JavaScript", "C & C++", "Python", "PHP", "R", "Advanced Java"]
    },
    {
      icon: <Database size={24} />,
      title: "Database",
      skills: ["SQL", "PL/SQL", "DBA"]
    },
    {
      icon: <Wrench size={24} />,
      title: "Tools",
      skills: ["Git & GitHub", "Figma & Canva", "Power BI"]
    },
    {
      icon: <Languages size={24} />,
      title: "Languages",
      skills: ["Gujarati", "Hindi", "English"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-black after:mx-auto after:mt-4 animate-on-scroll">
          My Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all-smooth hover-lift animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-100 rounded-lg mr-4 animate-float">
                  {category.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold">{category.title}</h3>
              </div>
              
              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className="flex items-center animate-fadeInLeft"
                    style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="w-2 h-2 bg-black rounded-full mr-3 animate-pulse"></div>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;