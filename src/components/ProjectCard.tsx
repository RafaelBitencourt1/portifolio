import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      className="group h-full"
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="card h-full flex flex-col">
        {/* Project image */}
        <div className="relative overflow-hidden h-56">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay with links */}
          <div className={`absolute inset-0 bg-indigo-900/70 flex items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors"
                aria-label="Live Site"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        
        {/* Project content */}
        <div className="flex-1 p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4 flex-grow">{project.description}</p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, i) => (
              <span 
                key={i} 
                className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};