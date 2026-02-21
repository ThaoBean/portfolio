import { PROJECTS_NAME } from "./constants";

export const PROJECTS = [
  {
    id: PROJECTS_NAME.CENTAMESS,
    featured: true,
    title: "Centamess — Omnichannel Customer Platform",
    description:
      "Built a real-time customer care platform supporting multi-channel messaging, live chat, and sales management with WebSocket-powered communication.",
    tags: ["React", "Next.js", "NestJS", "WebSocket", "Tailwind"],
    imageUrl: "/projects/centamess.jpg",
    liveUrl: "https://centamess.com",
  },

  {
    id: PROJECTS_NAME.OUTLIER_AI,
    featured: true,
    title: "Outlier AI — Prompt Engineering Platform",
    description:
      "Developed and enhanced advanced generative AI models by creating high-quality training data and refining prompts to improve accuracy and contextual understanding.",
    tags: ["JavaScript", "Prompt Engineering", "AI Training"],
    imageUrl: "/projects/outlier.jpg",
    liveUrl: "",
  },
  {
    id: PROJECTS_NAME.WEBATUS,
    featured: true,
    title: "WebATUS — Indra Avitech",
    description:
      "Developed frontend microservices for managing flight schedules and real-time status updates, focusing on system reliability and scalability.",
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
    id: PROJECTS_NAME.BARBAARD,
    featured: true,
    title: "House of Barbaard — Mobile Booking App",
    description:
      "Developed and maintained a mobile application for booking haircuts and grooming services, focusing on usability and stable performance[cite: 45, 47].",
    tags: ["TypeScript", "ReactNative", "Native-base", "RESTful API"],
    imageUrl: "/projects/barbaard.jpg",
    liveUrl: "",
  },
];
