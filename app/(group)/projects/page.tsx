// app/projects/page.tsx
import { ProjectCard } from '@/components/project-card';
import { MotionDiv } from '@/components/motion-div';

const allProjects = [
  {
    title: "ShopDesk",
    description: "A simplified inventory management system for small businesses built with Next.js, Redux, TypeScript, and Framer Motion.",
    tags: ["Next.js", "Redux", "TypeScript", "Framer Motion"],
    link: "#",
    images: [
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758043/shopdesk-home_fxxyma.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758046/shopdesk-dashboard_utywf7.png"
    ],
    featured: true
  },
  {
    title: "Gradific",
    description: "AI-powered grading tool for teachers and lecturers developed with Next.js and TypeScript.",
    tags: ["Next.js", "TypeScript", "AI"],
    link: "#",
    images: [
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758037/gradific-home_vc4qau.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758063/gradific-signup_pxn16q.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758035/gradific-dashboard_x2ug9n.png",
    ],
    featured: true
  },
  {
    title: "School Wallet",
    description: "Secure school fees management system built with React, Redux, and Recharts.",
    tags: ["React", "Redux", "Recharts"],
    link: "#",
    images: [
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758065/schoolwallet-home_yhxfxe.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758051/schoolwallet-dashboard_h9esfr.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758047/schoolwallet-report_iyvm6l.png",
    ],
    featured: true
  },
  {
    title: "AI-Translator",
    description: "Smart translation and summarization tool built using React and Chrome APIs.",
    tags: ["React", "Chrome APIs"],
    link: "#",
    images: ["https://res.cloudinary.com/dj5wh1pcv/image/upload/sample.jpg"],
  },
  {
    title: "Weather App",
    description: "Minimalist real-time weather application developed with React and Weather API.",
    tags: ["React", "Weather API"],
    link: "#",
    images: ["https://res.cloudinary.com/dj5wh1pcv/image/upload/sample.jpg"],
  },
  {
    title: "AIO-Gle",
    description: "AI-powered search engine and information summarizer built with Next.js, Redux, and TypeScript.",
    tags: ["Next.js", "Redux", "TypeScript", "AI"],
    link: "#",
    images: ["https://res.cloudinary.com/dj5wh1pcv/image/upload/sample.jpg"],
  },
  {
    title: "Cash Hub",
    description: "AI-driven savings and budgeting platform built with Next.js, TypeScript, and Redux.",
    tags: ["Next.js", "TypeScript", "Redux", "AI"],
    link: "#",
    images: ["https://res.cloudinary.com/dj5wh1pcv/image/upload/sample.jpg"],
  }
];

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-black">
            Projects
          </h1>
          <p className="text-lg dark:text-gray-300 text-gray-600 mb-12 max-w-3xl">
            A collection of my professional work and personal projects. Each one represents a unique challenge and learning opportunity.
          </p>
        </MotionDiv>

        <div className="mb-20">
          <h2 className="text-xl md:text-2xl font-bold mb-8 dark:text-white text-black">Featured Work</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {allProjects
              .filter(project => project.featured)
              .map((project, index) => (
                <ProjectCard 
                  key={project.title}
                  project={project}
                  index={index}
                  large
                />
              ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-8 dark:text-white text-black">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <ProjectCard 
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}