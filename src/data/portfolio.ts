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
      title: "ApplyFlow",
      slug: "applyflow",
      gallery: true,
      subtitle: "Internship Application Wizard",
      date: "Jul 2026",
      role: "Frontend Developer",
      image: "/projects/applyflow.png",
    
      description:
        "A responsive three-step internship application form built with React and TypeScript, featuring validation, local progress saving, and a complete review workflow.",
    
      details: {
        problem:
          "Multi-field forms lead to submission errors and user drop-off.",
    
        approach:
          "Built typed, multi-step forms with local storage persistence and validation logic.",
        impact:
          "Boosted completion rates and user experience through auto-saving and clear step navigation.",
      },
    
      tags: ["React", "TypeScript", "Vite", "LocalStorage"],
    
      live:
        "https://nadithimoonasingha.github.io/internship-application-wizard/",
    
      repo:
        "https://github.com/NadithiMoonasingha/internship-application-wizard",
    },

    {
      title: "Clinexis",
      slug: "clinexis",
      gallery: true,
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
      slug: "smart-todo",
      gallery: true,
      subtitle: "FULL-STACK TASK MANAGEMENT APP",
      date: "Feb 2026 – Jun 2026",
      role: "Full-Stack Developer",
      image: "/projects/smart-todo.png",

      description:
        "A simple task management web application built with React and Java Spring Boot. The app allows users to add, view, complete, and delete daily tasks through a clean and easy-to-use interface.",

      details: {
        problem:
          "Feature-bloated task apps ruin simple daily usability.",
        approach:
          "Integrated React frontend with Spring Boot REST APIs for core CRUD actions.",
        impact:
          "Created a fast, distraction-free application with seamless client-server integration.",
      },

      tags: ["React", "Spring Boot", "REST API","CSS", "Java"],
      live: "",
      repo: "https://github.com/NadithiMoonasingha/ToDo-UX.git",
    },

    {
      title: "Smart Campus API",
      slug: "smart-campus",
      gallery: false,
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
      title: "BankPulse",
      slug: "bank-system",
      gallery: true,
      subtitle: "Bank Account Management System",
      date: "Jun 2024 – May 2026",
      role: "Software Developer",
      image: "/projects/bank-system.png",

      description:
        "Developed a React and Flask full-stack application with JSON-based storage and input validation to handle customer accounts, deposits, withdrawals, and searches accurately.",

      details: {
        problem:
          "Error-prone manual data entry and slow account management.",
        approach:
          "Integrated React UI with Flask backend to automate CRUD logic and validation",
        impact:
          "Converted a legacy console app into an intuitive, error-reducing dashboard.",
      },

      tags: ["Java","React", "Python Flask", "JSON", "CSS"],
      live: "",
      repo: "https://github.com/NadithiMoonasingha/bank_account_management_system.git",
    },

    {
      title: "EcoVolt",
      slug: "ecovolt",
      gallery: true,
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
      slug: "earth-in-force",
      gallery: true,
      subtitle: "Climate Action Website",
      date: "Jun 2025 – Jul 2025",
      role: "Frontend Developer",
      image: "/projects/earthinforce_2.jpg",

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
      slug: "mathbro",
      gallery: true,
      subtitle: "Terminal-Based Math Quiz App",
      date: "Nov 2024 - May 2026",
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
  ],


  skills: {
    Programming: ["Python", "Java", "HTML", "CSS", "JavaScript", "React Native", "React", "TypeScript", "Next.js","React Hooks", "Tailwind CSS"],
    Tools: ["Figma", "Axure", "Git", "GitHub", "Postman","GitHub Actions","Vite","GitHub Pages"],
    Databases: ["MongoDB", "SQL", "JSON-based Storage"],
    Design: ["Wireframing", "Prototyping", "User Flows", "UI Design","UX Research Basics "],
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
