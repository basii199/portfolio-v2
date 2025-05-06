// app/projects/page.tsx
import { ProjectCard } from '@/components/project-card';
import { MotionDiv } from '@/components/motion-div';

const allProjects = [
  {
    title: "ShopDesk",
    description: "A simplified inventory management system for small businesses built with Next.js, Redux, TypeScript.",
    tags: ["Next.js", "Redux", "TypeScript"],
    link: "https://www.shopdesk.im/",
    images: [
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758043/shopdesk-home_fxxyma.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758046/shopdesk-dashboard_utywf7.png"
    ],
    featured: true
  },
  {
    title: "School Wallet",
    description: "Secure school fees management system built with React and Recharts for data visualization.",
    tags: ["React", "Recharts"],
    link: "#",
    images: [
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758065/schoolwallet-home_yhxfxe.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758051/schoolwallet-dashboard_h9esfr.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758047/schoolwallet-report_iyvm6l.png",
    ],
    featured: true
  },
  {
    title: "Movies-Mate",
    description: "A modern movie discovery platform built with Next.js, Supabase, and the TMDB API.",
    tags: ["Next.js", "Supabase"],
    link: "https://moviesmate-three.vercel.app/",
    images: [
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1746107773/moviesmate-home_uqapex.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1746107776/moviesmate-home2_smadlz.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1746107775/moviesmate-movie_t620rz.png"
    ],
    featured: true
  },
  {
    title: "Gradific",
    description: "AI-powered grading tool for teachers and lecturers developed with Next.js and TypeScript.",
    tags: ["Next.js", "TypeScript"],
    link: "https://gradific.com/",
    images: [
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758037/gradific-home_vc4qau.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758063/gradific-signup_pxn16q.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1745758035/gradific-dashboard_x2ug9n.png",
    ],
  },
  {
    title: "AI-Translator",
    description: "Smart translation and summarization tool built using React and Chrome AI APIs.",
    tags: ["React", "Chrome APIs"],
    link: "https://basii199.github.io/ai-translator/",
    images: ["https://res.cloudinary.com/dj5wh1pcv/image/upload/v1746106667/ai-translate-home_mtves5.png"],
  },
  {
    title: "Weather App",
    description: "Minimalist real-time weather application developed with React and Weather API.",
    tags: ["React", "Weather API"],
    link: "https://basii199.github.io/Weather-app/",
    images: [
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1746106667/weather-app2_bu2rab.png",
      "https://res.cloudinary.com/dj5wh1pcv/image/upload/v1746106667/weather-app1_yaandb.png"
    ],
  },
  /* {
    title: "AIO-Gle",
    description: "AI-powered search engine and information summarizer built with Next.js, Redux, and TypeScript.",
    tags: ["Next.js", "Redux", "TypeScript"],
    link: "#",
    images: ["https://res.cloudinary.com/dj5wh1pcv/image/upload/sample.jpg"],
  },
  {
    title: "Cash Hub",
    description: "AI-driven savings and budgeting platform built with Next.js, TypeScript, and Redux.",
    tags: ["Next.js", "TypeScript", "Redux"],
    link: "#",
    images: ["https://res.cloudinary.com/dj5wh1pcv/image/upload/sample.jpg"],
  } */
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