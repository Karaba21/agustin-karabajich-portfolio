import React from 'react';
import { Database, CreditCard, Server, Mail, ShoppingBag } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from './Providers';

export const ServicesCard: React.FC = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const { language } = useLanguage();

    const t = {
        en: {
            label: "services/ BACKEND & PAYMENTS",
            title: "SERVICES &\nINTEGRATIONS",
            description: "Powering robust, scalable SaaS architectures with modern cloud-native solutions."
        },
        es: {
            label: "servicios/ BACKEND & PAGOS",
            title: "SERVICIOS E\nINTEGRACIONES",
            description: "Impulsando arquitecturas SaaS robustas y escalables con soluciones modernas nativas de la nube."
        }
    }[language];

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

    const services = [
        { name: 'SUPABASE', icon: <Database size={24} className="text-emerald-500" /> },
        { name: 'PAYPAL', icon: <CreditCard size={24} className="text-indigo-500" /> },
        { name: 'NETLIFY', icon: <Server size={24} className="text-slate-900 dark:text-white" /> },
        { name: 'BREVO', icon: <Mail size={24} className="text-purple-500" /> },
        { name: 'LEMON SQUEEZY', icon: <CreditCard size={24} className="text-yellow-500" /> },
        { name: 'SHOPIFY', icon: <ShoppingBag size={24} className="text-emerald-500" /> },
    ];

    return (
        <motion.div
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{ perspective: 1000 }}
            className="h-full w-full min-h-[400px]" // Matches ProjectShowcaseCard height
        >
            <motion.div
                style={{ rotateX, rotateY }}
                className="h-full bg-white dark:bg-slate-950 rounded-[2rem] p-8 flex flex-col justify-between border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden group"
            >
                {/* Header Content */}
                <div style={{ transform: "translateZ(20px)" }}>
                    <p className="text-sm font-bold italic text-slate-400 dark:text-slate-500 mb-2">{t.label}</p>
                    <h3 className="text-3xl font-black italic uppercase text-slate-900 dark:text-white leading-none tracking-tight whitespace-pre-line">
                        {t.title}
                    </h3>
                </div>

                {/* Icons Grid/Row */}
                <div
                    className="flex flex-wrap items-center justify-between gap-4 mt-8"
                    style={{ transform: "translateZ(30px)" }}
                >
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 group/icon">
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-sm group-hover/icon:shadow-md transition-all duration-300 group-hover/icon:-translate-y-1">
                                {service.icon}
                            </div>
                            <span className="text-[10px] font-black italic text-slate-400 dark:text-slate-500 uppercase tracking-wider group-hover/icon:text-slate-600 dark:group-hover/icon:text-slate-300 transition-colors">
                                {service.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Footer Content */}
                <div
                    className="mt-8 pt-8 border-t border-slate-50 dark:border-slate-900 flex items-end justify-between"
                    style={{ transform: "translateZ(20px)" }}
                >
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium max-w-xs leading-relaxed">
                        {t.description}
                    </p>

                    {/* Decorative Dots */}
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    </div>
                </div>

                {/* Optional Top Right Decoration from image (diamond shape) */}
                <div className="absolute top-8 right-8 text-slate-200 dark:text-slate-800">
                    <div className="grid grid-cols-2 gap-0.5">
                        <div className="w-2 h-2 bg-current rounded-sm"></div>
                        <div className="w-2 h-2 bg-current rounded-sm"></div>
                        <div className="w-2 h-2 bg-current rounded-sm"></div>
                        <div className="w-2 h-2 bg-current rounded-sm"></div>
                    </div>
                </div>

            </motion.div>
        </motion.div>
    );
};
