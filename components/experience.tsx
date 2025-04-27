// components/experience.tsx
'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Frontend Developer",
    company: "School Wallet",
    period: "Apr 2025 - Present",
    description: [
      "Developed the super admin dashboard for application oversight",
      "Integrated Contentful CMS for blog content management",
      "Built responsive, interactive web pages"
    ]
  },
  {
    role: "Frontend Developer",
    company: "Gradific",
    period: "Apr 2025 - Present",
    description: [
      "Developed the super admin dashboard for application oversight",
      "Integrated Contentful CMS for blog content management",
      "Built responsive, interactive web pages"
    ]
  },
  {
    role: "Frontend Developer",
    company: "HNG Internship",
    period: "Jan 2025 - Apr 2025",
    description: [
      "Contributed to real-world applications in a fast-paced team environment",
      "Collaborated on scalable user interfaces",
      "Recognized for leadership and problem-solving skills"
    ]
  }
];

export function Experience() {
  return (
    <section className="container mx-auto px-4 py-20">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-16 dark:text-white text-black text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="relative">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative pl-16 pb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center z-10">
              <div className="w-3 h-3 rounded-full bg-white dark:bg-black" />
            </div>

            {/* Vertical line from this dot to the next */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-5 top-10 h-full w-0.5 bg-blue-200 dark:bg-gray-800 z-0" />
            )}

            <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold dark:text-white text-black">{exp.role}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-4">
                <span className="font-medium text-blue-500">{exp.company}</span>
                <span className="text-sm dark:text-gray-400 text-gray-500">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start dark:text-gray-300 text-gray-600">
                    <span className="text-blue-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


        {/* Timeline line */}
        {/* <div className="absolute left-5 top-0 h-full w-0.5 bg-blue-200 dark:bg-gray-800" /> */}

        {/* {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative pl-16 pb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            
            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white dark:bg-black" />
            </div>

            <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold dark:text-white text-black">{exp.role}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-4">
                <span className="font-medium text-blue-500">{exp.company}</span>
                <span className="text-sm dark:text-gray-400 text-gray-500">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start dark:text-gray-300 text-gray-600">
                    <span className="text-blue-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))} */}