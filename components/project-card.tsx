/* // components/project-card.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  featured?: boolean;
};

export function ProjectCard({ project, index, large = false }: { project: Project; index: number; large?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={project.link}>
        <div className={`${large ? 'p-8' : 'p-6'} h-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_rgba(30,143,255,0.1)]`}>
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <h3 className={`${large ? 'text-2xl' : 'text-xl'} font-bold mb-3 dark:text-white text-black`}>{project.title}</h3>
          <p className={`${large ? 'text-lg' : 'text-base'} text-gray-600 dark:text-gray-300 mb-4`}>{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span 
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          {large && (
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 text-blue-500">
                View Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
} */

// components/project-card.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  images: string[]; // Changed from image to images array
  featured?: boolean;
};

export function ProjectCard({ project, index, large = false }: { project: Project; index: number; large?: boolean }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll through images
  useEffect(() => {
    if (project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [project.images.length]);

  // Handle manual navigation
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={project.link}>
        <div className={`${large ? 'p-8' : 'p-6'} h-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_rgba(30,143,255,0.1)]`}>
          {/* Image Carousel */}
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
            {project.images.map((image, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-opacity duration-500 ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            
            {/* Navigation Dots */}
            {project.images.length > 1 && (
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      goToImage(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-blue-500 w-4' : 'bg-gray-300 dark:bg-gray-600'}`}
                    aria-label={`View image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          <h3 className={`${large ? 'text-2xl' : 'text-xl'} font-bold mb-3 dark:text-white text-black`}>{project.title}</h3>
          <p className={`${large ? 'text-lg' : 'text-base'} text-gray-600 dark:text-gray-300 mb-4`}>{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span 
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          {large && (
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 text-blue-500">
                View Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}