import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-800">
      <div className="section-container">
        <motion.h2
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sobre mim
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {/* Profile image */}
          <motion.div
            className="relative"
            variants={variants}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="goku.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-6 -right-6 h-24 w-24 bg-indigo-500 dark:bg-indigo-600 rounded-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -top-6 -left-6 h-16 w-16 bg-accent-500 dark:bg-accent-600 rounded-lg"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Bio & info */}
          <div>
            <motion.h3
              className="text-3xl font-bold mb-4 text-slate-900 dark:text-white"
              variants={variants}
              transition={{ duration: 0.6 }}
            >
              Quem eu sou
            </motion.h3>

            <motion.p
  className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed text-justify"
              variants={variants}
              transition={{ duration: 0.6 }}
            >
              Sou desenvolvedor web e mobile, com foco em React, TypeScript, Node.js e Kotlin. Tem experiência em criar aplicações modernas e funcionais, com domínio em Firebase, PostgreSQL e integração com APIs. É criador de projetos como DespaFront, DespaCursos e Despa Agenda, sempre buscando unir design limpo com soluções eficientes.


            </motion.p>



            <motion.div
              className="space-y-2 mb-8"
              variants={variants}
              transition={{ duration: 0.6 }}
            >
              <p className="flex">
                <span className="w-24 font-medium text-slate-900 dark:text-white">Nome:</span>
                <span className="text-slate-700 dark:text-slate-300">Rafael Bitencourt</span>
              </p>
              <p className="flex">
                <span className="w-24 font-medium text-slate-900 dark:text-white">Email:</span>
                <span className="text-slate-700 dark:text-slate-300">rafafalchioni01@gmail.com</span>
              </p>

            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex gap-4"
              variants={variants}
              transition={{ duration: 0.6 }}
            >
              <a
                href="https://github.com/RafaelBitencourt1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rafael-bitencourtgf/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/rfl_bitencourt/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                aria-label="Twitter"
              >
                <Instagram size={20} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;