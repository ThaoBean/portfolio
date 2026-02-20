import { ProjectCard } from "./project-card";

export function FeaturedProjects() {
  return (
    <section id='projects' className='py-24 sm:py-28'>
      <div className='mx-auto max-w-6xl px-6'>
        {/* section title */}
        <div className='mb-12'>
          <h2 className='text-2xl font-semibold text-white sm:text-3xl'>
            Featured Projects
          </h2>
          <p className='mt-3 max-w-2xl text-gray-400'>
            Selected work focused on real-time systems, scalable UI, and
            production-ready architecture.
          </p>
        </div>

        {/* project grid */}
        <div className='grid gap-6 md:grid-cols-2'>
          <ProjectCard
            featured
            title='Centamess — Omnichannel Customer Platform'
            description='Built a real-time customer care platform supporting multi-channel messaging, live chat, and sales management with WebSocket-powered communication.'
            tags={["React", "Next.js", "NestJS", "WebSocket", "Tailwind"]}
            imageUrl='/projects/centamess.jpg'
            liveUrl='https://centamess.com'
          />
        </div>
      </div>
    </section>
  );
}
