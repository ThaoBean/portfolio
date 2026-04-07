"use client";

import { motion } from "framer-motion";
import { LayoutPanelTop, Server, Wrench } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

type SkillGroup = {
  title: string;
  skills: string[];
};

const groupIcon = (title: string) => {
  switch (title) {
    case "Frontend":
      return LayoutPanelTop;
    case "Backend":
      return Server;
    case "Testing & Tools":
      return Wrench;
    default:
      return LayoutPanelTop;
  }
};

export function Skills() {
  const { t } = useTranslation();

  const skillGroups: SkillGroup[] = useMemo(
    () => [
      {
        title: "Frontend",
        skills: [
          "ReactJs",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "Material UI",
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
          "Prisma",
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
          <p className='mt-3  text-gray-400'>
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
              <h3 className='mb-5 flex items-center gap-2 text-lg font-semibold text-indigo-300'>
                {(() => {
                  const Icon = groupIcon(group.title);
                  return (
                    <Icon
                      aria-hidden='true'
                      className='h-5 w-5 shrink-0 text-indigo-300'
                    />
                  );
                })()}
                <span>{group.title}</span>
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
