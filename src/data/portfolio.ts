export const portfolioData = {
  name: "Nadithi Moonasingha",
  title: "Frontend Developer",
  email: "moonasinghanadithi@gmail.com",
  phone: "+94 77 111 6403",
  linkedin: "https://www.linkedin.com/in/nadithim",
  github: "https://github.com/NadithiMoonasingha",
  portfolio: "https://nadithi-portfolio.netlify.app",

  projects: [
    {
      title: "Smart Campus API",
      subtitle: "RESTful Backend System",
      date: "April 2026",
      role: "Backend Developer",
      image: "/projects/SmartAPI_SplashScreen.jpeg",


      description:
        "A structured backend system designed to manage campus rooms, sensors, and real-time resource interactions through clean RESTful architecture.",

      details: {
        problem:
          "Campus systems needed a clearer way to manage room data, sensor readings, and resource communication.",
        approach:
          "Built resource-based APIs using Java and JAX-RS with organized routing, nested endpoints, validation, and error handling.",
        impact:
          "Created a reliable backend foundation that improved data flow and made campus resources easier to manage.",
      },

      tags: ["Java", "JAX-RS", "REST API"],
      live: "",
      repo: "https://github.com/NadithiMoonasingha/SmartCampusAPI.git",
    },

    {
      title: "Clinexis",
      subtitle: "Healthcare Management System",
      date: "Sep 2025 – Present",
      role: "UI/UX Designer & Frontend Developer",
      image: "/projects/Clinexis_SplashScreen.jpeg",

      description:
        "A multi-role healthcare platform designed to simplify consultations, patient records, pharmacy workflows, and voice-assisted medical documentation.",

      details: {
        problem:
          "Healthcare platforms often separate doctors, patients, and pharmacies into disconnected workflows.",
        approach:
          "Designed user-centered mobile flows in Figma and developed React Native screens integrated with backend services and voice-to-text features.",
        impact:
          "Reduced manual consultation effort and created a more connected healthcare experience for multiple user roles.",
      },

      tags: ["React Native", "Figma", "MongoDB"],
      live: "",
      repo: "https://github.com/Rahulshanth/SDGP-Clinexis.git",
    },

    {
      title: "Smart To-Do",
      subtitle: "Task Management App",
      date: "Feb 2026 – Present",
      role: "Frontend Developer & UX Designer",
      image: "/projects/smart-todo.png",

      description:
        "A focused task management app designed around clarity, simple interactions, and progress visibility.",

      details: {
        problem:
          "Many task apps feel cluttered and make it difficult for users to quickly understand their progress.",
        approach:
          "Created a minimal interface with modular JavaScript logic for task creation, dynamic updates, and visual progress tracking.",
        impact:
          "Improved usability by helping users manage tasks with fewer distractions and clearer feedback.",
      },

      tags: ["JavaScript", "UI Design"],
      live: "",
      repo: "https://github.com/NadithiMoonasingha/ToDo-UX.git",
    },

    {
      title: "EcoVolt",
      subtitle: "Energy Management App",
      date: "Sep 2025 – Jan 2026",
      role: "UI/UX Designer",
      image: "/projects/ecovolt.png",

      description:
        "A mobile UI concept created to make renewable energy tracking more understandable, accessible, and visually engaging.",

      details: {
        problem:
          "Energy tracking tools can feel technical and difficult for everyday users to interpret.",
        approach:
          "Designed clean mobile workflows in Figma with simple navigation, readable data layouts, and user-friendly visual hierarchy.",
        impact:
          "Made energy insights easier to understand and improved the overall usability of the tracking experience.",
      },

      tags: ["Figma", "Mobile UI"],
      live: "",
      repo: "",
    },

    {
      title: "Earth In Force",
      subtitle: "Climate Action Website",
      date: "Jun 2025 – Jul 2025",
      role: "Frontend Developer",
      image: "/projects/earth-in-force.png",

      description:
        "A responsive climate awareness website built to communicate environmental action through clean layouts and interactive UI elements.",

      details: {
        problem:
          "Climate awareness content can feel static, reducing user engagement and exploration.",
        approach:
          "Developed a multi-page responsive website using HTML, CSS, and JavaScript with interactive interface components.",
        impact:
          "Created a more engaging digital experience that supports awareness and encourages users to explore climate-related content.",
      },

      tags: ["HTML", "CSS", "JavaScript"],
      live: "",
      repo: "",
    },

    {
      title: "MathBro",
      subtitle: "Terminal-Based Math Quiz App",
      date: "Nov 2024",
      role: "Software Developer",
      image: "/projects/mathbro.png",

      description:
        "A lightweight terminal-based quiz application designed to support math practice through randomized questions and instant feedback.",

      details: {
        problem:
          "Students need simple practice tools that help them test knowledge without complex setup.",
        approach:
          "Built a Python command-line system with randomized questions, difficulty levels, scoring, and performance tracking.",
        impact:
          "Supported quick self-learning and helped users track progress in a simple environment.",
      },

      tags: ["Python"],
      live: "",
      repo: "https://github.com/NadithiMoonasingha/MathBro.git",
    },

    {
      title: "Bank Account Management System",
      subtitle: "Java Desktop App",
      date: "Jun 2024 – Jul 2024",
      role: "Software Developer",
      image: "/projects/bank-system.png",

      description:
        "A Java-based desktop system created to manage account operations, customer records, transactions, and account updates.",

      details: {
        problem:
          "Manual banking record handling can be slow, repetitive, and prone to mistakes.",
        approach:
          "Developed a structured menu-driven Java application with account creation, transaction handling, and data management features.",
        impact:
          "Improved accuracy and efficiency in managing basic customer banking operations.",
      },

      tags: ["Java"],
      live: "",
      repo: "https://github.com/NadithiMoonasingha/bank_account_management_system.git",
    },
  ],


  skills: {
    Programming: ["Python", "Java", "HTML", "CSS", "JavaScript", "React Native", "React", "TypeScript", "Next.js", "Tailwind CSS"],
    Tools: ["Figma", "Axure", "Git", "GitHub"],
    Databases: ["MongoDB", "SQL"],
    Design: ["Wireframing", "Prototyping", "User Flows", "UI Design"],
  },

  leadership: [
    {
      title: "Event Coordinator (2024–2025)",
      org: "Youth Pulse, IIT",
      logo: "/Logos/YouthPulse.png"
    },
    {
      title: "Organising Committee – IX’25 Designathon",
      org: "IEEE Student Branch of IIT",
      logo: "/Logos/IEEE_SB.jpeg"
    },
    {
      title: "Organising Committee – ModelX AI Hackathon",
      org: "IEEE Computational Intelligence Society",
      logo: "/Logos/IEEE_CIS.jpg"
    },
    {
      title: "Organising Committee – IndustPro Workshop",
      org: "IEEE Computer Society",
      logo: "/Logos/IEEE_CS.jpeg"
    },
    {
      title: "Organising Committee – SkillUp Program",
      org: "LEO Club of IIT",
      logo: "/Logos/Leo.png"
    },
    {
      title: "Volunteer",
      org: "Rotaract Club of IIT",
      logo: "/Logos/Rotaract.png"
    }
  ]
};
