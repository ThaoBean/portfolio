import { Contact } from "../components/sections/contact/contact";
import { ExperienceTimeline } from "../components/sections/experience/experience-timeline";
import { FeaturedProjects } from "../components/sections/featured-projects";
import { Hero } from "../components/sections/hero/hero";
import { Skills } from "../components/sections/skills/skills";

export default function HomePage() {
  return (
    <main className='min-h-screen bg-[#0B0F19] text-white'>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <ExperienceTimeline />
      <Contact />
    </main>
  );
}
