
import React from 'react';
import { ProjectDetail } from '../constants';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl glass-card rounded-[2.5rem] overflow-hidden animate-in zoom-in-95 fade-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        <div className="flex flex-col lg:flex-row h-full max-h-[90vh] overflow-y-auto">
          {/* Image Sidebar */}
          <div className="lg:w-1/2 h-[300px] lg:h-auto">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="lg:w-1/2 p-8 sm:p-12 overflow-y-auto bg-[#0a0f1e]">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-4xl font-display font-extrabold mb-4">{project.title}</h2>
            <div className="text-accent font-bold mb-8">{project.role}</div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-circle-info text-accent text-sm"></i>
                  Overview
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <i className="fa-solid fa-screwdriver-wrench text-accent text-sm"></i>
                    Challenges
                  </h3>
                  <ul className="space-y-2">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <i className="fa-solid fa-trophy text-accent text-sm"></i>
                    Key Outcomes
                  </h3>
                  <ul className="space-y-2">
                    {project.outcomes.map((o, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-emerald-500 mt-1">•</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-accent hover:text-white transition-all w-full justify-center sm:w-auto"
                >
                  View Live Case Study
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
