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
        className="h-full bg-white rounded-[2rem] flex flex-col group overflow-hidden relative border border-slate-100 shadow-sm hover:shadow-2xl transition-shadow duration-500"
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
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white/95 to-transparent z-10 pt-24 pointer-events-none">
          <div className="flex justify-between items-end pointer-events-auto">
            <div style={{ transform: "translateZ(20px)" }}>
              <p className="text-sm font-black italic text-slate-900 lowercase mb-1">showcase/</p>
              <h3 className="text-xl font-black italic uppercase text-slate-900 leading-none">Proper Organizer.</h3>
              <p className="text-sm text-slate-500 mt-1 italic font-medium">Web app for managing your assets and expenses.</p>
            </div>
            <motion.a
              href="https://properorganizer.com" // Link added here
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, backgroundColor: "#0ea5e9" }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-sky-400 text-white flex items-center justify-center shadow-lg shadow-sky-200 transition-colors duration-300"
            >
              <ArrowUpRight size={18} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};