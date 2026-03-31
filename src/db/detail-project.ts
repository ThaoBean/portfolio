import { PROJECTS_NAME } from "./constants";

export type TranslatedText = {
  en: string;
  vi: string;
};

export type TranslatedTextArray = {
  en: string[];
  vi: string[];
};

export const DETAILED_PROJECTS = {
  [PROJECTS_NAME.CENTAMESS]: {
    id: PROJECTS_NAME.CENTAMESS,
    title: {
      en: "Centamess — Omnichannel Customer Platform",
      vi: "Centamess — Nền tảng Chăm sóc Khách hàng Đa kênh",
    },
    overview: {
      en: [
        "An omnichannel customer care platform centralizing real-time interactions from Facebook, Telegram, Instagram, LINE, and a proprietary live chat widget into a single inbox, with integrated order management and carrier support.",
        "Built as a full-stack product with a focus on low-latency WebSocket communication, scalable message routing architecture, and AI-powered automation for customer interactions.",
      ],
      vi: [
        "Nền tảng chăm sóc khách hàng đa kênh, tập trung toàn bộ tin nhắn thời gian thực từ Facebook, Telegram, Instagram, LINE và live chat widget riêng vào một hộp thư duy nhất — tích hợp quản lý đơn hàng và hỗ trợ vận chuyển.",
        "Sản phẩm full-stack được xây dựng với trọng tâm vào WebSocket độ trễ thấp, kiến trúc định tuyến tin nhắn có khả năng mở rộng và tự động hóa bằng AI cho các tương tác với khách hàng.",
      ],
    },
    projectInfo: {
      company: "MTT Software",
      client: "MTT Software",
      isOutsourced: false,
      role: {
        en: "Full-Stack Developer",
        vi: "Lập trình viên Full-Stack",
      },
      duration: {
        en: "Jan 2025 — Present",
        vi: "01/2025 — Hiện tại",
      },
      teamSize: {
        en: "6 members",
        vi: "6 thành viên",
      },
    },
    contributions: {
      en: [
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
      vi: [
        "Xây dựng nền tảng chăm sóc khách hàng đa kênh hỗ trợ nhắn tin thời gian thực trên Telegram, Facebook, Instagram và LINE, sử dụng WebSocket để đảm bảo độ trễ thấp.",
        "Tích hợp OpenAI API với knowledge base tùy chỉnh để xây dựng chatbot chuyên biệt, tự động trả lời các câu hỏi thường gặp của khách hàng.",
        "Chuẩn hóa hệ thống component tái sử dụng (20+ component) bằng cách tùy chỉnh shadcn/ui với ReactJS và Tailwind CSS, đảm bảo giao diện nhất quán xuyên suốt các module.",
        "Thiết kế và triển khai luồng định tuyến tin nhắn hai chiều với NestJS — nhận tin nhắn đến qua webhook, lưu vào database và đẩy lên frontend theo thời gian thực qua WebSocket.",
        "Xây dựng service NestJS để bắt comment Facebook Livestream theo thời gian thực và tự động phân loại tin nhắn có ý định mua hàng để xử lý đơn.",
        "Xây dựng pipeline migrate dữ liệu từ Sapo, bao gồm tồn kho, thông tin khách hàng, sản phẩm và đơn hàng vào database của nền tảng.",
        "Tích hợp các đơn vị vận chuyển (Viettel POST, GHN) để hỗ trợ xử lý đơn hàng.",
        "Xây dựng live chat widget dạng nhúng hỗ trợ multi-tenant, đóng gói thành JavaScript bundle độc lập — mỗi merchant sau khi đăng ký sẽ nhận một ID riêng để nhúng widget vào website của họ.",
        "Tham gia sprint planning và code review trong nhóm làm việc theo mô hình Agile/Scrum.",
      ],
    },
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
    imageUrl: "/projects/centamess.png",
  },

  [PROJECTS_NAME.OUTLIER_AI]: {
    id: PROJECTS_NAME.OUTLIER_AI,
    title: {
      en: "Outlier AI — Prompt & JavaScript Engineering",
      vi: "Outlier AI — Kỹ sư Prompt & JavaScript",
    },
    overview: {
      en: [
        "A contract engagement with Outlier AI focused on improving the quality and reliability of generative AI models through structured human feedback and expert prompt engineering.",
        "Worked as a JavaScript specialist to evaluate model outputs, design edge-case prompts, and provide ground truth corrections as part of a reinforcement learning from human feedback (RLHF) pipeline.",
      ],
      vi: [
        "Hợp tác hợp đồng với Outlier AI tập trung vào cải thiện chất lượng và độ tin cậy của các mô hình AI tạo sinh thông qua phản hồi của con người.",
        "Làm việc như một chuyên gia JavaScript để đánh giá kết quả mô hình, thiết kế prompt cho trường hợp biên và cung cấp sửa chữa sự thật cơ bản như một phần của đường ống học tăng cường từ phản hồi của con người (RLHF).",
      ],
    },
    projectInfo: {
      company: "MTT Software",
      client: "Outlier AI",
      isOutsourced: true,
      role: {
        en: "Prompt & JavaScript Engineer",
        vi: "Kỹ sư Prompt & JavaScript",
      },
      duration: {
        en: "Aug 2024 — Dec 2024",
        vi: "08/2024 — 12/2024",
      },
      teamSize: {
        en: "Contract",
        vi: "Hợp đồng",
      },
    },
    contributions: {
      en: [
        "Designed JavaScript prompts to evaluate model capabilities across edge cases and language patterns.",
        "Assessed model outputs against Outlier's quality rubric — rating responses for accuracy, conciseness, and clarity.",
        "Provided corrected responses as ground truth data to improve model behavior through human feedback loops.",
      ],
      vi: [
        "Thiết kế prompt JavaScript để đánh giá khả năng của mô hình trên các trường hợp biên và mẫu ngôn ngữ.",
        "Đánh giá kết quả mô hình so với tiêu chuẩn chất lượng của Outlier — xếp hạng phản hồi về độ chính xác, ngắn gọn và rõ ràng.",
        "Cung cấp phản hồi đã sửa chữa như dữ liệu sự thật cơ bản để cải thiện hành vi mô hình thông qua vòng phản hồi của con người.",
      ],
    },
    tags: ["JavaScript", "Prompt Engineering", "RLHF", "AI Training"],
    imageUrl: "/projects/outlier.jpg",
  },

  [PROJECTS_NAME.WEBATUS]: {
    id: PROJECTS_NAME.WEBATUS,
    title: {
      en: "WebATUS — Indra Avitech",
      vi: "WebATUS — Indra Avitech",
    },
    overview: {
      en: [
        "A large-scale flight schedule management and real-time status tracking system built for an international aviation client (Indra Avitech), serving complex operational workflows across multiple frontend modules.",
        "The project demanded high reliability under high-frequency data updates, strict UI consistency, and a full migration from Ant Design v4 to v5's CSS-in-JS Design Token architecture.",
      ],
      vi: [
        "Một hệ thống quản lý lịch bay và theo dõi trạng thái thời gian thực quy mô lớn được xây dựng cho khách hàng hàng không quốc tế (Indra Avitech), phục vụ các quy trình hoạt động phức tạp trên nhiều mô-đun giao diện.",
        "Dự án đòi hỏi độ tin cậy cao dưới các cập nhật dữ liệu tần suất cao, tính nhất quán UI nghiêm ngặt và một cuộc di chuyển đầy đủ từ Ant Design v4 sang kiến trúc Design Token CSS-in-JS v5.",
      ],
    },
    projectInfo: {
      company: "MTT Software",
      client: "Indra Avitech",
      isOutsourced: true,
      role: {
        en: "Frontend Developer",
        vi: "Lập trình viên Frontend",
      },
      duration: {
        en: "Jan 2023 — Mar 2024",
        vi: "01/2023 — 03/2024",
      },
      teamSize: {
        en: "5 members",
        vi: "5 thành viên",
      },
    },
    contributions: {
      en: [
        "Developed frontend modules for flight schedule management and real-time status updates within a large-scale modular React application.",
        "Integrated WebSocket communication for live flight status syncing, ensuring system reliability under high-frequency data updates.",
        "Migrated the entire application from Ant Design v4 to v5, adapting all custom styles and themes from the Less variable system to the new CSS-in-JS Design Token architecture.",
        "Wrote and maintained automated test suites with Jest (unit) and Cypress (E2E), improving system reliability and reducing regression bugs.",
      ],
      vi: [
        "Phát triển các mô-đun giao diện cho quản lý lịch bay và cập nhật trạng thái thời gian thực trong một ứng dụng React mô-đun quy mô lớn.",
        "Tích hợp giao tiếp WebSocket cho đồng bộ hóa trạng thái chuyến bay trực tiếp, đảm bảo độ tin cậy của hệ thống dưới các cập nhật dữ liệu tần suất cao.",
        "Di chuyển toàn bộ ứng dụng từ Ant Design v4 sang v5, điều chỉnh tất cả các kiểu và chủ đề tùy chỉnh từ hệ thống biến Less sang kiến trúc Design Token CSS-in-JS mới.",
        "Viết và bảo trì các bộ kiểm tra tự động với Jest (đơn vị) và Cypress (E2E), cải thiện độ tin cậy của hệ thống và giảm lỗi hồi quy.",
      ],
    },
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
    imageUrl: "/projects/indra_avitech.png",
  },

  [PROJECTS_NAME.PROWO]: {
    id: PROJECTS_NAME.PROWO,
    title: {
      en: "Prowo — Task Management Application",
      vi: "Prowo — Ứng dụng Quản lý Tác vụ",
    },
    overview: {
      en: [
        "A department and employee task management application built for a German client, designed to streamline team workflows through an intuitive Kanban-style board with drag-and-drop interaction.",
        "Focused on delivering a smooth and reliable user experience with real-time board updates, in-app file previewing, and unit-tested components for production stability.",
      ],
      vi: [
        "Ứng dụng quản lý công việc theo phòng ban và nhân viên, được phát triển cho khách hàng tại Đức, giúp tối ưu quy trình làm việc nhóm thông qua bảng Kanban trực quan với tính năng kéo-thả.",
        "Chú trọng mang lại trải nghiệm mượt mà và ổn định với khả năng cập nhật bảng theo thời gian thực, xem trước file ngay trong ứng dụng, và các component đã được kiểm thử để đảm bảo độ tin cậy khi triển khai.",
      ],
    },
    projectInfo: {
      company: "MTT Software",
      client: "Mission Digitalisierung GmbH",
      isOutsourced: true,
      role: {
        en: "Frontend Developer",
        vi: "Lập trình viên Frontend",
      },
      duration: {
        en: "Apr 2024 — Aug 2024",
        vi: "04/2024 — 08/2024",
      },
      teamSize: {
        en: "3 members",
        vi: "3 thành viên",
      },
    },
    contributions: {
      en: [
        "Built a Kanban-style task board with drag-and-drop support using @hello-pangea/dnd — supporting card reordering within columns, cross-column card movement, and column reordering.",
        "Integrated RESTful APIs to fetch board data and update task status in real-time upon drag-and-drop interactions.",
        "Implemented an in-app file preview feature supporting multiple formats (PDF, TXT, images) without leaving the application.",
        "Developed unit tests to ensure component reliability and code quality.",
      ],
      vi: [
        "Xây dựng bảng Kanban với tính năng kéo-thả sử dụng @hello-pangea/dnd — hỗ trợ sắp xếp thẻ trong cùng cột, di chuyển thẻ sang cột khác và sắp xếp lại thứ tự cột.",
        "Tích hợp RESTful API để tải dữ liệu bảng và cập nhật trạng thái tác vụ theo thời gian thực sau mỗi thao tác kéo-thả.",
        "Xây dựng tính năng xem trước file ngay trong ứng dụng, hỗ trợ nhiều định dạng (PDF, TXT, hình ảnh) mà không cần mở tab khác.",
        "Viết unit test để đảm bảo chất lượng và độ ổn định của các component.",
      ],
    },
    tags: ["ReactJS", "TypeScript", "@hello-pangea/dnd", "RESTful API", "Jest"],
    imageUrl: "/projects/barbaard-img.png",
  },

  [PROJECTS_NAME.BARBAARD]: {
    id: PROJECTS_NAME.BARBAARD,
    title: {
      en: "House of Barbaard — Mobile Booking App",
      vi: "House of Barbaard — Ứng dụng Đặt lịch Di động",
    },
    overview: {
      en: [
        "A React Native mobile booking application for House of Barbaard, a premium grooming service brand, enabling customers to browse services and book appointments directly from their phones.",
      ],
      vi: [
        "Ứng dụng đặt lịch di động bằng React Native cho House of Barbaard — thương hiệu dịch vụ grooming cao cấp, giúp khách hàng dễ dàng xem dịch vụ và đặt lịch hẹn ngay trên điện thoại.",
      ],
    },
    projectInfo: {
      company: "MTT Software",
      client: "Connecta",
      isOutsourced: true,
      role: {
        en: "Frontend Developer",
        vi: "Lập trình viên Frontend",
      },
      duration: {
        en: "Jun 2022 — Dec 2022",
        vi: "06/2022 — 12/2022",
      },
      teamSize: {
        en: "3 members",
        vi: "3 thành viên",
      },
    },
    contributions: {
      en: [
        "Developed and maintained a React Native mobile booking app for grooming services, improving UX stability and performance.",
        "Integrated RESTful APIs and handled data synchronization with backend services.",
        "Implemented new features and resolved bugs based on client requirements in a fast-paced outsourcing environment.",
      ],
      vi: [
        "Phát triển và bảo trì ứng dụng đặt lịch di động React Native cho dịch vụ grooming, cải thiện độ ổn định UX và hiệu năng tổng thể.",
        "Tích hợp RESTful API và xử lý đồng bộ dữ liệu với các service phía backend.",
        "Triển khai tính năng mới và xử lý bug theo yêu cầu từ khách hàng trong môi trường outsource.",
      ],
    },
    tags: ["React Native", "TypeScript", "NativeBase", "RESTful API"],
    imageUrl: "/projects/barbaard-img.png",
  },
};
