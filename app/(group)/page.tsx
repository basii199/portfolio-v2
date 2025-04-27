// app/page.tsx
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { TechStack } from '@/components/tech-stack';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
    </div>
  );
}