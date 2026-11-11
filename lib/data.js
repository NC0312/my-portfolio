// All site content lives here so pages stay presentational.

export const profile = {
  name: "Niket Chawla",
  role: "Software developer",
  employer: "Twinline Business Solutions",
  email: "contactniketchawla@gmail.com",
  phone: "(+91) 77194 17720",
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
    "Full-stack developer with two years of experience building backend services and internal tools in Java, Spring Boot and the React and Next.js ecosystem. I replace third-party SaaS tools with in-house platforms and automate manual business processes. Strong in REST API design, system design and working across teams to ship.",
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
    kind: "Internal platform",
    description:
      "An in-house issue tracker with custom workflows and ticket management, built to replace a licensed Jira setup. Used by 500+ people across 30+ corporate clients (MFIs and NBFCs), and it cut per-seat costs.",
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
    title: "Social It Up",
    kind: "Side project",
    description:
      "A clone of a marketing agency's website, extended with admin panels and email integration.",
    stack: ["Next.js", "Firebase", "Nodemailer", "Framer Motion"],
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
    },
    {
      title: "Software Developer (SDE-1)",
      dates: "Dec 2024 to Aug 2025",
      location: "Gurgaon, India",
    },
    {
      title: "Software Development Intern",
      dates: "Aug 2024 to Nov 2024",
      location: "Gurugram, India",
    },
  ],
};

export const education = [
  {
    school: "Chitkara University",
    detail: "BTech, Computer Science and Engineering",
    result: "CGPA 9.50",
    dates: "2020 to 2024",
    location: "Rajpura, Punjab",
  },
  {
    school: "R.S.D Raj Rattan Public School",
    detail: "Senior Secondary",
    result: "81.8%",
    dates: "2020",
    location: "Ferozepur City, Punjab",
  },
  {
    school: "DCM International School",
    detail: "Secondary",
    result: "79.8%",
    dates: "2018",
    location: "Ferozepur City, Punjab",
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
