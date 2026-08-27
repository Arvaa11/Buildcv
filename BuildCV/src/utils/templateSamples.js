// src/data/templateSamples.js

export const templateSamples = {
  modern: {
    profileImage:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",

    fullName: "Alex Morgan",
    jobTitle: "Frontend Developer",

    email: "alex.morgan@email.com",
    phone: "+1 415 555 0198",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/alexmorgan",
    github: "github.com/alexmorgan",

    summary:
      "Frontend Developer with 4+ years of experience building responsive, accessible, and high-performance web applications. Passionate about creating polished user experiences with React, TypeScript, and modern frontend technologies.",

    experience: [
      {
        id: 1,
        jobTitle: "Senior Frontend Developer",
        company: "Nova Digital",
        location: "San Francisco, CA",
        startDate: "2023-02",
        endDate: "",
        current: true,
        description:
          "Led development of scalable React applications used by more than 50,000 users. Improved application performance by 35% and introduced a reusable component system that reduced development time across the team.",
      },
      {
        id: 2,
        jobTitle: "Frontend Developer",
        company: "Pixel Labs",
        location: "Remote",
        startDate: "2021-06",
        endDate: "2023-01",
        current: false,
        description:
          "Developed responsive web applications using React, JavaScript, and Tailwind CSS. Collaborated with designers and backend engineers to deliver high-quality digital products.",
      },
    ],

    education: [
      {
        id: 1,
        degree: "B.S. Computer Science",
        institution: "University of California",
        location: "Berkeley, CA",
        startDate: "2017-09",
        endDate: "2021-05",
        current: false,
        description:
          "Focused on software engineering, algorithms, web development, and database systems.",
      },
    ],

    skills: [
      "JavaScript",
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Git",
      "REST APIs",
    ],

    projects: [
      {
        id: 1,
        name: "BuildCV",
        description:
          "A modern resume builder that helps users create professional resumes with customizable templates, live previews, and PDF export.",
        technologies: [
          "React",
          "Tailwind CSS",
          "GSAP",
        ],
        liveUrl: "buildcv.vercel.app",
        githubUrl: "github.com/alexmorgan/buildcv",
      },
      {
        id: 2,
        name: "Analytics Dashboard",
        description:
          "Interactive analytics dashboard featuring reusable components, responsive charts, and real-time data visualization.",
        technologies: [
          "React",
          "TypeScript",
          "Chart.js",
        ],
        liveUrl: "analytics-demo.vercel.app",
        githubUrl: "github.com/alexmorgan/dashboard",
      },
    ],
  },

  professional: {
    profileImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",

    fullName: "Daniel Carter",
    jobTitle: "Software Engineer",

    email: "daniel.carter@email.com",
    phone: "+1 212 555 0147",
    location: "New York, NY",
    linkedin: "linkedin.com/in/danielcarter",
    github: "github.com/danielcarter",

    summary:
      "Software Engineer experienced in designing reliable applications and scalable systems. Strong background in full-stack development, API architecture, database design, and cloud technologies.",

    experience: [
      {
        id: 1,
        jobTitle: "Software Engineer",
        company: "Vertex Technologies",
        location: "New York, NY",
        startDate: "2022-03",
        endDate: "",
        current: true,
        description:
          "Built and maintained production applications serving thousands of daily users. Designed REST APIs, optimized database queries, and collaborated with cross-functional teams to deliver reliable software.",
      },
      {
        id: 2,
        jobTitle: "Junior Software Engineer",
        company: "TechCore",
        location: "New York, NY",
        startDate: "2020-07",
        endDate: "2022-02",
        current: false,
        description:
          "Developed backend services and internal tools while contributing to code reviews, testing, documentation, and deployment workflows.",
      },
    ],

    education: [
      {
        id: 1,
        degree: "B.S. Software Engineering",
        institution: "New York University",
        location: "New York, NY",
        startDate: "2016-09",
        endDate: "2020-05",
        current: false,
        description: "",
      },
    ],

    skills: [
      "Java",
      "Python",
      "JavaScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],

    projects: [
      {
        id: 1,
        name: "Enterprise Management Platform",
        description:
          "Designed a centralized platform for managing business operations, reporting, and internal workflows.",
        technologies: [
          "Node.js",
          "PostgreSQL",
          "React",
        ],
        liveUrl: "",
        githubUrl: "github.com/danielcarter/platform",
      },
    ],
  },

  minimal: {
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",

    fullName: "Emma Wilson",
    jobTitle: "UX Designer",

    email: "emma.wilson@email.com",
    phone: "+1 617 555 0182",
    location: "Boston, MA",
    linkedin: "linkedin.com/in/emmawilson",
    github: "",

    summary:
      "Creative UX Designer focused on turning complex problems into simple, intuitive digital experiences. Experienced in user research, wireframing, prototyping, and design systems.",

    experience: [
      {
        id: 1,
        jobTitle: "UX Designer",
        company: "Studio North",
        location: "Boston, MA",
        startDate: "2022-01",
        endDate: "",
        current: true,
        description:
          "Designed user-centered experiences for SaaS products and collaborated with product managers and engineers from research through implementation.",
      },
    ],

    education: [
      {
        id: 1,
        degree: "B.A. Interaction Design",
        institution: "Boston University",
        location: "Boston, MA",
        startDate: "2017-09",
        endDate: "2021-05",
        current: false,
        description: "",
      },
    ],

    skills: [
      "Figma",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "User Testing",
    ],

    projects: [
      {
        id: 1,
        name: "FinTech Mobile App",
        description:
          "Redesigned the onboarding experience and simplified account management flows, resulting in a 28% increase in successful onboarding.",
        technologies: [
          "Figma",
          "FigJam",
          "Prototyping",
        ],
        liveUrl: "",
        githubUrl: "",
      },
    ],
  },
}