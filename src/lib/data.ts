import { Monitor, Server, Palette, Database, ClipboardList, Lightbulb, Code2 } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  deviconName?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description?: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
}

export interface ContactLink {
  label: string;
  href: string;
  username: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Syed Ayan Haider",
  brand: "Ayan",
  title: "Full-Stack Web Developer | Project Manager | Software Engineer",
  description:
    "I craft modern, scalable web applications with clean code and pixel-perfect design. Passionate about building products that make a difference.",
  email: "ayanhaidershah0@gmail.com",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", deviconName: "react" },
  { name: "Next.js", category: "Frontend", deviconName: "nextjs" },
  { name: "JavaScript", category: "Frontend", deviconName: "javascript" },
  { name: "TypeScript", category: "Frontend", deviconName: "typescript" },
  { name: "Tailwind CSS", category: "Frontend", deviconName: "tailwindcss" },
  { name: "HTML", category: "Frontend", deviconName: "html5" },
  { name: "CSS", category: "Frontend", deviconName: "css3" },
  // Backend
  { name: "Node.js", category: "Backend", deviconName: "nodejs" },
  { name: "Express", category: "Backend", deviconName: "express" },
  // Database
  { name: "MongoDB", category: "Database", deviconName: "mongodb" },
  { name: "PostgreSQL", category: "Database", deviconName: "postgresql" },
  { name: "Supabase", category: "Database", deviconName: "supabase" },
  { name: "Firebase", category: "Database", deviconName: "firebase" },
  // Tools
  { name: "Git", category: "Tools", deviconName: "git" },
  { name: "GitHub", category: "Tools", deviconName: "github" },
  { name: "Jira", category: "Tools", deviconName: "jira" },
  { name: "Trello", category: "Tools", deviconName: "trello" },
  { name: "Project Management", category: "Tools" },
];

export const projects: Project[] = [
  {
    title: "MedValidate AI",
    description:
      "An AI-powered platform that helps validate healthcare startup ideas using real-world market insights and intelligent analysis. Led project planning and full-stack development.",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "AI/ML"],
    liveUrl: "https://medvalidateai.vercel.app/",
    githubUrl: "https://github.com/ayanhaider1122/medvalidateai",
    image: "/medvalidate.png",
  },
  {
    title: "Astra (Airline Management System)",
    description:
      "The ultimate command center for global aviation logistics. Features real-time flight tracking, fleet management, and personnel coordination with a modern dark-themed interface.",
    tech: ["HTML", "CSS", "JavaScript", "SQL", "PHP"],
    githubUrl: "https://github.com/ayanhaider1122/Database_Project",
    image: "/astra.png",
  },
  {
    title: "PakDrive (Car Rental System)",
    description:
      "A sleek car rental platform allowing users to find the best-maintained rental fleet in Pakistan. Includes dynamic search filters and comprehensive car details.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/pakdrive.png",
  },
  {
    title: "Zaviyel",
    description:
      "A modern business website built with a clean, responsive, and user-friendly design. Delivers a professional online presence with an optimized user experience.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://zaviyel.com/",
    githubUrl: "https://github.com/ayanhaider1122/zaviyel-app",
    image: "/zaviyel.png",
  },
  {
    title: "Vibstie",
    description:
      "A startup platform where I served as CEO and Web Developer, leading Agile development, coordinating remote teams, and managing sprints.",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "Jira"],
    liveUrl: "https://www.vibstie.com/",
    githubUrl: "#",
    image: "/vibstie.jpg",
  },
  {
    title: "Hospital Management System",
    description:
      "A web-based hospital management system designed to streamline patient and hospital operations. Developed the frontend interface and coordinated project tasks.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/ayanhaider1122/medical-management-system-new",
    image: "/hospital.png",
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology (PAF-IAST), Pakistan",
    period: "August 2022 — June 2026 (Expected)"
  }
];

export const experiences: Experience[] = [
  {
    role: "CEO & Web Developer",
    company: "Vibstie (Startup) | Remote",
    period: "June 2025 — March 2026",
    highlights: [
      "Led project planning and Agile development workflows.",
      "Coordinated frontend and backend development teams.",
      "Managed sprint planning, task tracking, and project timelines using Jira.",
      "Improved team communication and ensured on-time feature delivery.",
      "Assisted with testing, quality assurance, and feature prioritization."
    ],
  },
  {
    role: "Project Manager & Recruiter",
    company: "Joystie (US-Based Startup) | Remote",
    period: "February 2025 — June 2025",
    highlights: [
      "Managed remote software development teams across multiple time zones.",
      "Coordinated sprint planning, backlog management, and project milestones.",
      "Facilitated communication between developers and stakeholders.",
      "Conducted quality reviews and tracked issue resolution to ensure successful project delivery."
    ],
  },
  {
    role: "Summer Intern",
    company: "HIT Solutions Pvt. Ltd. | Haripur, Pakistan",
    period: "June 2024 — August 2024",
    highlights: [
      "Assisted with Agile and Scrum-based web development projects.",
      "Supported sprint tracking, project coordination, and team collaboration.",
      "Worked with Jira and Trello to monitor project progress."
    ],
  },
  {
    role: "Student Intern",
    company: "Brainex World | Abbottabad, Pakistan",
    period: "August 2023 — October 2023",
    highlights: [
      "Assisted the development team with frontend development tasks.",
      "Supported project coordination and milestone tracking.",
      "Learned professional teamwork, communication, and software development practices."
    ],
  }
];

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks like React and Next.js. From landing pages to complex SaaS platforms.",
    iconName: "react",
  },
  {
    title: "Project Management",
    description:
      "End-to-end project planning, agile sprint management, and team coordination to ensure successful product delivery.",
    iconName: "jira",
  },
  {
    title: "Backend & Database",
    description:
      "Scalable APIs, microservices, and efficient database architectures using PostgreSQL, MongoDB, and Supabase.",
    iconName: "nodejs",
  },
  {
    title: "UI/UX & Frontend",
    description:
      "Pixel-perfect, responsive interfaces with intuitive user experiences. Modern design systems and smooth animations.",
    iconName: "figma",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Syed Sibtain Shah",
    role: "CTO",
    company: "Vibstie",
    quote:
      "Ayan is an exceptional developer who single-handedly brought our frontend platform to life. His technical execution, responsiveness, and clean architecture are top-notch.",
    image: "/client1.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Product Manager",
    company: "InnovateCo",
    quote:
      "Working with Ayan was a game-changer. He understood our requirements perfectly and delivered a solution that exceeded our expectations in every way.",
    image: "/client2.jpg",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: "mailto:ayanhaidershah0@gmail.com",
    username: "ayanhaidershah0@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/syed-ayan-haider-a947a6296",
    username: "in/syed-ayan-haider-a947a6296",
  },
  {
    label: "GitHub",
    href: "https://github.com/ayanhaider1122",
    username: "@ayanhaider1122",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/develop_withsyed",
    username: "@develop_withsyed",
  },
];
