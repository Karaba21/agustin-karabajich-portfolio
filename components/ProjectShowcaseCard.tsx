import React from 'react';
import { PlayCircle, ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const ProjectShowcaseCard: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

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
    <motion.div 
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ perspective: 1000 }}
      className="h-full w-full min-h-[400px]"
    >
      <motion.div 
        style={{ rotateX, rotateY }}
        className="h-full bg-white rounded-[2rem] p-2 flex flex-col group overflow-hidden relative border border-slate-100 shadow-sm hover:shadow-2xl transition-shadow duration-500"
      >
        {/* Background/Preview Area */}
        <div className="absolute inset-0 bg-slate-50/80 z-0">
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            {/* Simulated 3D Card */}
            <motion.div 
              style={{ translateZ: 50 }}
              className="w-[80%] h-[70%] bg-white shadow-2xl rounded-xl border border-slate-100 flex items-center justify-center relative transform-style-3d group-hover:scale-105 transition-transform duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white opacity-50 rounded-xl"></div>
              
              <motion.div whileHover={{ scale: 1.2 }} className="z-20 cursor-pointer">
                <PlayCircle size={64} strokeWidth={1} className="text-indigo-400 z-10 fill-indigo-50 drop-shadow-xl" />
              </motion.div>
              
              {/* UI Mockup Details */}
              <div className="absolute bottom-6 left-6 z-10">
                <p className="text-xs font-black italic text-slate-800 uppercase tracking-widest mb-1">Featured</p>
                <p className="text-2xl font-black italic uppercase text-slate-900 tracking-tighter">Lumina UI</p>
              </div>
              
              {/* Abstract UI Elements */}
              <div className="absolute top-10 right-10 w-20 h-2 bg-slate-100 rounded-full"></div>
              <div className="absolute top-14 right-10 w-12 h-2 bg-slate-100 rounded-full"></div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white/95 to-transparent z-10 pt-24 pointer-events-none">
          <div className="flex justify-between items-end pointer-events-auto">
            <div style={{ transform: "translateZ(20px)" }}>
              <p className="text-sm font-black italic text-slate-900 lowercase mb-1">showcase/</p>
              <h3 className="text-xl font-black italic uppercase text-slate-900 leading-none">Interactive Experience</h3>
              <p className="text-sm text-slate-500 mt-1 italic font-medium">3D environments for web.</p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: "#4338ca" }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200 transition-colors duration-300"
            >
              <ArrowUpRight size={18} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};