import React from 'react';
import { Home, Briefcase, User, Mail } from 'lucide-react';

export const FloatingNav: React.FC = () => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto animate-in slide-in-from-bottom-10 fade-in duration-700">
      <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] px-2 py-2 rounded-full flex items-center gap-1">
        
        <NavButton icon={<Home size={20} />} label="Home" active />
        <NavButton icon={<Briefcase size={20} />} label="Work" />
        <NavButton icon={<User size={20} />} label="About" />

        <div className="w-px h-5 bg-slate-200 mx-2"></div>

        <button className="pl-4 pr-5 h-11 rounded-full flex items-center gap-2 bg-slate-900 hover:bg-indigo-600 text-white transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-indigo-200 hover:-translate-y-0.5 group">
          <Mail size={16} className="group-hover:animate-bounce" />
          <span className="text-xs font-bold tracking-wide">Contact</span>
        </button>
      </div>
    </nav>
  );
};

const NavButton: React.FC<{ icon: React.ReactNode, label: string, active?: boolean }> = ({ icon, label, active }) => (
  <a href="#" className={`w-11 h-11 rounded-full flex items-center justify-center transition-all group relative ${active ? 'text-slate-900 bg-slate-100' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'}`}>
    {icon}
    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-medium py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      {label}
    </span>
  </a>
);
