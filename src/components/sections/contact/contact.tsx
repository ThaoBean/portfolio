"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id='contact' className='py-24 sm:py-28'>
      <div className='mx-auto max-w-4xl px-6'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur'
        >
          <h2 className='text-2xl font-semibold text-white sm:text-3xl'>
            {t("sections.contact.title")}
          </h2>

          <p className='mx-auto mt-4 max-w-xl text-gray-400'>
            {t("sections.contact.description")}
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <a
              href='mailto:thaobean1701@gmail.com'
              className='inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10'
            >
              <Mail size={18} />
              {t("common.actions.emailMe")}
            </a>

            <a
              href='https://github.com/YOUR_GITHUB'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10'
            >
              <Github size={18} />
              {t("common.actions.github")}
            </a>

            <a
              href='https://linkedin.com/in/YOUR_LINKEDIN'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10'
            >
              <Linkedin size={18} />
              {t("common.actions.linkedin")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
