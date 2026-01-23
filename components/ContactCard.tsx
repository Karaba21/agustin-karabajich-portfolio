import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export const ContactCard: React.FC = () => {
  return (
    <div className="h-full bg-white rounded-[2rem] p-8 flex flex-col justify-center relative overflow-hidden group cursor-default border border-slate-100 shadow-sm hover:border-indigo-100 hover:shadow-lg transition-all duration-500">
      <div className="flex items-center gap-5 relative z-10">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm relative shrink-0">
          <img
            alt="Agustin"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo4u7b9Suk5oDG1dijk9OzCR6jl-fQF608u79nCDlV5t2A00dZj142XD7r9gP--5NU_dukmszFDO-QnqBhtrc_IXSnJhf7F3Uz0Hu0hsuGD15t9hOELRjdAgPgVfWlMGYsXeR0P29Ir12OqXaanx3iuCGyPvqxabRmYDXQ3OObqGAYJXNIng-jq3Cx7PKh27XOjN7fjWpbsRDaxcRLwbHdan-W-GHylEkxbPtzg5vV08XD76WF4Hv2h0LG4AgVBlFHflFMCsKsDOlD"
          />
        </div>

        <div className="flex-1 min-w-0 flex flex-col gap-3">
          <div>
            <p className="text-sm font-black italic text-slate-900 lowercase mb-1">contact/</p>
            <h4 className="font-black italic uppercase text-xl text-slate-900 group-hover:text-indigo-600 transition-colors">Let's Work Together</h4>
            <p className="text-sm text-slate-500 mt-1 truncate italic font-medium">Available for freelance & full-time.</p>
          </div>

          <div className="flex flex-row gap-3">
            <a
              href="https://linkedin.com/in/agustín-karabajich"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:text-white hover:scale-110 transition-all duration-300 shadow-sm relative z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/karaba21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#333] hover:text-white hover:scale-110 transition-all duration-300 shadow-sm relative z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={20} />
            </a>
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
              <Mail size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};