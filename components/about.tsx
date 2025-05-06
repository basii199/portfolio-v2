'use client';

import { motion } from 'framer-motion';
import { Monitor, Code, Server, Palette, Cpu, Zap } from 'lucide-react';

export function About() {
  const expertiseCards = [
    {
      title: "Full-Stack Engineer",
      content: "I build reliable web applications—from responsive frontend interfaces to efficient backend systems. Every feature is implemented for speed, and usability.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Frontend Specialist",
      content: "I turn product ideas into high-performance web apps. Whether it’s a landing page or a complex dashboard, I focus on performance, accessibility, and scalability.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "User-Centric Approach",
      content: "I write clean, accessible code and design intuitive interactions. My goal is to create software that's not only functional, but enjoyable to use.",
      icon: <Palette className="w-6 h-6" />
    }
  ];

  const skillPills = [
    { name: 'Frontend', icon: <Monitor className="w-5 h-5" /> },
    { name: 'Backend', icon: <Server className="w-5 h-5" /> },
    { name: 'UI Design', icon: <Palette className="w-5 h-5" /> },
    { name: 'DevOps', icon: <Code className="w-5 h-5" /> }
  ];

  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-black">
          About Me
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {expertiseCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative pt-12 px-6 pb-8 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow ${card.title === "Digital Alchemist" ? 'md:hidden lg:block' : ''}`}
          >
            <div className='absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-full size-16 bg-white dark:bg-gray-900/50'>
              <div className="w-12 h-12 flex items-center justify-center rounded-full dark:bg-blue-500/20 bg-blue-600/20 border dark:border-blue-400/30 border-blue-600/30">

                {card.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-black mb-3 text-center">
              {card.title}
            </h3>
            <p className="dark:text-gray-400 text-gray-600 text-center">
              {card.content}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto"
      >
        {skillPills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
          >
            {skill.icon}
            <span className="dark:text-white text-black text-sm font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}