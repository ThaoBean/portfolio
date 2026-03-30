"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

type SkillGroup = {
  title: string;
  skills: string[];
};

export function Skills() {
  const { t } = useTranslation();

  const skillGroups: SkillGroup[] = useMemo(
    () => [
      {
        title: "Frontend",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "Redux Toolkit",
          "React Query",
          "Zustand",
        ],
      },
      {
        title: "Backend",
        skills: [
          "Node.js",
          "NestJS",
          "REST API",
          "WebSocket",
          "PostgreSQL",
          "MongoDB",
        ],
      },
      {
        title: "Testing & Tools",
        skills: ["Jest", "Cypress", "Git", "Postman", "Agile/Scrum"],
      },
    ],
    [],
  );

  return (
    <section id='skills' className='py-24 sm:py-28'>
      <div className='mx-auto max-w-6xl px-6'>
        {/* header */}
        <div className='mb-14'>
          <h2 className='text-2xl font-semibold text-white sm:text-3xl'>
            {t("sections.skills.title")}
          </h2>
          <p className='mt-3 max-w-2xl text-gray-400'>
            {t("sections.skills.description")}
          </p>
        </div>

        {/* groups */}
        <div className='grid gap-10 md:grid-cols-3'>
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className='rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur'
            >
              {/* group title */}
              <h3 className='mb-5 text-lg font-semibold text-indigo-300'>
                {group.title}
              </h3>

              {/* cloud */}
              <div className='flex flex-wrap gap-2'>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className='
                      rounded-lg border border-white/10
                      bg-white/5 px-3 py-1.5
                      text-sm text-gray-300
                      transition
                      hover:border-indigo-400/40
                      hover:bg-indigo-500/10
                      hover:text-white
                    '
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
