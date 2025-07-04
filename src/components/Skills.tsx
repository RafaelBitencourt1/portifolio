import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import skillsData from '../data/skills';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Minhas habilidades</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">

            Aqui estão as tecnologias e ferramentas com as quais trabalho. Estou sempre aprendendo e expandindo minhas habilidades.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {/* Skill categories */}
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const delay = skillIndex * 0.1;

                  return (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-indigo-500 to-accent-500 dark:from-indigo-400 dark:to-accent-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: delay,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;