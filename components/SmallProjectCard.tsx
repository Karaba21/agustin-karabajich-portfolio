import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface SmallProjectCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accentColor: string;
  hoverColor?: string;
  type?: 'standard' | 'chart';
}

export const SmallProjectCard: React.FC<SmallProjectCardProps> = ({ 
  title, 
  subtitle, 
  icon, 
  accentColor,
  hoverColor = "group-hover:text-indigo-400",
  type = 'standard'
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="h-full bg-white rounded-[2rem] p-6 flex flex-col relative overflow-hidden group border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-300 cursor-pointer justify-between min-h-[200px]"
    >
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-start">
        <div className={`w-10 h-10 rounded-full ${accentColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
          {icon}
        </div>
        <ArrowUpRight className={`text-slate-300 transition-colors duration-300 ${hoverColor}`} size={24} />
      </div>

      {/* Chart Graphic if needed */}
      {type === 'chart' && (
         <div className="space-y-4 my-auto flex justify-center py-6 relative z-10">
         <div className="flex items-end gap-2 h-24">
           {[40, 60, 45, 85, 100].map((h, i) => (
             <motion.div 
              key={i}
              initial={{ height: "10%" }}
              whileInView={{ height: `${h}%` }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`w-3 rounded-t-sm transition-colors duration-500 ${
                 i === 4 ? 'bg-indigo-600 group-hover:bg-indigo-700' : 
                 i === 2 ? 'bg-indigo-500 group-hover:bg-indigo-600' :
                 'bg-indigo-200 group-hover:bg-indigo-300'
              }`}
             />
           ))}
         </div>
       </div>
      )}

      {/* Content */}
      <div className="relative z-10 mt-4">
        <p className="text-sm font-black italic text-slate-400 lowercase mb-1">projects/</p>
        <h3 className="text-xl font-black italic uppercase text-slate-900 leading-none tracking-tight" dangerouslySetInnerHTML={{__html: title.replace(' ', '<br/>')}}></h3>
        <p className="text-xs text-slate-500 mt-2 font-medium flex items-center gap-2 uppercase tracking-wide">
          {subtitle}
        </p>
      </div>

      {/* Decorative Circle */}
      <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out z-0 pointer-events-none"></div>
    </motion.div>
  );
};