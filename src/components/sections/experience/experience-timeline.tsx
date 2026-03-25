"use client";

import { EXPERIENCES } from "@/src/db/experience";
import { motion } from "framer-motion";

export function ExperienceTimeline() {
  return (
    <section id='experience' className='py-24 sm:py-28'>
      <div className='mx-auto max-w-6xl px-6'>
        {/* header */}
        <div className='mb-16'>
          <h2 className='text-2xl font-semibold text-white sm:text-3xl'>
            Experience
          </h2>
          <p className='mt-3 max-w-2xl text-gray-400'>
            My professional journey building scalable and real-time web
            applications.
          </p>
        </div>

        {/* timeline */}
        <div className='relative'>
          {/* vertical line */}
          <div className='absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2' />

          <div className='space-y-12'>
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.company + index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`
                  relative flex flex-col gap-6 md:flex-row
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >
                {/* dot */}
                <div className='absolute left-4 top-2 h-3 w-3 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.8)] md:left-1/2 md:-translate-x-1/2' />

                {/* spacer */}
                <div className='hidden md:block md:w-1/2' />

                {/* card */}
                <div className='ml-12 md:ml-0 md:w-1/2'>
                  <div
                    className='
                      rounded-2xl border border-white/10
                      bg-white/[0.04] p-6 backdrop-blur
                      transition hover:border-white/20 hover:shadow-lg hover:shadow-indigo-500/10
                    '
                  >
                    {/* company + role */}
                    <h3 className='text-lg font-semibold text-white'>
                      {exp.role}
                    </h3>
                    <p className='mt-1 text-sm text-indigo-300'>
                      {exp.company}
                    </p>

                    {/* period */}
                    <p className='mt-2 text-xs text-gray-500'>{exp.period}</p>

                    {/* description */}
                    <p className='mt-4 text-sm leading-relaxed text-gray-400'>
                      {exp.description}
                    </p>

                    {/* tech */}
                    <div className='mt-4 flex flex-wrap gap-2'>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className='rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* spacer */}
                <div className='hidden md:block md:w-1/2' />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
