
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import ProjectCard from './components/ProjectCard';
import AiChat from './components/AiChat';
import ProjectModal from './components/ProjectModal';
import { PROJECTS, EXPERIENCES, ProjectDetail } from './constants';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Enhanced scroll spy to update active section in navbar with threshold
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['contact', 'projects', 'about']; // Check in reverse order for better accuracy
      const scrollPos = window.scrollY + 150; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop) {
          setActiveSection(section);
          return;
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 font-sans selection:bg-accent selection:text-white overflow-x-hidden">
      <Navbar activeSection={activeSection} />
      
      <main className="container mx-auto px-4 relative">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] -z-10"></div>

        <section id="hero" className="scroll-mt-28">
          <Hero />
        </section>
        
        <BentoGrid />

        {/* Selected Projects */}
        <section className="py-24 scroll-mt-28" id="projects">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="reveal-item">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Crafted <span className="text-accent">Solutions.</span></h2>
              <p className="text-gray-400 max-w-md">Highlighting my work in Kotlin Multiplatform and fluid Compose UIs.</p>
            </div>
            <div className="flex gap-2 reveal-item" style={{ animationDelay: '200ms' }}>
               <button 
                onClick={() => alert("Horizontal scroll functionality coming soon in v2!")}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
                aria-label="Previous Project"
               >
                 <i className="fa-solid fa-chevron-left"></i>
               </button>
               <button 
                onClick={() => alert("Horizontal scroll functionality coming soon in v2!")}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
                aria-label="Next Project"
               >
                 <i className="fa-solid fa-chevron-right"></i>
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={project.id} className="reveal-item" style={{ animationDelay: `${idx * 150}ms` }}>
                <ProjectCard 
                  project={project} 
                  onClick={(p) => setSelectedProject(p)}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center reveal-item">Professional Journey.</h2>
          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <div 
                key={idx} 
                className="glass-card rounded-[2rem] p-8 flex flex-col md:flex-row gap-6 hover:border-accent/20 transition-all border border-transparent reveal-item"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="md:w-1/4">
                  <div className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{exp.period}</div>
                  <div className="font-display font-bold text-lg">{exp.company}</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-3">{exp.role}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 scroll-mt-28" id="contact">
          <div className="glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group reveal-item">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to ship your <br/> next big <span className="text-accent">Idea?</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:aksohag@example.com" 
                className="px-10 py-5 bg-white text-black font-bold rounded-[2rem] hover:scale-105 hover:bg-accent hover:text-white transition-all min-w-[180px]"
              >
                Let's Talk
              </a>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/aksohag" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all"
                >
                  <i className="fa-brands fa-github text-xl"></i>
                </a>
                <a 
                  href="https://linkedin.com/in/aksohag" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all"
                >
                  <i className="fa-brands fa-linkedin text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold text-white">S</div>
          <span className="font-display font-bold">Sohag.</span>
        </div>
        <p className="text-gray-500 text-sm">© 2024 AK Sohag. Built with KMP & AI.</p>
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Dribbble</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
        </div>
      </footer>

      <AiChat />
      
      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default App;
