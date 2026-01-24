import React, { useState } from 'react';
import { ArrowUpRight, Info } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ModalShowcase } from './ModalShowcase';
import { useLanguage } from './Providers';

export const ProjectShowcaseCard: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();

  const t = {
    en: {
      label: "showcase/",
      description: "Web app for managing your assets and expenses."
    },
    es: {
      label: "proyecto/",
      description: "Web app para gestionar tus activos y gastos."
    }
  }[language];

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-200, 200], [10, -10]);
  const rotateY = useTransform(mouseX, [-200, 200], [-10, 10]);

  return (
    <>
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ perspective: 1000 }}
        className="h-full w-full min-h-[400px]"
      >
        <motion.div
          style={{ rotateX, rotateY }}
          className="h-full bg-white dark:bg-slate-950 rounded-[2rem] flex flex-col group overflow-hidden relative border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-shadow duration-500"
        >
          {/* Background/Preview Area */}
          <div className="absolute inset-0 bg-slate-50/80 z-0">
            <div className="w-full h-full flex items-start justify-center overflow-hidden">
              {/* Simulated 3D Card */}
              <img
                src="proper.png"
                alt="Proper Organizer Interface"
                className="w-full h-full object-cover object-top transition-transform duration-700"
              />
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white/95 to-transparent dark:from-slate-950 dark:via-slate-950/95 dark:to-transparent z-10 pt-24 pointer-events-none">
            <div className="flex justify-between items-end pointer-events-auto">
              <div style={{ transform: "translateZ(20px)" }}>
                <p className="text-sm font-black italic text-slate-900 dark:text-white lowercase mb-1">{t.label}</p>
                <h3 className="text-xl font-black italic uppercase text-slate-900 dark:text-white leading-none">Proper Organizer.</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 italic font-medium">{t.description}</p>
              </div>
              <div className="flex gap-3">
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsModalOpen(true);
                  }}
                  whileHover={{ scale: 1.1, backgroundColor: "#0ea5e9" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-sky-400 text-white flex items-center justify-center shadow-lg shadow-sky-200 dark:shadow-sky-900/30 transition-colors duration-300"
                >
                  <Info size={18} />
                </motion.button>
                <motion.a
                  href="https://properorganizer.com" // Link added here
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1, backgroundColor: "#0ea5e9" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-sky-400 text-white flex items-center justify-center shadow-lg shadow-sky-200 dark:shadow-sky-900/30 transition-colors duration-300"
                >
                  <ArrowUpRight size={18} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <ModalShowcase isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};