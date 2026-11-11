// All site content lives here so pages stay presentational.

export const profile = {
  name: "Niket Chawla",
  role: "Software developer",
  employer: "Twinline Business Solutions",
  email: "contactniketchawla@gmail.com",
  phone: "+91 77194 17720",
  phoneHref: "+917719417720",
  location: "Punjab, India",
  resume: "/assets/resume.pdf",
  fiverr: "https://www.fiverr.com/s/BRmxd4d",
  socials: [
    { name: "GitHub", href: "https://github.com/NC0312" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/Niket-Chawla/" },
    {
      name: "Instagram",
      href: "https://www.instagram.com/niket_kumar_chawla/?next=%2F",
    },
  ],
  summary:
    "Full-stack software developer with two years of experience building scalable backend services and internal tooling in Java, Spring Boot and the React and Next.js ecosystem. Proven track record of replacing third-party SaaS tools (Jira, FactoHR) with in-house platforms, and automating manual business processes. Strong in REST API design, system design and cross-functional delivery.",
};

export const nav = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export const projects = [
  {
    slug: "trackr",
    title: "Trackr",
    kind: "In-house issue tracker",
    description:
      "A Jira-style issue tracker built from scratch, with custom workflow and ticket-management features beyond Jira's, using AI-assisted development (Claude) to speed up delivery. Adopted by 30+ MFI and NBFC clients with 500+ active users, replacing a licensed third-party tool and cutting per-seat costs.",
    stack: ["React 18", "Java 21", "PostgreSQL"],
    image: null,
    live: null,
    github: null,
  },
  {
    slug: "tripify",
    title: "Tripify",
    kind: "Side project",
    description:
      "An AI-powered travel planner that uses the Google Maps API and Gemini recommendations.",
    stack: ["React", "Firebase", "Google Maps API", "Gemini"],
    image: "/assets/work/tripify.png",
    live: "https://tripify-web.vercel.app/",
    github: "https://github.com/NC0312/tripify-web-app",
  },
  {
    slug: "social-it-up",
    title: "SocialItUp Clone",
    kind: "Side project",
    description:
      "A marketing site clone built with Next.js server-side rendering, paired with a separate serverless admin panel for lead management, real-time chat and role-based access control, using Firebase as the backend.",
    stack: ["Next.js", "Firebase"],
    image: "/assets/work/social-it-up.png",
    live: "https://social-it-up.vercel.app/",
    github: "https://github.com/NC0312/social-it-up",
  },
  {
    slug: "tomato",
    title: "Tomato",
    kind: "Side project",
    description:
      "A food delivery and restaurant site built on the MERN stack, with an admin panel and a payment gateway.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
    image: "/assets/work/tomato.png",
    live: "https://tomato-food-frontend.onrender.com/",
    github: "https://github.com/NC0312/tomato-food-app",
  },
  {
    slug: "textify",
    title: "Textify",
    kind: "Side project",
    description:
      "A chat web app on the MERN stack that uses sockets to make messaging real time.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Sockets"],
    image: "/assets/work/textify.png",
    live: "https://textify-chat-app.onrender.com/",
    github: "https://github.com/NC0312/Textify",
  },
];

export const experience = {
  company: "Twinline Business Solutions",
  href: "https://www.linkedin.com/company/twinline-business-solutions/",
  roles: [
    {
      title: "Software Developer (SDE-2)",
      dates: "Aug 2025 to present",
      location: "Gurgaon, India",
      highlights: [
        "Architected and built Trackr, an in-house issue-tracking platform rivaling Jira's core functionality, using React 18, Java 21 and PostgreSQL. It is now used by 500+ users across 30+ corporate clients (MFIs and NBFCs) and eliminated per-seat licensing costs.",
        "Designed and delivered an in-house HRMS platform, a replacement for FactoHR, with a Java 17 web app and a companion React Native mobile app serving 80+ employees across the organisation.",
      ],
    },
    {
      title: "Software Developer (SDE-1)",
      dates: "Dec 2024 to Aug 2025",
      location: "Gurgaon, India",
      highlights: [
        "Built and integrated REST APIs for HDFC, IndiaFirst and Bajaj Insurance policy creation and status-inquiry workflows.",
        "Automated end-to-end billing voucher generation across 30+ corporate clients, replacing a fully manual invoicing process.",
        "Built an employee tracking system with a Next.js frontend.",
        "Integrated Jira's Open APIs to build a two-way sync module between internal and external Jira instances.",
      ],
    },
    {
      title: "Software Development Intern",
      dates: "Aug 2024 to Nov 2024",
      location: "Gurugram, India",
      highlights: [
        "Applied core Java, Spring Boot, Hibernate and DAO patterns to build paginated financial reports for the company's LOS and LMS product suite.",
        "Built financial dashboards and improved platform UI and UX.",
      ],
    },
  ],
};

export const education = [
  {
    school: "Chitkara University",
    detail: "Bachelor of Engineering, Computer Science and Programming",
    dates: "Aug 2020 to Aug 2024",
    location: "Rajpura, Punjab",
  },
];

export const skills = [
  { group: "Languages", items: ["Java 11, 17 and 21", "JavaScript"] },
  {
    group: "Backend",
    items: [
      "Spring Boot",
      "Hibernate",
      "JPA and DAO",
      "REST API design",
      "System design",
    ],
  },
  {
    group: "Frontend",
    items: ["React 18", "Next.js", "React Native", "HTML and CSS"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "Oracle", "MySQL", "Firebase"],
  },
  { group: "AI-assisted development", items: ["Claude", "GitHub Copilot"] },
];

export const services = [
  {
    title: "MERN stack web development",
    description:
      "Full-stack web applications on MongoDB, Express, React and Node.js, built to the size of the problem.",
  },
  {
    title: "Full-stack Java development",
    description:
      "Spring Boot and Hibernate backends with REST APIs, connected to a React front end.",
  },
  {
    title: "Next.js web development",
    description:
      "Fast, search-friendly sites and apps using server rendering and static generation.",
  },
  {
    title: "UI development",
    description:
      "Responsive interfaces in CSS and Tailwind that are clear to use on any screen.",
  },
];
