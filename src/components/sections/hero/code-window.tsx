"use client";

import { CODE_LINES } from "@/src/constants";
import { useTypewriter } from "@/src/hooks";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// ── Blinking cursor ───────────────────────────────────────────────────────────

function Cursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.45, 0.5, 1] }}
      className='inline-block h-[1.1em] w-[2px] translate-y-[2px] bg-indigo-400 align-middle'
    />
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function CodeWindow() {
  const { lines, currentLineIndex, isFinished } = useTypewriter();

  // Ref on the scrollable code body
  const scrollRef = useRef<HTMLDivElement>(null);
  // Ref on the cursor row
  const cursorRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    const cursor = cursorRowRef.current;
    if (!container || !cursor) return;

    // Position of cursor row relative to the scrollable container
    const rowTop = cursor.offsetTop;
    const rowBottom = rowTop + cursor.offsetHeight;

    const visibleTop = container.scrollTop;
    const visibleBottom = container.scrollTop + container.clientHeight;

    // Adjust container.scrollTop only — never touches window.scrollY
    if (rowBottom > visibleBottom) {
      container.scrollTop = rowBottom - container.clientHeight;
    } else if (rowTop < visibleTop) {
      container.scrollTop = rowTop;
    }
  }, [currentLineIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className='relative mx-auto hidden w-full max-w-[500px] lg:block'
    >
      {/* Outer glow */}
      <div className='pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-indigo-500/10 blur-2xl' />

      {/* Window chrome — fixed height via h-[360px], flex-col to let body fill */}
      <div className='flex h-[360px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-2xl'>
        {/* Title bar — fixed, never scrolls */}
        <div className='flex shrink-0 items-center gap-2 border-b border-white/[0.06] bg-[#161b22] px-4 py-3'>
          <span className='h-3 w-3 rounded-full bg-[#ff5f57]' />
          <span className='h-3 w-3 rounded-full bg-[#febc2e]' />
          <span className='h-3 w-3 rounded-full bg-[#28c840]' />
          <span className='ml-3 font-mono text-xs text-slate-500'>
            useRealtime.ts
          </span>
        </div>

        {/* Code body — scrollable, no scrollbar visible */}
        <div
          ref={scrollRef}
          className='flex-1 overflow-y-auto overflow-x-auto p-5 font-mono text-[13px] leading-[1.75] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden whitespace-pre'
        >
          {CODE_LINES.map((_, lineIdx) => {
            const renderedChars = lines[lineIdx]?.chars ?? [];
            const isCurrent = lineIdx === currentLineIndex && !isFinished;

            // Hide lines not yet reached
            if (lineIdx > currentLineIndex && !isFinished) return null;

            return (
              <div
                key={lineIdx}
                // Attach cursorRowRef to whichever line is active
                ref={isCurrent ? cursorRowRef : undefined}
                className='flex'
              >
                {/* Line number */}
                <span className='mr-5 w-5 shrink-0 select-none text-right text-slate-600'>
                  {lineIdx + 1}
                </span>

                {/* Chars + cursor */}
                <span>
                  {renderedChars.map((c, ci) => (
                    <span key={ci} className={c.colorClass}>
                      {c.char}
                    </span>
                  ))}
                  {isCurrent && <Cursor />}
                </span>
              </div>
            );
          })}

          {/* Cursor after last line when finished */}
          {isFinished && (
            <div ref={cursorRowRef} className='flex'>
              <span className='mr-5 w-5 shrink-0 select-none text-slate-600' />
              <Cursor />
            </div>
          )}
        </div>

        {/* Status bar — fixed, never scrolls */}
        <div className='flex shrink-0 items-center justify-between border-t border-white/[0.06] bg-[#161b22] px-4 py-2 font-mono text-[11px] text-slate-500'>
          <span>TypeScript</span>
          <span className='flex items-center gap-1.5'>
            <span className='h-1.5 w-1.5 rounded-full bg-emerald-400' />
            No errors
          </span>
        </div>
      </div>
    </motion.div>
  );
}
