import { PROJECTS_NAME } from "./constants";

export const DETAILED_PROJECTS = {
  [PROJECTS_NAME.CENTAMESS]: {
    id: PROJECTS_NAME.CENTAMESS,
    title: "Centamess — Omnichannel Customer Platform",
    overview: [
      "An omnichannel customer care platform centralizing real-time interactions from Facebook, Telegram, Instagram, LINE, and a proprietary live chat widget into a single inbox, with integrated order management and carrier support.",
      "Built as a full-stack product with a focus on low-latency WebSocket communication, scalable message routing architecture, and AI-powered automation for customer interactions.",
    ],
    projectInfo: {
      company: "MTT Software",
      client: "MTT Software",
      isOutsourced: false,
      role: "Full-Stack Developer",
      duration: "Jan 2025 — Present",
      teamSize: "6 members",
    },
    contributions: [
      "Built an omnichannel customer care platform supporting real-time messaging across Telegram, Facebook, Instagram, and LINE using WebSocket for low-latency communication.",
      "Integrated OpenAI API with a custom knowledge base to build a domain-specific chatbot, automating responses to common customer inquiries.",
      "Standardized a reusable component system (20+ components) by customizing shadcn/ui with ReactJS and Tailwind CSS, ensuring consistent UI patterns across modules.",
      "Designed and implemented bi-directional message routing with NestJS — receiving inbound messages via webhooks, persisting to the database, and broadcasting to the frontend in real-time via WebSocket.",
      "Built a NestJS service to capture Facebook Livestream comments in real-time and automatically classify purchase-intent messages for order processing.",
      "Developed a data migration pipeline from Sapo, importing warehouse inventory, customer records, products, and orders into the platform's database.",
      "Integrated carrier methods (Viettel POST, GHN) for order fulfillment support.",
      "Built a multi-tenant embeddable live chat widget as a self-contained JavaScript bundle — each registered merchant receives a unique ID to inject the widget into their website.",
      "Participated in sprint planning and code reviews within an Agile/Scrum team.",
    ],
    tags: [
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
    imageUrl: "/projects/centamess.jpg",
  },

  [PROJECTS_NAME.OUTLIER_AI]: {
    id: PROJECTS_NAME.OUTLIER_AI,
    title: "Outlier AI — Prompt & JavaScript Engineering",
    overview: [
      "A contract engagement with Outlier AI focused on improving the quality and reliability of generative AI models through structured human feedback and expert prompt engineering.",
      "Worked as a JavaScript specialist to evaluate model outputs, design edge-case prompts, and provide ground truth corrections as part of a reinforcement learning from human feedback (RLHF) pipeline.",
    ],
    projectInfo: {
      company: "MTT Software",
      client: "Outlier AI",
      isOutsourced: true,
      role: "Prompt & JavaScript Engineer",
      duration: "Aug 2024 — Dec 2024",
      teamSize: "Contract",
    },
    contributions: [
      "Designed JavaScript prompts to evaluate model capabilities across edge cases and language patterns.",
      "Assessed model outputs against Outlier's quality rubric — rating responses for accuracy, conciseness, and clarity.",
      "Provided corrected responses as ground truth data to improve model behavior through human feedback loops.",
    ],
    tags: ["JavaScript", "Prompt Engineering", "RLHF", "AI Training"],
    imageUrl: "/projects/outlier.jpg",
  },

  [PROJECTS_NAME.WEBATUS]: {
    id: PROJECTS_NAME.WEBATUS,
    title: "WebATUS — Indra Avitech",
    overview: [
      "A large-scale flight schedule management and real-time status tracking system built for an international aviation client (Indra Avitech), serving complex operational workflows across multiple frontend modules.",
      "The project demanded high reliability under high-frequency data updates, strict UI consistency, and a full migration from Ant Design v4 to v5's CSS-in-JS Design Token architecture.",
    ],
    projectInfo: {
      company: "MTT Software",
      client: "Indra Avitech",
      isOutsourced: true,
      role: "Frontend Developer",
      duration: "Jan 2023 — Mar 2024",
      teamSize: "Agile team",
    },
    contributions: [
      "Developed frontend modules for flight schedule management and real-time status updates within a large-scale modular React application.",
      "Integrated WebSocket communication for live flight status syncing, ensuring system reliability under high-frequency data updates.",
      "Migrated the entire application from Ant Design v4 to v5, adapting all custom styles and themes from the Less variable system to the new CSS-in-JS Design Token architecture.",
      "Wrote and maintained automated test suites with Jest (unit) and Cypress (E2E), improving system reliability and reducing regression bugs.",
      "Updated major library versions to keep the codebase aligned with the latest technology standards.",
    ],
    tags: [
      "ReactJS",
      "TypeScript",
      "Ant Design",
      "Redux Toolkit",
      "WebSocket",
      "RESTful API",
      "Jest",
      "Cypress",
    ],
    imageUrl: "/projects/indra_avitech.jpeg",
  },

  [PROJECTS_NAME.PROWO]: {
    id: PROJECTS_NAME.PROWO,
    title: "Prowo — Task Management Application",
    overview: [
      "A department and employee task management application built for a German client, designed to streamline team workflows through an intuitive Kanban-style board with drag-and-drop interaction.",
      "Focused on delivering a smooth and reliable user experience with real-time board updates, in-app file previewing, and unit-tested components for production stability.",
    ],
    projectInfo: {
      company: "MTT Software",
      client: "Mission Digitalisierung GmbH",
      isOutsourced: true,
      role: "Frontend Developer",
      duration: "Apr 2024 — Aug 2024",
      teamSize: "Agile team",
    },
    contributions: [
      "Built a Kanban-style task board with drag-and-drop support using @hello-pangea/dnd — supporting card reordering within columns, cross-column card movement, and column reordering.",
      "Integrated RESTful APIs to fetch board data and update task status in real-time upon drag-and-drop interactions.",
      "Implemented an in-app file preview feature supporting multiple formats (PDF, TXT, images) without leaving the application.",
      "Developed unit tests to ensure component reliability and code quality.",
    ],
    tags: ["ReactJS", "TypeScript", "@hello-pangea/dnd", "RESTful API", "Jest"],
    imageUrl: "/projects/prowo.jpg",
  },

  [PROJECTS_NAME.BARBAARD]: {
    id: PROJECTS_NAME.BARBAARD,
    title: "House of Barbaard — Mobile Booking App",
    overview: [
      "A React Native mobile booking application for House of Barbaard, a premium grooming service brand, enabling customers to browse services and book appointments directly from their phones.",
      "Focused on UX stability, smooth API integration, and fast feature delivery in an outsourcing environment with direct client requirements.",
    ],
    projectInfo: {
      company: "MTT Software",
      client: "Connecta",
      isOutsourced: true,
      role: "Frontend Developer",
      duration: "Jun 2022 — Dec 2022",
      teamSize: "Outsource team",
    },
    contributions: [
      "Developed and maintained a React Native mobile booking app for grooming services, improving UX stability and performance.",
      "Integrated RESTful APIs and handled data synchronization with backend services.",
      "Implemented new features and resolved bugs based on client requirements in a fast-paced outsourcing environment.",
    ],
    tags: ["React Native", "TypeScript", "NativeBase", "RESTful API"],
    imageUrl: "/projects/barbaard.jpg",
  },
};
