const PORTFOLIO_DATA = {
  profile: {
    name: "Galib Hasan Alvee",
    logo: "GH",
    role: "CSE Graduate · Junior Software Engineer",
    designation: "Software Developer",
    headline: "Crafting digital experiences with precision.",
    intro: "Hi, I'm Galib Hasan Alvee — a Computer Science and Engineering graduate focused on TypeScript, web applications, RESTful APIs, authentication, and clean backend development.",
    email: "galibh233@gmail.com",
    phone: "+880 179576550",
    whatsapp: "+880 179576550",
    location: "Dhaka, Bangladesh",
    availability: "Available for work",
    resume: "public/assets/resume.pdf",
    photo: "public/assets/profile.png",
    socials: [
      { label: "GitHub", url: "https://github.com/galibh1", icon: "github" },
      { label: "LinkedIn", url: "https://linkedin.com/in/galibh1", icon: "linkedin" }
    ]
  },
  technologies: ["TypeScript", "JavaScript", "React", "Node.js", "Express.js", "RESTful APIs", "MVC", "Authentication", "Git", "GitHub", "Tailwind CSS"],
  about: {
    kicker: "ABOUT ME",
    title: "Building the future, one component at a time.",
    paragraphs: [
      "I'm Galib Hasan Alvee, a Computer Science and Engineering graduate from American International University-Bangladesh. My programming journey started with curiosity about how web applications work, and that curiosity has grown into a strong interest in building practical software solutions.",
      "I enjoy working with TypeScript, RESTful APIs, MVC architecture, user authentication, and database-driven applications. I like projects where clean structure, simple user experience, and maintainable code come together.",
      "Outside programming, I enjoy learning new technologies, improving my problem-solving skills, exploring design ideas, and working on self-initiated projects that help me grow as a developer."
    ],
    quote: "My goal is to build reliable web applications with clean code, clear structure, and a user-focused experience.",
    values: [
      { title: "Clean Code", text: "Writing readable and maintainable code with clear structure.", icon: "code" },
      { title: "Web Applications", text: "Building practical interfaces and backend flows for real use cases.", icon: "rocket" },
      { title: "Problem Solving", text: "Breaking down complex requirements into simple, working solutions.", icon: "idea" },
      { title: "Continuous Learning", text: "Improving through practice, projects, and hands-on development.", icon: "users" }
    ]
  },
  skills: {
    Frontend: [
      { name: "HTML", level: 86 },
      { name: "CSS", level: 82 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 78 },
      { name: "React", level: 74 }
    ],
    Backend: [
      { name: "Node.js", level: 72 },
      { name: "Express.js", level: 70 },
      { name: "RESTful APIs", level: 76 },
      { name: "MVC Architecture", level: 72 },
      { name: "MySQL", level: 74 }
    ],
    Tools: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 86 },
      { name: "Postman", level: 78 },
      { name: "Authentication", level: 72 },
      { name: "Database Management", level: 74 }
    ]
  },
  education: [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institute: "American International University-Bangladesh (AIUB)",
      duration: "2021 — 2026",
      result: "Graduated: 2026",
      details: "Focused on software development, programming fundamentals, database systems, web technologies, and practical problem solving."
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institute: "Gurudayal Govt College",
      duration: "2018 — 2020",
      result: "Science Group",
      details: "Completed higher secondary education with a science background, building a foundation in mathematics and analytical thinking."
    }
  ],
  experience: [
    {
      period: "10/2025 — 03/2026",
      title: "Software Development Intern",
      company: "Goinnovior Limited",
      location: "Dhaka, Bangladesh",
      description: "Gained hands-on experience with TypeScript focusing on building web applications.",
      points: [
        "Gained hands-on experience with TypeScript focusing on building web applications.",
        "Developed self-initiated projects to strengthen understanding of MVC architecture, RESTful APIs, user authentication, and database management."
      ],
      stack: ["TypeScript", "MVC", "RESTful APIs", "Authentication"]
    }
  ],
  projects: [
    {
      id: "fintech-dashboard",
      rank: 1,
      title: "Fintech Dashboard",
      image: "public/assets/project-fintech.svg",
      summary: "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
      description: "Fintech Dashboard is a modern analytics application designed for investors and finance teams. It includes portfolio tracking, market summaries, transaction insights, and responsive data visualizations optimized for both desktop and mobile screens.",
      stack: ["React", "TypeScript", "Node.js", "Chart.js", "MongoDB"],
      live: "https://example.com/fintech-dashboard",
      github: "https://github.com/galibh1/Football-Ticket-Booking-System",
      challenges: [
        "Designing a fast dashboard UI while rendering multiple charts and market widgets.",
        "Creating a flexible card system that works on desktop, tablet, and mobile layouts.",
        "Keeping financial data presentation clear without overwhelming users."
      ],
      improvements: [
        "Add live WebSocket market updates.",
        "Introduce role-based access control for teams.",
        "Build a personalized AI insight feed."
      ]
    },
    {
      id: "ecommerce-platform",
      rank: 2,
      title: "E-Commerce Platform",
      image: "public/assets/project-ecommerce.svg",
      summary: "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
      description: "This e-commerce platform helps businesses sell products online with a polished storefront, admin dashboard, order tracking, and payment-ready checkout flow. It focuses on speed, clean UI, and maintainable product architecture.",
      stack: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
      live: "https://example.com/ecommerce-platform",
      github: "https://github.com/galibh1/car-doctor-react",
      challenges: [
        "Building reusable product, cart, and checkout components.",
        "Handling product variants and stock states in a clean user flow.",
        "Making the storefront SEO-friendly and fast."
      ],
      improvements: [
        "Add advanced coupon and loyalty features.",
        "Improve product recommendation logic.",
        "Add multi-vendor marketplace support."
      ]
    },
    {
      id: "ai-codeflow",
      rank: 3,
      title: "CodeFlow AI",
      image: "public/assets/project-codeflow.svg",
      summary: "An AI-assisted coding workspace that helps developers generate components, refactor code, and document features faster.",
      description: "CodeFlow AI is a developer productivity interface that combines a code editor style dashboard with prompt templates, AI suggestions, snippets, and team documentation tools. The frontend focuses on keyboard-friendly interactions and a polished dark UI.",
      stack: ["React", "OpenAI API", "Node.js", "Express", "Redis"],
      live: "https://example.com/codeflow-ai",
      github: "https://github.com/galibh1/Green_Gladiators",
      challenges: [
        "Designing a clean UX around asynchronous AI responses.",
        "Managing prompt history and generated output states.",
        "Keeping the editor layout responsive without losing productivity features."
      ],
      improvements: [
        "Add project-level knowledge base indexing.",
        "Support multiple editor themes.",
        "Create a browser extension companion."
      ]
    },
    {
      id: "task-horizon",
      rank: 4,
      title: "Task Horizon",
      image: "public/assets/project-task.svg",
      summary: "A collaborative task management app with team boards, activity timeline, reminders, and project analytics.",
      description: "Task Horizon is a productivity tool for small teams. It includes kanban boards, task details, due dates, team comments, status filters, and project health analytics in a visually calm interface.",
      stack: ["Vue", "Firebase", "Cloud Functions", "Pinia", "SCSS"],
      live: "https://example.com/task-horizon",
      github: "https://github.com/galibh1/mr-cafe",
      challenges: [
        "Synchronizing board updates between multiple users.",
        "Creating intuitive drag-and-drop behavior on touch devices.",
        "Balancing analytics features with a distraction-free task view."
      ],
      improvements: [
        "Add calendar integration.",
        "Add offline-first support.",
        "Add team workload forecasting."
      ]
    }
  ]
};
