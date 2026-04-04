"use client";

import { CodeWindow } from "./code-window";
import { HeroContent } from "./hero-content";

export function Hero() {
  return (
    <section className='relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden'>
      {/* gradient background glow */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]' />
      </div>

      <div className='relative mx-auto w-full max-w-6xl px-6 py-12'>
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          {/* LEFT CONTENT */}
          <HeroContent />

          {/* RIGHT VISUAL */}
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}
