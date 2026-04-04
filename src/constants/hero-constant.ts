// ── Types ────────────────────────────────────────────────────────────────────

export type TokenType = "keyword" | "fn" | "param" | "type" | "num" | "plain";

export interface Token {
  text: string;
  type: TokenType;
}

export interface CodeLine {
  tokens: Token[];
}

export interface CharMeta {
  char: string;
  colorClass: string;
  lineIndex: number;
}

// ── Typewriter config ────────────────────────────────────────────────────────

export const TYPING_SPEED_MS = 30; // ms per character — lower = faster
export const PAUSE_AFTER_MS = 1800;
export const DELAY_START_MS = 600;

// ── Syntax colors ────────────────────────────────────────────────────────────

export const TOKEN_COLORS: Record<TokenType, string> = {
  keyword: "text-rose-400",
  fn: "text-violet-400",
  param: "text-orange-300",
  type: "text-cyan-400",
  num: "text-amber-300",
  plain: "text-slate-300",
};

// ── Code content ─────────────────────────────────────────────────────────────

export const CODE_LINES: CodeLine[] = [
  {
    tokens: [
      { text: "const ", type: "keyword" },
      { text: "useRealtime", type: "fn" },
      { text: " = (", type: "plain" },
      { text: "url", type: "param" },
      { text: ": ", type: "plain" },
      { text: "string", type: "type" },
      { text: ") => {", type: "plain" },
    ],
  },
  {
    tokens: [
      { text: "  const ", type: "keyword" },
      { text: "[data, setData]", type: "plain" },
      { text: " = useState", type: "fn" },
      { text: "<", type: "plain" },
      { text: "Message[]", type: "type" },
      { text: ">(", type: "plain" },
      { text: "[]", type: "num" },
      { text: ");", type: "plain" },
    ],
  },
  {
    tokens: [
      { text: "  const ", type: "keyword" },
      { text: "wsRef", type: "plain" },
      { text: " = useRef", type: "fn" },
      { text: "<", type: "plain" },
      { text: "WebSocket", type: "type" },
      { text: " | ", type: "plain" },
      { text: "null", type: "keyword" },
      { text: ">(", type: "plain" },
      { text: "null", type: "keyword" },
      { text: ");", type: "plain" },
    ],
  },
  { tokens: [{ text: "", type: "plain" }] },
  {
    tokens: [
      { text: "  useEffect", type: "fn" },
      { text: "(() => {", type: "plain" },
    ],
  },
  {
    tokens: [
      { text: "    const ", type: "keyword" },
      { text: "ws", type: "plain" },
      { text: " = ", type: "plain" },
      { text: "new ", type: "keyword" },
      { text: "WebSocket", type: "type" },
      { text: "(url);", type: "plain" },
    ],
  },
  {
    tokens: [
      { text: "    ws.", type: "plain" },
      { text: "onmessage", type: "fn" },
      { text: " = (", type: "plain" },
      { text: "e", type: "param" },
      { text: ") => {", type: "plain" },
    ],
  },
  {
    tokens: [
      { text: "      setData", type: "fn" },
      { text: "(", type: "plain" },
      { text: "prev", type: "param" },
      { text: " => [...", type: "plain" },
      { text: "prev", type: "param" },
      { text: ", JSON", type: "plain" },
      { text: ".parse(", type: "plain" },
      { text: "e", type: "param" },
      { text: ".data)]);", type: "plain" },
    ],
  },
  { tokens: [{ text: "    };", type: "plain" }] },
  {
    tokens: [
      { text: "    wsRef", type: "plain" },
      { text: ".current", type: "plain" },
      { text: " = ws;", type: "plain" },
    ],
  },
  {
    tokens: [
      { text: "    ", type: "plain" },
      { text: "return ", type: "keyword" },
      { text: "() => ws", type: "plain" },
      { text: ".close", type: "fn" },
      { text: "();", type: "plain" },
    ],
  },
  { tokens: [{ text: "  }, [url]);", type: "plain" }] },
  { tokens: [{ text: "", type: "plain" }] },
  {
    tokens: [
      { text: "  return ", type: "keyword" },
      { text: "{ data, wsRef };", type: "plain" },
    ],
  },
  { tokens: [{ text: "};", type: "plain" }] },
];

// ── Build flat char stream ────────────────────────────────────────────────────

export function buildCharStream(): CharMeta[] {
  const stream: CharMeta[] = [];
  CODE_LINES.forEach((line, lineIndex) => {
    line.tokens.forEach(({ text, type }) => {
      for (const char of text) {
        stream.push({ char, colorClass: TOKEN_COLORS[type], lineIndex });
      }
    });
    stream.push({ char: "\n", colorClass: "", lineIndex });
  });
  return stream;
}

export const CHAR_STREAM = buildCharStream();
