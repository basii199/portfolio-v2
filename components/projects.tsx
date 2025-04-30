// components/projects.tsx
'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from './project-card';
import Link from 'next/link';

const projects = [
  {
    title: "ShopDesk",
    description: "Inventory management system for small businesses",
    tags: ["Next.js", "Redux", "TypeScript"],
    link: "#",
    images: [
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758043/shopdesk-home_fxxyma.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758046/shopdesk-dashboard_utywf7.png"
    ],
  },
  {
    title: "Gradific",
    description: "AI-powered grading tool for educators",
    tags: ["Next.js", "TypeScript",],
    link: "#",
    images: [
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758037/gradific-home_vc4qau.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758063/gradific-signup_pxn16q.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758035/gradific-dashboard_x2ug9n.png",
    ],
  },
  {
    title: "School Wallet",
    description: "Secure school fees management system",
    tags: ["React", "Redux", "Recharts"],
    link: "#",
    images: [
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758065/schoolwallet-home_yhxfxe.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758051/schoolwallet-dashboard_h9esfr.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758047/schoolwallet-report_iyvm6l.png",
    ],
  }
];

export function Projects() {
  return (
    <section className="conntainer mx-auto px-4 py-20">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-12 dark:text-white text-black text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects Showcase
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {projects.map((project, index) => (
          <div
          className={`${project.title === "School Wallet" ? 'md:hidden lg:block' : ''}`}
            key={project.title}          
          >
            <ProjectCard 
              project={project}
              index={index}
            />
          </div>
        ))}
      </div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link 
          href="/projects" 
          className="px-8 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(30,143,255,0.1)] transition-all duration-300 text-center"
        >
          <span className="inline-flex items-center gap-2 text-lg font-medium dark:text-white text-black">
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </Link>
      </motion.div>
    </section>
  );
}