// components/experience.tsx
"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "RavenPay Limited",
    location: "Lagos, Nigeria",
    role: "Frontend Engineer (Infrastructure Team)",
    period: "June 2024 - Present",
    description: [
      "Architected and shipped the BankBox merchant console using React and TypeScript, powering self-serve POS fleet management, transaction reconciliation, and real-time analytics for 20,000+ businesses.",
      "Built a React + Vite boilerplate with AI agent rules that encode Raven's design system, including components, hooks, and helpers, standardizing project setup across teams and cutting Figma-to-production build time by 80%.",
      "Implemented real-time transaction tracking with virtualized tables and incremental rendering, sustaining stable rendering on high-frequency payment event streams.",
      "Designed and built application and approval flows for TapCredit, an emergency fund access platform for corporate employees, balancing conversion-optimized UX with responsible-lending guardrails.",
      "Maintained and extended the Core banking platform powering all RavenPay products, enabling operations teams to manage merchants, users, and transactions at scale.",
      "Built and maintained an organization-wide reusable component library adopted across Raven projects, cutting new feature build time and ensuring visual consistency across the ecosystem.",
      "Collaborated with design and product teams to translate Figma specifications into accessible, responsive interfaces across websites, merchant-facing applications, and core banking pages.",
      "Refactored legacy views into shared component primitives, reducing duplication and cutting build size by 50%.",
      "Upgraded deprecated frontend dependencies to LTS versions, eliminating critical vulnerability advisories and unblocking future dependency upgrades across the frontend stack.",
    ],
  },
  {
    company: "Elaris Consult",
    location: "Remote, Germany",
    role: "Fullstack Developer (Contract)",
    period: "May 2025 - Jan 2026",
    description: [
      "Built the entire immigration and relocation platform from scratch using Next.js and TypeScript, including a custom component library and schema-based validation system that reduced dependence on third-party UI libraries.",
      "Implemented Next.js BFF authentication to protect sensitive immigration data, with role-based access for clients and admins.",
      "Delivered a client dashboard, admin case-management panel, consultation booking system, and newsletter system supporting 100+ successful relocations.",
      "Built the admin panel for managing client cases, reviewing uploaded documentation, providing structured feedback, and overseeing visa application timelines.",
      "Implemented an end-to-end consultation booking flow for scheduling business consulting sessions, including availability management and confirmation workflows.",
      "Converted Figma designs into pixel-accurate, responsive interfaces with a strong focus on usability and mobile responsiveness.",
    ],
  },
  {
    company: "HNG Internship",
    location: "Lagos, Nigeria",
    role: "Frontend Mentor (Volunteer)",
    period: "Oct 2025 - Present",
    description: [
      "Awarded Best Frontend Mentor (HNG 14), recognized for leadership and technical excellence across HNG 13, 14, and 15, supporting 30,000+ program participants globally.",
      "Conducted code reviews on intern pull requests, providing structured feedback on React, JavaScript, CSS, and Git workflows to enforce quality standards and industry best practices.",
      "Facilitated onboarding for new interns, helping them navigate HNG's tools, stage requirements, and team workflows during the intensive 8-week bootcamp.",
      "Provided technical support to help interns persist through the stages and better understand the grading and deadline structure, contributing to a better learning curve.",
      "Partnered with the frontend track lead to design job-market-aligned coding tasks, equipping interns with practical skills and workflows demanded by modern engineering teams.",
      "Recognized for leadership and problem-solving, receiving the award for Best Frontend Mentor in HNG 14.",
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
