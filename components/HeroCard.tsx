"use client";

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useLanguage } from './Providers';

export const HeroCard: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleLanguage = () => setLanguage(language === 'en' ? 'es' : 'en');

  const content = {
    en: {
      openToWork: "Open to Work",
      locationLabel: "location/",
      aboutLabel: "about/",
      cta: "View All Projects",
    },
    es: {
      openToWork: "Disponible",
      locationLabel: "ubicación/",
      aboutLabel: "sobre mí/",
      cta: "Ver Proyectos",
    }
  };

  const t = content[language];

  return (
    <div className="h-full bg-white dark:bg-slate-950 rounded-[2rem] p-8 lg:p-14 flex flex-col justify-between relative overflow-hidden border border-slate-100 dark:border-slate-800 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02),0_2px_4px_-1px_rgba(0,0,0,0.02)] transition-all duration-500 group">

      {/* Decorative Blob with Animation */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/80 dark:bg-indigo-900/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none animate-blob mix-blend-multiply dark:mix-blend-normal filter opacity-70"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-purple-50/80 dark:bg-purple-900/20 rounded-full blur-[80px] translate-y-1/3 pointer-events-none animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-normal filter opacity-70"></div>

      {/* Background Repeated Text Effect */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden pointer-events-none opacity-20 dark:opacity-10 select-none whitespace-nowrap z-0">
        <div className="text-[12rem] font-black italic uppercase leading-none text-outline-strong tracking-tighter dark:text-slate-800">
          Agustin Karabajich Agustin Karabajich
        </div>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between gap-12">
        {/* Header Status */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0 relative">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-100 dark:border-slate-800 shadow-sm transition-transform hover:scale-105 cursor-default self-start sm:self-auto">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-black italic tracking-widest uppercase text-slate-500 dark:text-slate-400">{t.openToWork}</span>
          </div>

          {/* Center Actions */}
          <div className="flex items-center gap-3 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-0 self-start sm:self-auto ml-1 sm:ml-0">
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:scale-110 hover:bg-white dark:hover:bg-slate-800 group/btn"
              title="Change Language"
            >
              <span className="text-xs font-black italic text-slate-700 dark:text-slate-300 group-hover/btn:text-indigo-600 dark:group-hover/btn:text-indigo-400">{language === 'en' ? 'ES' : 'EN'}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:scale-110 hover:bg-white dark:hover:bg-slate-800 group/btn"
              title="Toggle Theme"
            >
              {mounted ? (
                theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-500" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-600 group-hover/btn:text-indigo-600" />
                )
              ) : (
                <Moon className="w-4 h-4 text-slate-600 opacity-0" /> // Placeholder to prevent layout shift
              )}
            </button>
          </div>

          {/* Location */}
          <div className="text-right hidden sm:block">
            <p className="text-sm font-black italic text-slate-900 dark:text-white lowercase">{t.locationLabel}</p>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Canelones, UY</p>
          </div>
        </div>

        {/* Main Title with Reveal Animation */}
        <div className="space-y-4">
          <p className="text-xl font-black italic text-slate-900 dark:text-white lowercase">{t.aboutLabel}</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-slate-900 dark:text-white leading-[0.85] font-black italic uppercase tracking-tighter break-words">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block"
            >
              Agustin
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-slate-900 dark:text-white block"
            >
              Karabajich<span className="text-indigo-600 dark:text-indigo-400">.</span>
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl font-medium italic leading-relaxed tracking-wide pt-4"
          >
            {language === 'en' ? (
              <>Software Engineer Student. Bridging the gap between <span className="text-indigo-600 dark:text-indigo-400 font-black relative inline-block">DESIGN</span> and <span className="text-slate-900 dark:text-white font-black">ENGINEERING</span>.</>
            ) : (
              <>Estudiante de Ingeniería de Software. Uniendo el <span className="text-indigo-600 dark:text-indigo-400 font-black relative inline-block">DISEÑO</span> con la <span className="text-slate-900 dark:text-white font-black">INGENIERÍA</span>.</>
            )}
          </motion.p>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex gap-4 items-center"
        >
          <motion.a
            href="#projects-archive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-black italic text-sm tracking-wider uppercase hover:bg-indigo-600 dark:hover:bg-indigo-400 hover:text-white transition-colors duration-300 shadow-lg shadow-indigo-200/50 dark:shadow-indigo-900/30 hover:shadow-indigo-500/30"
          >
            {t.cta}
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};