import React from 'react';
import { 
  BarChart3, 
  ShoppingBag, 
  MessageCircle, 
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { HeroCard } from './components/HeroCard';
import { TechStackCard } from './components/TechStackCard';
import { ProjectShowcaseCard } from './components/ProjectShowcaseCard';
import { SmallProjectCard } from './components/SmallProjectCard';
import { ActivityCard } from './components/ActivityCard';
import { ContactCard } from './components/ContactCard';
import { FloatingNav } from './components/FloatingNav';

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

const App: React.FC = () => {
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
        <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-4 lg:row-span-2">
          <TechStackCard />
        </motion.div>

        {/* Middle Row: Showcase, Fintech, E-commerce, Social */}
        <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-6 lg:row-span-2">
          <ProjectShowcaseCard />
        </motion.div>
        
        <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-3 lg:row-span-2">
          <SmallProjectCard 
            title="Fintech Dashboard" 
            subtitle="Data Visualization" 
            icon={<BarChart3 size={20} className="text-indigo-600" />}
            accentColor="bg-indigo-50"
            type="chart"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-3 lg:row-span-1">
          <SmallProjectCard 
            title="E-commerce Experience" 
            subtitle="Shopify Headless" 
            icon={<ShoppingBag size={20} className="text-indigo-600" />}
            accentColor="bg-indigo-50"
            type="standard"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-3 lg:row-span-1">
          <SmallProjectCard 
            title="Social Media App" 
            subtitle="Real-time Interactions" 
            icon={<MessageCircle size={20} className="text-pink-500" />}
            accentColor="bg-pink-50"
            hoverColor="group-hover:text-pink-400"
            type="standard"
          />
        </motion.div>

        {/* Bottom Row: Activity & Contact */}
        <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-4 lg:row-span-1">
          <ActivityCard />
        </motion.div>
        <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-8 lg:row-span-1">
          <ContactCard />
        </motion.div>

      </motion.div>

      <FloatingNav />
    </main>
  );
};

export default App;