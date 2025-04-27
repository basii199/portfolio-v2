// components/tech-stack.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const techItems = [
  { name: 'React', icon: 'react-original' },
  { name: 'TypeScript', icon: 'typescript-original' },
  { name: 'JavaScript', icon: 'javascript-original' },
  { name: 'NextJS', icon: 'nextjs-original' },
  { name: 'TailwindCSS', icon: 'tailwindcss-original' },
  { name: 'Redux', icon: 'redux-original' },
  { name: 'Git', icon: 'git-original' },
  { name: 'GitHub', icon: 'github-original' },
  { name: 'VSCode', icon: 'vscode-original' },
  { name: 'Figma', icon: 'figma-original' },
  { name: 'Firebase', icon: 'firebase-plain' },
  { name: 'Supabase', icon: 'supabase-original' },
];

export function TechStack() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white text-black">
            Tech Stack
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {techItems.map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow ${tech.name === 'VSCode' || tech.name === 'Figma' ? 'lg:hidden' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image 
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.name.toLowerCase()}/${tech.icon}.svg`}
                    alt={tech.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-medium dark:text-white text-black">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}