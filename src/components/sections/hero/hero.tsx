"use client";

import { motion } from "framer-motion";
import { Button } from "../../ui/button";
import { ArrowDownRight } from "lucide-react";

export function Hero() {
  return (
    <section className='relative overflow-hidden py-24 sm:py-28'>
      {/* gradient background glow */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]' />
      </div>

      <div className='relative mx-auto max-w-6xl px-6'>
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='text-center lg:text-left'
          >
            {/* badge */}
            <div className='mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur'>
              Frontend Engineer • 3+ years experience
            </div>

            {/* heading */}
            <h1 className='mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl'>
              Building scalable{" "}
              <span className='bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent'>
                real-time web applications
              </span>
            </h1>

            {/* subtitle */}
            <p className='mx-auto mb-8 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg lg:mx-0'>
              Specialized in React, Next.js, and WebSocket systems. Focused on
              performance, clean architecture, and delivering reliable user
              experiences.
            </p>

            {/* CTA */}
            <div className='flex flex-col items-center gap-4 sm:flex-row lg:items-start'>
              <Button
                size='lg'
                className='w-full sm:w-auto bg-indigo-500 text-white hover:bg-indigo-600'
                asChild
              >
                <a href='#projects'>
                  View Projects
                  <ArrowDownRight className='ml-2 h-4 w-4' />
                </a>
              </Button>

              <Button
                size='lg'
                variant='outline'
                className='w-full sm:w-auto border-white/15 bg-white/5 text-white hover:bg-white/10'
                asChild
              >
                <a
                  href='/DoThiThao-Frontend-CV.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className='relative mx-auto hidden h-[360px] w-full max-w-[460px] lg:block'
          >
            {/* glass card */}
            <div className='absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl' />

            {/* animated gradient blob */}
            <motion.div
              animate={{
                x: [0, 20, -10, 0],
                y: [0, -20, 10, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className='absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500/40 via-cyan-400/40 to-purple-500/40 blur-2xl'
            />

            {/* subtle grid overlay */}
            <div className='pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]' />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
