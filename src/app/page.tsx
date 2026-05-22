// import { About } from "../components/sections/about/about";
// import { Contact } from "../components/sections/contact/contact";
// import { ExperienceTimeline } from "../components/sections/experience/experience-timeline";
// import { FeaturedProjects } from "../components/sections/featured-projects";
// import { Hero } from "../components/sections/hero";
// import { Skills } from "../components/sections/skills/skills";

export default function HomePage() {
  return (
    <main className='min-h-screen bg-[#0B0F19] px-6 text-white'>
      <div className='flex min-h-screen flex-col items-center justify-center text-center'>
        <h1 className='mb-4 text-4xl font-semibold text-white md:text-5xl'>
          This page is under maintenance
        </h1>
        <p className='max-w-xl text-base leading-7 text-slate-300 md:text-lg'>
          I’m currently updating this page.
        </p>
      </div>
    </main>
    // <main className='min-h-screen bg-[#0B0F19] text-white'>
    //   <Hero />
    //   <About />
    //   <FeaturedProjects />
    //   <Skills />
    //   <ExperienceTimeline />
    //   <Contact />
    // </main>
  );
}
