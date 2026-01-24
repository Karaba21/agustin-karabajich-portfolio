import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ArchiveProject {
    id: string;
    title: string;
    src: string;
    tags: string[];
    link: string;
    description: string;
    hoverColor: string; // Tailwind class for hover text color
    color: string; // Hex color for button background
}

const ARCHIVE_PROJECTS: ArchiveProject[] = [
    {
        id: "gp-automoviles",
        title: "GP Automoviles",
        src: "gp-automoviles.png",
        tags: ["TypeScript", "Next.js", "Tailwind", "Supabase", "React"],
        link: "https://gpautomovilesuy.com",
        description: "Fully responsive website for a car dealership. Supabase integration for user authentication and data management. Brevo integration for email marketing.",
        hoverColor: "group-hover:text-blue-500",
        color: "#6366f1",
    },
    {
        id: "cockpit",
        title: "Cockpit",
        src: "cockpit.png",
        tags: ["TypeScript", "Next.js", "Tailwind", "Shopify", "React"],
        link: "https://cockpituy.com",
        description: "E-commerce website for a cockpit store. Shopify integration for product management and checkout. Supabase integration for user authentication and data management.",
        hoverColor: "group-hover:text-indigo-500",
        color: "#f97316",
    },
    {
        id: "sav-solutions",
        title: "SAV Solutions",
        src: "sav.png",
        tags: ["TypeScript", "Next.js", "Tailwind", "React"],
        link: "https://savsolutionsuy.com",
        description: "Landing page for web development and IT services company",
        hoverColor: "group-hover:text-orange-500",
        color: "#3a18b8ff",
    },
    {
        id: "infinite-agency",
        title: "Infinite Agency CRM",
        src: "crm.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://infiniteagencycrm.com",
        description: "Landing page for CRM company",
        hoverColor: "group-hover:text-yellow-500",
        color: "#eab308",
    },
    {
        id: "glink",
        title: "Glink",
        src: "glink.png",
        tags: ["TypeScript", "Next.js", "Tailwind", "Shopify", "React"],
        link: "https://glinkuy.com",
        description: "E-commerce website for a product store. Shopify integration for product management and checkout.",
        hoverColor: "group-hover:text-emerald-500",
        color: "#10b981",
    },
    {
        id: "innowave",
        title: "Innowave",
        src: "innowave.png",
        tags: ["TypeScript", "Next.js", "Tailwind", "Shopify", "React"],
        link: "https://innowaveuy.com",
        description: "E-commerce website for a product store. Shopify integration for product management and checkout.",
        hoverColor: "group-hover:text-emerald-500",
        color: "#2b4fc6ff",
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ARCHIVE_PROJECTS.map((project) => (
                    <motion.div
                        key={project.id}
                        whileHover={{ y: -5 }}
                        className="group relative bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                        {/* Image Container */}
                        <div className="h-48 bg-slate-50 overflow-hidden border-b border-slate-100 relative group-hover:shadow-sm transition-all duration-300">
                            <img
                                src={project.src}
                                alt={project.title}
                                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>


                        {/* Content */}
                        <div className="p-6 pb-8">
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
                            <p className="text-sm font-medium text-slate-600 normal-case leading-relaxed mt-4 group-hover/icon:text-slate-800 transition-colors">
                                {project.description}
                            </p>
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
