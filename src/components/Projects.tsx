import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import projectsData from '../data/projects';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Meus Projetos</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
Aqui estão alguns dos meus projetos recentes, cada um destacando diferentes habilidades e tecnologias utilizadas no desenvolvimento.          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { 
              transition: { staggerChildren: 0.1 } 
            },
            hidden: {}
          }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;