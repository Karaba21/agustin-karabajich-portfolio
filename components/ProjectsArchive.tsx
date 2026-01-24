import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "./Providers";

interface ArchiveProject {
    id: string;
    title: string;
    src: string;
    tags: string[];
    link: string;
    hoverColor: string;
    color: string;
}

const ARCHIVE_PROJECTS: ArchiveProject[] = [
    {
        id: "gp-automoviles",
        title: "GP Automoviles",
        src: "gp-automoviles.png",
        tags: ["TypeScript", "Next.js", "Tailwind", "Supabase", "React"],
        link: "https://gpautomovilesuy.com",
        hoverColor: "group-hover:text-blue-500",
        color: "#6366f1",
    },
    {
        id: "cockpit",
        title: "Cockpit",
        src: "cockpit.png",
        tags: ["TypeScript", "Next.js", "Tailwind", "Shopify", "React"],
        link: "https://cockpituy.com",
        hoverColor: "group-hover:text-indigo-500",
        color: "#f97316",
    },
    {
        id: "sav-solutions",
        title: "SAV Solutions",
        src: "sav.png",
        tags: ["TypeScript", "Next.js", "Tailwind", "React"],
        link: "https://savsolutionsuy.com",
        hoverColor: "group-hover:text-orange-500",
        color: "#3a18b8ff",
    },
    {
        id: "infinite-agency",
        title: "Infinite Agency CRM",
        src: "crm.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://infiniteagencycrm.com",
        hoverColor: "group-hover:text-yellow-500",
        color: "#eab308",
    },
    {
        id: "glink",
        title: "Glink",
        src: "glink.png",
        tags: ["TypeScript", "Next.js", "Tailwind", "Shopify", "React"],
        link: "https://glinkuy.com",
        hoverColor: "group-hover:text-emerald-500",
        color: "#10b981",
    },
    {
        id: "innowave",
        title: "Innowave",
        src: "innowave.png",
        tags: ["TypeScript", "Next.js", "Tailwind", "Shopify", "React"],
        link: "https://innowaveuy.com",
        hoverColor: "group-hover:text-emerald-500",
        color: "#2b4fc6ff",
    },
];

export const ProjectsArchive = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            label: "archive/",
            title: "Projects",
            descriptions: {
                "gp-automoviles": "Fully responsive website for a car dealership. Supabase integration for user authentication and data management. Brevo integration for email marketing.",
                "cockpit": "E-commerce website for a cockpit store. Shopify integration for product management and checkout. Supabase integration for user authentication and data management.",
                "sav-solutions": "Landing page for web development and IT services company",
                "infinite-agency": "Landing page for CRM company",
                "glink": "E-commerce website for a product store. Shopify integration for product management and checkout.",
                "innowave": "E-commerce website for a product store. Shopify integration for product management and checkout."
            }
        },
        es: {
            label: "archivo/",
            title: "Proyectos",
            descriptions: {
                "gp-automoviles": "Sitio web totalmente responsive para concesionaria. Integración con Supabase para autenticación y gestión de datos. Marketing por email con Brevo.",
                "cockpit": "E-commerce para tienda de simuladores. Integración con Shopify para gestión de productos y checkout. Supabase para autenticación.",
                "sav-solutions": "Landing page para empresa de desarrollo web y servicios IT",
                "infinite-agency": "Landing page para empresa de CRM",
                "glink": "E-commerce para tienda de productos. Integración con Shopify para gestión de productos y checkout.",
                "innowave": "E-commerce para tienda de productos. Integración con Shopify para gestión de productos y checkout."
            }
        }
    };

    const t = content[language];

    return (
        <section id="projects-archive" className="pt-24 pb-8">
            {/* Header Divider */}
            <div className="flex items-center gap-4 mb-12">
                <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
                <div className="text-center px-4">
                    <p className="text-sm font-black italic text-slate-400 dark:text-slate-500 lowercase mb-1">{t.label}</p>
                    <h2 className="text-3xl font-black italic uppercase text-slate-900 dark:text-white leading-none tracking-tight">
                        {t.title}
                    </h2>
                </div>
                <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ARCHIVE_PROJECTS.map((project) => (
                    <motion.div
                        key={project.id}
                        whileHover={{ y: -5 }}
                        className="group relative bg-white dark:bg-slate-950 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-50/50 dark:hover:shadow-indigo-900/20 transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                        {/* Image Container */}
                        <div className="h-48 bg-slate-50 dark:bg-slate-900 overflow-hidden border-b border-slate-100 dark:border-slate-800 relative group-hover:shadow-sm transition-all duration-300">
                            <img
                                src={project.src}
                                alt={project.title}
                                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 pb-8">
                            <h3 className="text-lg font-black italic uppercase text-slate-900 dark:text-white mb-3 tracking-tight">
                                {project.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 rounded-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 normal-case leading-relaxed mt-4 group-hover/icon:text-slate-800 dark:group-hover/icon:text-slate-200 transition-colors">
                                {t.descriptions[project.id as keyof typeof t.descriptions]}
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
