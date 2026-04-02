"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { User } from "lucide-react";
import { aboutMe } from "../../../db/about-me";

export function About() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "en" | "vi";

  return (
    <section id='about' className='relative py-24 sm:py-32'>
      {/* gradient backgrounds */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[100px]' />
        <div className='absolute right-0 top-2/3 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]' />
      </div>

      <div className='relative mx-auto max-w-6xl px-6'>
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='mb-16'
        >
          <p className='mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-400'>
            {t("sections.about.label")}
          </p>
          <h2 className='text-3xl font-bold text-white sm:text-4xl'>
            {t("sections.about.title")}
            <span className='ml-3 text-indigo-400'>
              {t("sections.about.titleHighlight")}
            </span>
          </h2>
        </motion.div>

        {/* main content: image + text */}
        <div className='grid gap-12 lg:grid-cols-[360px_1fr] lg:gap-16'>
          {/* left: profile section */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='space-y-6'
          >
            {/* image placeholder */}
            <div className='relative'>
              <div className='aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur'>
                <div className='flex h-full items-center justify-center'>
                  <User className='h-32 w-32 text-white/20' />
                </div>
              </div>
              {/* image gradient overlay */}
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent' />
            </div>

            {/* profile badge */}
            <div className='space-y-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur'>
              <div className='flex items-center gap-2'>
                <div className='h-2 w-2 rounded-full bg-green-400' />
                <p className='font-semibold text-white'>
                  {aboutMe.profileName[currentLang]}
                </p>
              </div>
              <p className='text-sm text-gray-400'>
                {aboutMe.profileRole[currentLang]}
              </p>
            </div>

            {/* hobby tags */}
            {/* <div className='flex flex-wrap gap-2'>
              {aboutMe.hobbies.map((hobby) => (
                <motion.div
                  key={hobby[currentLang]}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className='rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-gray-300 backdrop-blur hover:bg-white/[0.08] transition'
                >
                  {hobby[currentLang]}
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          {/* right: description section */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='space-y-6'
          >
            {/* description paragraphs */}
            <div className='space-y-4 prose prose-invert max-w-none'>
              {aboutMe.description.map((desc, index) => (
                <p
                  key={index}
                  className='text-base leading-relaxed text-gray-300'
                  dangerouslySetInnerHTML={{
                    __html: desc[currentLang],
                  }}
                />
              ))}
            </div>

            {/* stats cards */}
            <div className='grid grid-cols-3 gap-4 pt-4'>
              {aboutMe.stats.map((stat, index) => (
                <motion.div
                  key={stat.label[currentLang]}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition hover:bg-white/[0.08]'
                >
                  <p className='text-2xl font-bold text-indigo-400'>
                    {stat.value}
                  </p>
                  <p className='mt-1 text-xs font-medium text-gray-400'>
                    {stat.label[currentLang]}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* "Where I'm headed" section */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className='mt-5 rounded-xl border border-white/10 border-l-4 border-l-indigo-400 bg-white/[0.04] p-6 backdrop-blur md:p-8'
            >
              <p className='mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-400'>
                {t("sections.about.futureLabel")}
              </p>
              <p
                className='text-base leading-relaxed text-gray-300'
                dangerouslySetInnerHTML={{
                  __html: aboutMe.future.description[currentLang],
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
