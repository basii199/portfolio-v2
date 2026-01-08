// components/experience.tsx
"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Engineer",
    company: "RavenPay Limited",
    period: "June 2025 - Present",
    description: [
      "I build and maintain the frontend of the Bankbox Console and its internal management web applications, ensuring stability and consistency across core features.",
      "I work closely with UX/UI designers to turn wireframes and mockups into polished, interactive interfaces that match product requirements.",
      "I apply the organization’s design system consistently across products to maintain a familiar look, feel, and user experience.",
      "I collaborate with backend engineers to define API requirements and integrate dynamic data into the application.",
      "I write clean, maintainable code and take part in code reviews, contributing to shared standards and team knowledge.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "October 2023 - Present",
    description: [
      "I design and develop responsive web interfaces using React, Next.js, TypeScript, and TailwindCSS.",
      "I communicate clearly with stakeholders to translate business requirements into effective technical solutions while ensuring transparency and timely delivery.",
      "I collaborate closely with team members on projects to align goals, share responsibilities, and deliver high-quality outcomes.",
      "I convert Figma designs into responsive, pixel-perfect landing pages and dashboards with a strong focus on usability and user experience.",
    ],
  },
  {
    role: "Frontend Developer (Mentor)",
    company: "HNG Internship",
    period: "Oct 2025 - Dec 2025",
    description: [
      "Mentored interns through hands-on projects, code reviews, and real-world problem-solving while providing clear, actionable, and structured feedback.",
      "Assisted with onboarding and registration of new interns by explaining program structure, tools, workflows, and learning expectations.",
      "Collaborated with fellow mentors to review, improve, and align curriculum content with industry best practices.",
      "Provided continuous technical support and debugging assistance to help interns overcome blockers and complete assigned tasks successfully.",
      "Fostered a collaborative and supportive learning environment through strong communication, leadership, and teamwork.",
    ],
  },
  {
    role: "Frontend Developer (Intern)",
    company: "HNG Internship",
    period: "Jan 2025 - Apr 2025",
    description: [
      "Built responsive, high-performance web applications with Next.js, TypeScript, and TailwindCSS.",
      "Elevated code quality and development speed through effective use of version control, and CI/CD practices.",
      "Worked collaboratively in Agile teams alongside designers, devops, and product managers to ensure timely and efficient project delivery.",
      "Earned recognition from mentors for strong leadership, strategic thinking, and effective problem-solving.",
    ],
  },
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
            className="relative pl-10 md:pl-16 pb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 size-6 md:size-10 rounded-full bg-blue-500 flex items-center justify-center z-10">
              <div className="w-3 h-3 rounded-full bg-white dark:bg-black" />
            </div>

            {/* Vertical line from this dot to the next */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-3 md:left-5 top-6 md:top-10 h-full w-0.5 bg-blue-200 dark:bg-gray-800 z-0" />
            )}

            <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold dark:text-white text-black">
                {exp.role}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-4">
                <span className="font-medium text-blue-500">{exp.company}</span>
                <span className="text-sm dark:text-gray-400 text-gray-500">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start dark:text-gray-300 text-gray-600"
                  >
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

{
  /* Timeline line */
}
{
  /* <div className="absolute left-5 top-0 h-full w-0.5 bg-blue-200 dark:bg-gray-800" /> */
}

{
  /* {experiences.map((exp, index) => (
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
        ))} */
}
