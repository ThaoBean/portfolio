import { PROJECTS_NAME } from "./constants";

export type TranslatedText = {
  en: string;
  vi: string;
};

export const PROJECTS = [
  {
    id: PROJECTS_NAME.CENTAMESS,
    featured: true,
    title: {
      en: "Centamess — Omnichannel Customer Platform",
      vi: "Centamess — Nền tảng Chăm sóc Khách hàng Đa kênh",
    },
    description: {
      en: "Built a real-time omnichannel customer care platform centralizing messaging from Facebook, Telegram, Instagram, and LINE into a single inbox, with AI-powered chatbot and integrated order management.",
      vi: "Xây dựng nền tảng chăm sóc khách hàng đa kênh thời gian thực, tập trung tin nhắn từ Facebook, Telegram, Instagram và LINE vào một hộp thư duy nhất — tích hợp chatbot AI và quản lý đơn hàng.",
    },
    tags: ["React", "Next.js", "NestJS", "WebSocket", "Tailwind"],
    imageUrl: "/projects/centamess.png",
    liveUrl: "https://centamess.com",
  },
  {
    id: PROJECTS_NAME.OUTLIER_AI,
    featured: true,
    title: {
      en: "Outlier AI — Prompt & JavaScript Engineering",
      vi: "Outlier AI — Kỹ sư Prompt & JavaScript",
    },
    description: {
      en: "Designed JavaScript prompts and evaluated model outputs to improve generative AI model quality through structured human feedback (RLHF) for Outlier AI.",
      vi: "Thiết kế prompt JavaScript và đánh giá kết quả mô hình để cải thiện chất lượng mô hình AI tạo sinh thông qua phản hồi của con người có cấu trúc (RLHF) cho Outlier AI.",
    },
    tags: ["JavaScript", "Prompt Engineering", "AI Training", "RLHF"],
    imageUrl: "/projects/outlier.jpg",
    liveUrl: "",
  },
  {
    id: PROJECTS_NAME.WEBATUS,
    featured: true,
    title: {
      en: "WebATUS — Indra Avitech",
      vi: "WebATUS — Indra Avitech",
    },
    description: {
      en: "Developed frontend modules for a large-scale flight schedule management and real-time status tracking system for an international aviation client.",
      vi: "Phát triển các module frontend cho hệ thống quản lý lịch bay và theo dõi trạng thái thời gian thực cho khách hàng trong lĩnh vực hàng không quốc tế.",
    },
    tags: [
      "ReactJS",
      "TypeScript",
      "Ant Design",
      "Redux Toolkit",
      "WebSocket",
      "Jest",
      "Cypress",
    ],
    imageUrl: "/projects/indra_avitech.png",
    liveUrl: "",
  },
  {
    id: PROJECTS_NAME.PROWO,
    featured: true,
    title: {
      en: "Prowo — Task Management Application",
      vi: "Prowo — Ứng dụng Quản lý Tác vụ",
    },
    description: {
      en: "Built a Kanban-style task management app for a German client, featuring drag-and-drop board interactions, real-time task updates, and in-app file preview supporting PDF, TXT, and image formats.",
      vi: "Xây dựng ứng dụng quản lý công việc theo phong cách Kanban cho khách hàng tại Đức, với tính năng kéo-thả trên bảng, cập nhật công việc theo thời gian thực.",
    },
    tags: ["ReactJS", "TypeScript", "@hello-pangea/dnd", "RESTful API", "Jest"],
    imageUrl: "/projects/barbaard-img.png",
    liveUrl: "",
  },
  {
    id: PROJECTS_NAME.BARBAARD,
    featured: true,
    title: {
      en: "House of Barbaard — Mobile Booking App",
      vi: "House of Barbaard — Ứng dụng Đặt lịch Di động",
    },
    description: {
      en: "Developed and maintained a React Native mobile booking app for a premium grooming service brand, focusing on UX stability, API integration, and fast feature delivery.",
      vi: "Phát triển và bảo trì ứng dụng đặt lịch cho thương hiệu dịch vụ grooming cao cấp, tập trung vào độ ổn định UX, tích hợp API.",
    },
    tags: ["React Native", "TypeScript", "NativeBase", "RESTful API"],
    imageUrl: "/projects/barbaard-img.png",
    liveUrl: "",
  },
];
