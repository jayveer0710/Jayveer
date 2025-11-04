import React from 'react';
import { GraduationCap, Linkedin, Github, Shield, Trophy, Target, Code, Award, CreditCard as Edit3 } from 'lucide-react';

const About: React.FC = () => {
  const profiles = [
    {
      icon: <Linkedin className="text-[#0077B5]" size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/akshay7311/"
    },
    {
      icon: <Github className="text-[#333]" size={24} />,
      name: "GitHub",
      url: "https://github.com/jayveer0710"
    },
    // {
    //   icon: <Code className="text-[#2EC866]" size={24} />,
    //   name: "HackerRank",
    //   url: "https://www.hackerrank.com/profile/akshay7311a"
    // },
    // {
    //   icon: <Trophy className="text-[#FF6B6B]" size={24} />,
    //   name: "PicoCTF",
    //   url: "https://play.picoctf.org/SHu_Kurenai"
    // },
    {
      icon: <Shield className="text-[#9FEF00]" size={24} />,
      name: "HackTheBox",
      url: "https://app.hackthebox.com/profile/jayveerrrrr"
    },
    {
      icon: <Target className="text-[#C11F1F]" size={24} />,
      name: "TryHackMe",
      url: "https://tryhackme.com/p/jayveervasava0710"
    },
    // {
    //   icon: <Edit3 className="text-[#000]" size={24} />,
    //   name: "Medium",
    //   url: "https://medium.com/@akshay7311a"
    // },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>,
      name: "Twitter",
      url: "https://x.com/Akshay7311_"
    }
  ];

  const certifications = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "2025",
      url: "https://www.credly.com/badges/791deaee-fde3-4549-8fc0-9f789b44ed11/linked_in_profile",
      downloadUrl: "/Documents/Introduction to Cybersecurity.pdf"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-black after:mx-auto after:mt-4 animate-on-scroll">
          About Me
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 animate-on-scroll">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
               M.Tech Cyber Security student at Parul University specializing in ethical hacking, vulnerability assessment, and digital forensics.
Focused on practical penetration testing, application security,           </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {profiles.map((profile, index) => (
                  <a 
                    key={index}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:shadow-md transition-all-smooth group hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-2 bg-white rounded-lg shadow-sm mr-3 group-hover:scale-110 transition-all-smooth">
                      {profile.icon}
                    </div>
                    <span className="text-gray-700 group-hover:text-black transition-all-smooth text-sm">
                      {profile.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center animate-on-scroll">
              <div className="w-80 h-80 overflow-hidden rounded-2xl border-4 border-white shadow-lg hover-lift animate-glow">
                <img 
                  src="/profile.jpg"
                  alt="Jayveer Vasava"
                  className="w-full h-full object-cover transition-all-smooth hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          {/* Education Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8 animate-on-scroll hover-lift">
            <div className="flex items-center mb-8">
              <div className="p-2 bg-gray-100 rounded-lg mr-3 animate-float">
                <GraduationCap className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold">Education</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm hover-lift transition-all-smooth">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-lg">Master of Technology (Cyber Security)</h4>
                  <span className="text-gray-500">2025-2027</span>
                </div>
                <p className="text-gray-500">Parul University</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover-lift transition-all-smooth">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-lg">Bachelor of Technology (Computer Science and Engineering)</h4>
                  <span className="text-gray-500">2021 - 2025</span>
                </div>
                <p className="text-gray-500">Parul University</p>
              </div>
            </div>
          </div>
          
          {/* Certifications Section */}
          <div className="bg-gray-50 rounded-lg p-8 animate-on-scroll hover-lift">
            <div className="flex items-center mb-8">
              <div className="p-2 bg-gray-100 rounded-lg mr-3 animate-float">
                <Award className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold">Certifications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all-smooth hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-lg">{cert.title}</h4>
                    <span className="text-gray-500">{cert.date}</span>
                  </div>
                  <p className="text-gray-500 mb-2">{cert.issuer}</p>
                  {cert.url && (
                    <a 
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-flex items-center gap-1 transition-all-smooth hover:scale-105"
                    >
                      View Certificate
                      <Award size={14} />
                    </a>
                  )}
                  {cert.downloadUrl && (
                    <a 
                      href={cert.downloadUrl}
                      download
                      className="text-green-600 hover:text-green-800 text-sm mt-2 ml-4 inline-flex items-center gap-1 transition-all-smooth hover:scale-105"
                    >
                      Download PDF
                      <Award size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;