import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ArchiveProject {
    id: string;
    title: string;
    src: string;
    tags: string[];
    link: string;
    hoverColor: string; // Tailwind class for hover text color
    color: string; // Hex color for button background
}

const ARCHIVE_PROJECTS: ArchiveProject[] = [
    {
        id: "gp-automoviles",
        title: "GP Automoviles",
        src: "gp-automoviles.png",
        tags: ["OpenWeather", "React"],
        link: "https://gpautomovilesuy.com",
        hoverColor: "group-hover:text-blue-500",
        color: "#3b82f6",
    },
    {
        id: "cockpit",
        title: "Cockpit",
        src: "cockpit.png",
        tags: ["Gatsby", "SCSS"],
        link: "https://cockpituy.com",
        hoverColor: "group-hover:text-indigo-500",
        color: "#6366f1",
    },
    {
        id: "crypto-tracker",
        title: "Crypto Tracker",
        src: "crypto-tracker.png",
        tags: ["CoinGecko", "Vue"],
        link: "https://crypto-tracker.agustin.com",
        hoverColor: "group-hover:text-orange-500",
        color: "#f97316",
    },
    {
        id: "note-taking-app",
        title: "Note Taking App",
        src: "note-taking-app.png",
        tags: ["Firebase", "Next.js"],
        link: "https://notetakingapp.agustin.com",
        hoverColor: "group-hover:text-yellow-500",
        color: "#eab308",
    },
    {
        id: "task-master",
        title: "Task Master",
        src: "task-master.png",
        tags: ["TypeScript"],
        link: "https://taskmaster.agustin.com",
        hoverColor: "group-hover:text-emerald-500",
        color: "#10b981",
    },
];

export const ProjectsArchive = () => {
    return (
        <section id="projects-archive" className="pt-24 pb-8">
            {/* Header Divider */}
            <div className="flex items-center gap-4 mb-12">
                <div className="h-[1px] flex-1 bg-slate-200"></div>
                <div className="text-center px-4">
                    <p className="text-sm font-black italic text-slate-400 lowercase mb-1">archive/</p>
                    <h2 className="text-3xl font-black italic uppercase text-slate-900 leading-none tracking-tight">
                        Projects
                    </h2>
                </div>
                <div className="h-[1px] flex-1 bg-slate-200"></div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ARCHIVE_PROJECTS.map((project) => (
                    <motion.div
                        key={project.id}
                        whileHover={{ y: -5 }}
                        className="group relative bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-300 cursor-pointer"
                    >
                        {/* Icon Container - Faint gray background, default gray icon */}
                        <div className="mb-6 h-32 bg-slate-50 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-100 group-hover:bg-slate-100 transition-colors duration-300">
                            {/* Icon Wrapper for transforms */}
                            <div className={`transform group-hover:scale-110 transition-all duration-300`}>
                                {/* Icon itself changes color on hover */}
                                <div className={`text-slate-300 transition-colors duration-300 ${project.hoverColor}`}>
                                    <img src={project.src} alt={project.title} />
                                </div>
                            </div>
                        </div>


                        {/* Content */}
                        <div className="pb-8">
                            <h3 className="text-lg font-black italic uppercase text-slate-900 mb-3 tracking-tight">
                                {project.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-slate-100 text-slate-500 rounded-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ backgroundColor: project.color, boxShadow: `0 10px 15px -3px ${project.color}40` }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute bottom-4 right-4 w-10 h-10 rounded-full text-white flex items-center justify-center transition-colors duration-300"
                            >
                                <ArrowUpRight size={18} />
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
