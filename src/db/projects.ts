import { PROJECTS_NAME } from "./constants";

export const PROJECTS = [
  {
    id: PROJECTS_NAME.CENTAMESS,
    featured: true,
    title: "Centamess — Omnichannel Customer Platform",
    description:
      "Built a real-time omnichannel customer care platform centralizing messaging from Facebook, Telegram, Instagram, and LINE into a single inbox, with AI-powered chatbot and integrated order management.",
    tags: ["React", "Next.js", "NestJS", "WebSocket", "Tailwind"],
    imageUrl: "/projects/centamess.jpg",
    liveUrl: "https://centamess.com",
  },
  {
    id: PROJECTS_NAME.OUTLIER_AI,
    featured: true,
    title: "Outlier AI — Prompt & JavaScript Engineering",
    description:
      "Designed JavaScript prompts and evaluated model outputs to improve generative AI model quality through structured human feedback (RLHF) for Outlier AI.",
    tags: ["JavaScript", "Prompt Engineering", "AI Training", "RLHF"],
    imageUrl: "/projects/outlier.jpg",
    liveUrl: "",
  },
  {
    id: PROJECTS_NAME.WEBATUS,
    featured: true,
    title: "WebATUS — Indra Avitech",
    description:
      "Developed frontend modules for a large-scale flight schedule management and real-time status tracking system for an international aviation client, including a full Ant Design v4 → v5 migration.",
    tags: [
      "ReactJS",
      "TypeScript",
      "Ant Design",
      "Redux Toolkit",
      "WebSocket",
      "Jest",
      "Cypress",
    ],
    imageUrl: "/projects/indra_avitech.jpeg",
    liveUrl: "",
  },
  {
    id: PROJECTS_NAME.PROWO,
    featured: true,
    title: "Prowo — Task Management Application",
    description:
      "Built a Kanban-style task management app for a German client, featuring drag-and-drop board interactions, real-time task updates, and in-app file preview supporting PDF, TXT, and image formats.",
    tags: ["ReactJS", "TypeScript", "@hello-pangea/dnd", "RESTful API", "Jest"],
    imageUrl: "",
    liveUrl: "",
  },
  {
    id: PROJECTS_NAME.BARBAARD,
    featured: true,
    title: "House of Barbaard — Mobile Booking App",
    description:
      "Developed and maintained a React Native mobile booking app for a premium grooming service brand, focusing on UX stability, API integration, and fast feature delivery.",
    tags: ["React Native", "TypeScript", "NativeBase", "RESTful API"],
    imageUrl: "/projects/barbaard.jpg",
    liveUrl: "",
  },
];
