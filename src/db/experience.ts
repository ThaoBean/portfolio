type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "MTT Software",
    role: "Full-Stack Developer",
    period: "01/2025 — Present",
    description:
      "Built an omnichannel customer care platform centralizing real-time messaging across Facebook, Telegram, Instagram, and LINE. Integrated OpenAI API for a domain-specific chatbot, implemented bi-directional message routing with NestJS and WebSocket, and built a multi-tenant embeddable live chat widget.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "WebSocket",
      "Tailwind",
      "shadcn/ui",
      "React Query",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    company: "MTT Software x Outlier AI",
    role: "Prompt & JavaScript Engineer",
    period: "08/2024 — 12/2024",
    description:
      "Designed JavaScript prompts to evaluate model capabilities across edge cases, assessed model outputs against quality rubrics for accuracy and clarity, and provided ground truth corrections to improve AI model behavior through RLHF pipelines.",
    technologies: ["JavaScript", "Prompt Engineering", "RLHF"],
  },
  {
    company: "MTT Software x Mission Digitalisierung GmbH",
    role: "Frontend Developer",
    period: "04/2024 — 08/2024",
    description:
      "Built a Kanban-style task board with drag-and-drop support for card and column reordering, integrated RESTful APIs for real-time task updates, implemented in-app file preview for PDF, TXT, and images, and wrote unit tests with Jest.",
    technologies: [
      "ReactJS",
      "TypeScript",
      "@hello-pangea/dnd",
      "RESTful API",
      "Jest",
    ],
  },
  {
    company: "MTT Software x Mission Digitalisierung GmbH",
    role: "Frontend Developer",
    period: "01/2023 — 03/2024",
    description:
      "Developed frontend modules for a large-scale flight schedule management and real-time status tracking system for an international aviation client. Migrated the entire app from Ant Design v4 to v5 CSS-in-JS Design Token architecture, and maintained Jest unit and Cypress E2E test suites.",
    technologies: [
      "ReactJS",
      "TypeScript",
      "Ant Design",
      "Redux Toolkit",
      "WebSocket",
      "RESTful API",
      "Jest",
      "Cypress",
    ],
  },
  {
    company: "MTT Software x Connecta",
    role: "Frontend Developer",
    period: "06/2022 — 12/2022",
    description:
      "Developed and maintained a React Native mobile booking app for a premium grooming service brand, integrated RESTful APIs with backend data synchronization, and delivered new features in a fast-paced outsourcing environment.",
    technologies: ["React Native", "TypeScript", "NativeBase", "RESTful API"],
  },
];
