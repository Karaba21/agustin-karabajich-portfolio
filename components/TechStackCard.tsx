import React from 'react';
import { Layers } from 'lucide-react';

const technologies = [
  "React", "Next.js", "TypeScript", "Tailwind", "Framer Motion",
  "Three.js", "Node.js", "Supabase", "Figma", "GraphQL"
];

export const TechStackCard: React.FC = () => {
  return (
    <div className="bg-white rounded-[2rem] p-8 flex flex-col relative overflow-hidden border border-slate-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] hover:shadow-lg transition-shadow duration-500 group">
      <div className="flex items-center justify-between mb-8 z-10">
        <div>
          <p className="text-sm font-black italic text-slate-900 lowercase">tools/</p>
          <h3 className="text-xl font-black italic uppercase text-slate-800">Technology</h3>
        </div>
        <Layers className="text-slate-300 group-hover:text-indigo-500 transition-colors duration-300" size={30} />
      </div>

      <div className="flex flex-wrap gap-3 z-10 content-start">
        {technologies.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className={`px-4 py-2 rounded-xl text-sm font-bold italic border uppercase tracking-wide transition-colors duration-300 cursor-default ${index >= 5
              ? "bg-indigo-50/50 border-indigo-100/50 text-indigo-900 hover:bg-indigo-100"
              : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100"
              }`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Decorative Blob */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full blur-2xl opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};