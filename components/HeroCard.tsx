import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroCard: React.FC = () => {
  return (
    <div className="h-full bg-white rounded-[2rem] p-8 lg:p-14 flex flex-col justify-between relative overflow-hidden border border-slate-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02),0_2px_4px_-1px_rgba(0,0,0,0.02)] transition-all duration-500 group">

      {/* Decorative Blob with Animation */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/80 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none animate-blob mix-blend-multiply filter opacity-70"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-purple-50/80 rounded-full blur-[80px] translate-y-1/3 pointer-events-none animate-blob animation-delay-2000 mix-blend-multiply filter opacity-70"></div>

      {/* Background Repeated Text Effect */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden pointer-events-none opacity-20 select-none whitespace-nowrap z-0">
        <div className="text-[12rem] font-black italic uppercase leading-none text-outline-strong tracking-tighter">
          Agustin Karabajich Agustin Karabajich
        </div>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between gap-12">
        {/* Header Status */}
        <div className="flex justify-between items-start w-full">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-slate-100 shadow-sm transition-transform hover:scale-105 cursor-default">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-black italic tracking-widest uppercase text-slate-500">Open to Work</span>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-sm font-black italic text-slate-900 lowercase">location/</p>
            <p className="text-sm font-semibold text-slate-500">Canelones, UY</p>
          </div>
        </div>

        {/* Main Title with Reveal Animation */}
        <div className="space-y-4">
          <p className="text-xl font-black italic text-slate-900 lowercase">about/</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-slate-900 leading-[0.85] font-black italic uppercase tracking-tighter break-words">
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
              className="text-slate-900 block"
            >
              Karabajich<span className="text-indigo-600">.</span>
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-slate-500 max-w-2xl font-medium italic leading-relaxed tracking-wide pt-4"
          >
            Software Engineer Student. Bridging the gap between <span className="text-indigo-600 font-black relative inline-block">DESIGN</span> and <span className="text-slate-900 font-black">ENGINEERING</span>.
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
            className="bg-slate-900 text-white px-8 py-4 rounded-full font-black italic text-sm tracking-wider uppercase hover:bg-indigo-600 transition-colors duration-300 shadow-lg shadow-indigo-200/50 hover:shadow-indigo-500/30"
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};