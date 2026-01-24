import React from 'react';
import { Database, CreditCard, Server, Users, Zap, ShoppingBag, Wallet, Mail } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const ServicesCard: React.FC = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

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
        { name: 'STRIPE', icon: <CreditCard size={24} className="text-indigo-500" /> },
        { name: 'NETLIFY', icon: <Server size={24} className="text-slate-900" /> },
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
                className="h-full bg-white rounded-[2rem] p-8 flex flex-col justify-between border border-slate-100 shadow-sm hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden group"
            >
                {/* Header Content */}
                <div style={{ transform: "translateZ(20px)" }}>
                    <p className="text-sm font-bold italic text-slate-400 mb-2">services/ BACKEND & PAYMENTS</p>
                    <h3 className="text-3xl font-black italic uppercase text-slate-900 leading-none tracking-tight">
                        SERVICES &<br />INTEGRATIONS
                    </h3>
                </div>

                {/* Icons Grid/Row */}
                <div
                    className="flex flex-wrap items-center justify-between gap-4 mt-8"
                    style={{ transform: "translateZ(30px)" }}
                >
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 group/icon">
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm group-hover/icon:shadow-md transition-all duration-300 group-hover/icon:-translate-y-1">
                                {service.icon}
                            </div>
                            <span className="text-[10px] font-black italic text-slate-400 uppercase tracking-wider group-hover/icon:text-slate-600 transition-colors">
                                {service.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Footer Content */}
                <div
                    className="mt-8 pt-8 border-t border-slate-50 flex items-end justify-between"
                    style={{ transform: "translateZ(20px)" }}
                >
                    <p className="text-sm text-slate-500 font-medium max-w-xs leading-relaxed">
                        Powering robust, scalable SaaS architectures with modern cloud-native solutions.
                    </p>

                    {/* Decorative Dots */}
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                    </div>
                </div>

                {/* Optional Top Right Decoration from image (diamond shape) */}
                <div className="absolute top-8 right-8 text-slate-200">
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
