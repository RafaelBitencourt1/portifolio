import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = ['Desenvolvedor Full Stack', 'Desenvolvedor Full Stack'];

  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const typeAndErase = async () => {

      const phrase = phrases[currentPhraseIndex];
      for (let i = 0; i <= phrase.length; i++) {
        if (!isMounted) return;
        setDisplayedText(phrase.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 150));
      }

      await new Promise(resolve => {
        timeoutId = setTimeout(resolve, 2000);
      });

      for (let i = phrase.length; i >= 0; i--) {
        if (!isMounted) return;
        setDisplayedText(phrase.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }

      if (isMounted) {
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
      }
    };

    typeAndErase();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [currentPhraseIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="section-container">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-indigo-600 dark:text-indigo-400 text-lg md:text-xl mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Olá, Meu nome é
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Rafael Bitencourt
          </motion.h1>
          <motion.div
            className="h-12 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-light">
              E sou  <span className="text-accent-600 dark:text-accent-400 font-medium">{displayedText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>
          <motion.p
            className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Criando experiências web criativas com foco em design limpo e funcionalidade impecável. Vamos transformar suas ideias em realidade através do código.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a href="#projects" className="btn-primary">
              Veja meus Projetos
            </a>
            <a href="#about" className="btn-secondary">
              Sobre mim
            </a>
          </motion.div>
        </motion.div>
      </div>


      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 0.8,
          y: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }
        }}
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} className="text-indigo-600 dark:text-indigo-400" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;