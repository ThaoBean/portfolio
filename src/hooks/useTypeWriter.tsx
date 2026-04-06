import { useEffect, useState } from "react";
import {
  CHAR_STREAM,
  CODE_LINES,
  DELAY_START_MS,
  PAUSE_AFTER_MS,
  TYPING_SPEED_MS,
} from "../constants";

export interface TypewriterState {
  /** Rendered chars per line */
  lines: { chars: { char: string; colorClass: string }[] }[];
  /** Index of the line currently being typed */
  currentLineIndex: number;
  /** True once all chars have been typed */
  isFinished: boolean;
}

export function useTypewriter(): TypewriterState {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let frame: ReturnType<typeof setTimeout>;
    let charIndex = 0;
    let active = true;

    const tick = () => {
      if (!active) return;

      if (charIndex < CHAR_STREAM.length) {
        charIndex++;
        setVisibleCount(charIndex);
        frame = setTimeout(tick, TYPING_SPEED_MS);
      } else {
        frame = setTimeout(() => {
          charIndex = 0;
          setVisibleCount(0);
          frame = setTimeout(tick, 200);
        }, PAUSE_AFTER_MS);
      }
    };

    frame = setTimeout(tick, DELAY_START_MS);
    return () => {
      active = false;
      clearTimeout(frame);
    };
  }, []);

  // Reconstruct per-line char arrays from flat stream
  const lines: TypewriterState["lines"] = CODE_LINES.map(() => ({ chars: [] }));
  let count = 0;
  for (const meta of CHAR_STREAM) {
    if (count >= visibleCount) break;
    if (meta.char !== "\n") {
      lines[meta.lineIndex].chars.push({
        char: meta.char,
        colorClass: meta.colorClass,
      });
    }
    count++;
  }

  // Derive which line the cursor is on
  let currentLineIndex = 0;
  let c = 0;
  for (const meta of CHAR_STREAM) {
    if (c >= visibleCount) break;
    currentLineIndex = meta.lineIndex;
    c++;
  }

  return {
    lines,
    currentLineIndex,
    isFinished: visibleCount >= CHAR_STREAM.length,
  };
}
