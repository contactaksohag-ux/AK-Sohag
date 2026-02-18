
import React from 'react';
import { ProjectDetail } from '../constants';

interface ProjectCardProps {
  project: ProjectDetail;
  onClick: (project: ProjectDetail) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project)}
      className="group glass-card rounded-[2.5rem] overflow-hidden bento-hover border border-white/5 cursor-pointer"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8 text-center">
           <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="text-white font-bold text-xl mb-2">View Case Study</div>
              <p className="text-gray-300 text-sm">{project.role}</p>
           </div>
        </div>
        <div className="absolute top-6 right-6">
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-white/5 text-gray-400">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <span className="text-xs font-medium text-gray-500">Interactive Case Study</span>
          <i className="fa-solid fa-arrow-right text-gray-600 group-hover:translate-x-1 group-hover:text-accent transition-all"></i>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
