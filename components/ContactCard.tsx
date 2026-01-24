import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useLanguage } from './Providers';

export const ContactCard: React.FC = () => {
  const { language } = useLanguage();

  const t = {
    en: {
      label: "contact/",
      title: "Let's Work Together",
      subtitle: "Available for freelance & full-time."
    },
    es: {
      label: "contacto/",
      title: "Trabajemos Juntos",
      subtitle: "Disponible para freelance y full-time."
    }
  }[language];

  return (
    <div className="h-full bg-white dark:bg-slate-950 rounded-[2rem] p-8 flex flex-col justify-center relative overflow-hidden group cursor-default border border-slate-100 dark:border-slate-800 shadow-sm hover:border-indigo-100 dark:hover:border-indigo-900/50 hover:shadow-lg transition-all duration-500">
      <div className="flex items-center gap-5 relative z-10">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 dark:border-slate-800 shadow-sm relative shrink-0">
          <img
            alt="Agustin"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            src="foto-mia.jpg"
          />
        </div>

        <div className="flex-1 min-w-0 flex flex-col gap-3">
          <div>
            <p className="text-sm font-black italic text-slate-900 dark:text-white lowercase mb-1">{t.label}</p>
            <h4 className="font-black italic uppercase text-xl text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{t.title}</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 truncate italic font-medium">{t.subtitle}</p>
          </div>

          <div className="flex flex-row gap-3">
            <a
              href="https://linkedin.com/in/agustín-karabajich"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-[#0077b5] hover:text-white hover:scale-110 transition-all duration-300 shadow-sm relative z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/karaba21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-[#333] dark:hover:bg-white hover:text-white dark:hover:text-black hover:scale-110 transition-all duration-300 shadow-sm relative z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={20} />
            </a>
            <a href="mailto: agustin.karabajich@gmail.com" className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-sm">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};