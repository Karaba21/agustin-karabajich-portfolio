import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

export const ActivityCard: React.FC = () => {
  // Generate fake commit data bars
  const bars = Array.from({ length: 21 }, (_, i) => ({
    height: Math.floor(Math.random() * 80) + 20,
    active: Math.random() > 0.5
  }));

  return (
    <div className="h-full bg-white rounded-[2rem] p-6 flex flex-col justify-between border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 min-h-[160px] group">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
          <Github size={20} className="text-slate-700 opacity-80 group-hover:text-white group-hover:opacity-100" />
        </div>
        <div>
          <h3 className="font-black italic uppercase text-sm text-slate-900">Code Activity</h3>
          <p className="text-[10px] text-slate-400 font-bold italic uppercase">Live Data</p>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 h-20 items-end opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        {bars.map((bar, index) => (
          <motion.div 
            key={index}
            initial={{ height: 0 }}
            animate={{ height: `${bar.height}%` }}
            transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
            className={`w-full rounded-sm transition-colors duration-300 ${bar.active ? 'bg-indigo-500' : 'bg-slate-200 group-hover:bg-slate-300'}`} 
          ></motion.div>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center text-[10px] text-slate-400 font-medium">
        <span className="font-bold italic">1,204 Commits</span>
        <span className="text-indigo-600 font-black italic uppercase group-hover:scale-110 transition-transform origin-right">Top 5%</span>
      </div>
    </div>
  );
};