"use client";

import { motion } from "framer-motion";
import { Mail, Github, Phone, Linkedin } from "lucide-react";
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
          className='rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 text-center backdrop-blur'
        >
          {/* Badge */}
          <div className='mb-4 inline-block rounded-full bg-blue-500/10 px-3 py-1'>
            <span className='text-sm font-semibold text-blue-400 uppercase tracking-wider'>
              {t("sections.contact.connect")}
            </span>
          </div>

          <h2 className='text-2xl font-bold text-white sm:text-3xl lg:text-4xl'>
            {t("sections.contact.title")}
          </h2>

          <p className='mx-auto mt-4 max-w-2xl text-sm sm:text-base text-gray-400'>
            {t("sections.contact.description")}
          </p>

          {/* Contact Grid */}
          <div className='mx-auto mt-8 sm:mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2'>
            {/* Email */}
            <a
              href='mailto:thaobean1701@gmail.com'
              className='group rounded-2xl border border-blue-500/30 bg-blue-500/5 p-4 sm:p-6 transition hover:border-blue-500/60 hover:bg-blue-500/10'
            >
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-blue-500/20'>
                  <Mail size={20} className='text-blue-400 sm:h-6 sm:w-6' />
                </div>
                <div className='flex-1 text-left'>
                  <p className='text-xs sm:text-sm text-gray-400'>Email</p>
                  <p className='text-sm font-semibold text-white sm:text-base lg:text-lg'>
                    thaobean1701@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href='tel:0868128555'
              className='group rounded-2xl border border-green-500/30 bg-green-500/5 p-4 sm:p-6 transition hover:border-green-500/60 hover:bg-green-500/10'
            >
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-green-500/20'>
                  <Phone size={20} className='text-green-400 sm:h-6 sm:w-6' />
                </div>
                <div className='flex-1 text-left'>
                  <p className='text-xs sm:text-sm text-gray-400'>Phone</p>
                  <p className='text-sm font-semibold text-white sm:text-base lg:text-lg'>
                    +84 868 128 559
                  </p>
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href='https://github.com/ThaoBean'
              target='_blank'
              rel='noreferrer'
              className='group rounded-2xl border border-gray-500/30 bg-gray-500/5 p-4 sm:p-6 transition hover:border-gray-500/60 hover:bg-gray-500/10'
            >
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gray-500/20'>
                  <Github size={20} className='text-gray-300 sm:h-6 sm:w-6' />
                </div>
                <div className='flex-1 text-left'>
                  <p className='text-xs sm:text-sm text-gray-400'>GitHub</p>
                  <p className='text-sm font-semibold text-white sm:text-base lg:text-lg'>
                    github.com/ThaoBean
                  </p>
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href='https://www.linkedin.com/in/thaodo1701/'
              target='_blank'
              rel='noreferrer'
              className='group rounded-2xl border border-blue-400/30 bg-blue-400/5 p-4 sm:p-6 transition hover:border-blue-400/60 hover:bg-blue-400/10'
            >
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-blue-400/20'>
                  <Linkedin size={20} className='text-blue-300 sm:h-6 sm:w-6' />
                </div>
                <div className='flex-1 text-left'>
                  <p className='text-xs sm:text-sm text-gray-400'>LinkedIn</p>
                  <p className='text-sm font-semibold text-white sm:text-base lg:text-lg'>
                    linkedin.com/in/thaodo1701
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Availability Section */}
          <div className='mt-8 sm:mt-12 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center'>
            <div className='flex items-center gap-2'>
              <span className='h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-400'></span>
              <span className='text-xs sm:text-sm text-gray-400'>
                {t("sections.contact.active")}
              </span>
            </div>
            <a
              href='mailto:thaobean1701@gmail.com'
              className='rounded-full border border-green-500 bg-green-500/10 px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-green-400 transition hover:bg-green-500/20'
            >
              Open to work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
