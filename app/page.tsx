'use client';

import React from 'react';
import {
    BarChart3,
    ShoppingBag,
    MessageCircle,
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { HeroCard } from '../components/HeroCard';
import { TechStackCard } from '../components/TechStackCard';
import { ProjectShowcaseCard } from '../components/ProjectShowcaseCard';
import { ServicesCard } from '../components/ServicesCard';
import { SmallProjectCard } from '../components/SmallProjectCard';
import { ActivityCard } from '../components/ActivityCard';
import { ContactCard } from '../components/ContactCard';
import { FloatingNav } from '../components/FloatingNav';
import { ProjectsArchive } from '../components/ProjectsArchive';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

export default function Home() {
    return (
        <main className="w-full min-h-screen p-4 lg:p-8 pb-32 overflow-x-hidden">
            <motion.div
                className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                {/* Top Row: Hero & Tech */}
                <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-8 lg:row-span-2">
                    <HeroCard />
                </motion.div>
                <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-4 lg:row-span-1">
                    <TechStackCard />
                </motion.div>
                <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-4 lg:row-span-1">
                    <ContactCard />
                </motion.div>

                {/* Middle Row: Showcase & Services */}
                <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-6 lg:row-span-2">
                    <ProjectShowcaseCard />
                </motion.div>

                <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-6 lg:row-span-2">
                    <ServicesCard />
                </motion.div>

                {/* Bottom Row: Projects Archive */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-12">
                    <ProjectsArchive />
                </motion.div>
            </motion.div>

            <FloatingNav />
        </main>
    );
}
