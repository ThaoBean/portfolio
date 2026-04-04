type TranslatedText = {
  en: string;
  vi: string;
};

type ExperienceItem = {
  company: string;
  role: TranslatedText;
  period: TranslatedText;
  description: TranslatedText;
  technologies: string[];
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "MTT Software",
    role: {
      en: "Full-Stack Developer",
      vi: "Lập trình viên Full-Stack",
    },
    period: {
      en: "01/2025 — Present",
      vi: "01/2025 — Hiện tại",
    },
    description: {
      en: "Built an omnichannel customer care platform centralizing real-time messaging across Facebook, Telegram, Instagram, and LINE. Integrated OpenAI API for a domain-specific chatbot, implemented bi-directional message routing with NestJS and WebSocket, and built a multi-tenant embeddable live chat widget.",
      vi: "Xây dựng nền tảng chăm sóc khách hàng đa kênh, tập trung tin nhắn thời gian thực từ Facebook, Telegram, Instagram và LINE. Tích hợp OpenAI API cho chatbot chuyên biệt, triển khai luồng định tuyến tin nhắn hai chiều với NestJS và WebSocket, và xây dựng live chat widget dạng nhúng hỗ trợ multi-tenant.",
    },
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
    role: {
      en: "Prompt & JavaScript Engineer",
      vi: "Prompt & JavaScript Engineer",
    },
    period: {
      en: "08/2024 — 12/2024",
      vi: "08/2024 — 12/2024",
    },
    description: {
      en: "Designed JavaScript prompts to evaluate model capabilities across edge cases, assessed model outputs against quality rubrics for accuracy and clarity, and provided ground truth corrections to improve AI model behavior through RLHF pipelines.",
      vi: "Thiết kế các prompt JavaScript để đánh giá năng lực model trên các edge case, chấm điểm output của model theo rubric chất lượng về độ chính xác và rõ ràng, đồng thời cung cấp ground truth để cải thiện hành vi model AI thông qua pipeline RLHF.",
    },
    technologies: ["JavaScript", "Prompt Engineering", "RLHF"],
  },
  {
    company: "MTT Software x Mission Digitalisierung GmbH",
    role: {
      en: "Frontend Developer",
      vi: "Frontend Developer",
    },
    period: {
      en: "04/2024 — 08/2024",
      vi: "04/2024 — 08/2024",
    },
    description: {
      en: "Built a Kanban-style task board with drag-and-drop support for card and column reordering, integrated RESTful APIs for real-time task updates, implemented in-app file preview for PDF, TXT, and images, and wrote unit tests with Jest.",
      vi: "Xây dựng bảng kanban với hỗ trợ kéo-thả để sắp xếp lại thẻ và cột, tích hợp RESTful API cho cập nhật tác vụ thời gian thực, triển khai xem trước tệp trong ứng dụng cho PDF, TXT và hình ảnh, và viết các bài kiểm tra đơn vị với Jest.",
    },
    technologies: [
      "ReactJS",
      "TypeScript",
      "Material UI",
      "React Query",
      "@hello-pangea/dnd",
      "Jest",
    ],
  },
  {
    company: "MTT Software x Mission Digitalisierung GmbH",
    role: {
      en: "Frontend Developer",
      vi: "Frontend Developer",
    },
    period: {
      en: "01/2023 — 03/2024",
      vi: "01/2023 — 03/2024",
    },
    description: {
      en: "Developed frontend modules for a large-scale flight schedule management and real-time status tracking system for an international aviation client. Migrated the entire app from Ant Design v4 to v5 CSS-in-JS Design Token architecture, and maintained Jest unit and Cypress E2E test suites.",
      vi: "Phát triển các mô-đun giao diện cho hệ thống quản lý lịch bay và theo dõi trạng thái thời gian thực quy mô lớn cho khách hàng hàng không quốc tế. Cập nhật phần mềm toàn bộ ứng dụng từ Ant Design v4 sang v5 kiến trúc Design Token CSS-in-JS, và bảo trì các bộ kiểm tra đơn vị Jest và E2E Cypress.",
    },
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
    role: {
      en: "Frontend Developer",
      vi: "Frontend Developer",
    },
    period: {
      en: "06/2022 — 12/2022",
      vi: "06/2022 — 12/2022",
    },
    description: {
      en: "Developed and maintained a React Native mobile booking app for a premium grooming service brand, integrated RESTful APIs with backend data synchronization, and delivered new features in a fast-paced outsourcing environment.",
      vi: "Phát triển và bảo trì ứng dụng đặt lịch cho thương hiệu dịch vụ chăm sóc cao cấp, tích hợp RESTful API với đồng bộ hóa dữ liệu phía máy chủ, và triển khai các tính năng mới.",
    },
    technologies: [
      "React Native",
      "TypeScript",
      "NativeBase",
      "Redux Toolkit",
      "RESTful API",
    ],
  },
];
