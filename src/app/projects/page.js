import UnderlinedText from "../components/UnderlinedText";
import ProjectCardContainer from "../components/ProjectCardContainer";

export default function Projects() {
  const projectData = [
    {
      number: 1,
      name: "Anokha 2024",
      tags: ["Frontend", "Team project", "Uni-techfest"],
      techStack: ["NextJS", "TailwindCSS", "GSAP"],
      description:
        "As part of a team of seven, I contributed as a frontend developer to building a high-traffic event registration website for Anokha '24, which successfully managed over 1,000 participant registrations. I played a key role in designing a responsive and visually engaging interface using Tailwind CSS and GSAP, leading to a 30% increase in user engagement. Additionally, I worked on optimizing code and implementing asset-loading best practices, ensuring a fast and seamless user experience.",
      githubLink: "https://github.com/anokha-24/anokha_web",
      image: "/Anokha2.png",
    },
    {
      number: 2,
      name: "Mediclined",
      tags: ["Hackathon", "Dashboard", "Team project"],
      techStack: ["NextJS", "NodeJS", "MongoDB", "mySql", "ESP32"],
      description:
        "Our project, Mediclined, was developed for the Healthcare track at Evolumin National Level Hackathon 2024, aiming to transform healthcare services within a university setting. It integrates features like real-time doctor tracking, an online pharmacy, and secure medical records to enhance health outcomes for students. Built in just 36 hours, Mediclined evolved through critical feedback during two intense judging rounds, pushing us to refine and deliver a polished prototype. Though we didn’t win, making it to the Top 10 among numerous talented teams was a proud moment, showcasing our dedication, teamwork, and innovation.",
      githubLink: "https://github.com/Project-Mediclined",
      image: "/Mediclined.png",
    },
    {
      number: 3,
      name: "Molecule Visualizer",
      tags: ["DSA", "Coursework", "3D Visualization"],
      techStack: ["ReactJS", "PlotlyJS", "Gemmini API", "MUI"],
      description:
        "As part of DSA coursework, I contributed to the development of the frontend for a Molecule Visualizer web app using React JS, Material UI, and Tailwind CSS. The app enables users to add atoms and bonds, calculate bond angles, and view real-time molecular updates. I worked on algorithms for bond angle calculations and molecular geometry analysis while leveraging Plotly JS for 3D visualization and integrating with the Gemini 1.5 Flash API for molecular data. Collaborating with a team of six developers, I focused on UI design, enhancing user interaction, and optimizing algorithm performance to deliver an intuitive and dynamic tool.",
      githubLink: "https://github.com/TharunKumarrA/Molecule-Visualizer",
      image: "/Molecule-Visualizer.png",
    },
    {
      number: 4,
      name: "Library Management V2",
      tags: ["Coursework", "Full-stack", "Database"],
      techStack: ["VueJS", "Flask", "SQLite", "TailwindCSS"],
      description:
        "As part of the IITM Online Diploma in Programming, I developed a Library Management System with a modernized frontend and caching enhancements. The system supports multiple users for requesting, reading, and managing e-books while offering robust admin functionalities for CRUD operations on over 100 books and sections. Key features include search capabilities by title, author, or section, as well as options for viewing, requesting, and returning books. The integration of caching significantly improved performance, and a user-friendly interface was designed to ensure seamless navigation and interaction for all users.",
      githubLink: "https://github.com/TharunKumarrA/Library-Mgmt-V2",
      image: "/LibraryMgmtV2.jpeg",
    },
    {
      number: 5,
      name: "Library Management",
      tags: ["Backend", "CourseWork", "Database"],
      techStack: ["HTML", "CSS", "Jinja2", "Flask"],
      description:
        "As part of the IITM Online B.Sc. degree program, I developed a Library Management System designed to support multiple users with features like e-book requests, reading, and management. The system includes admin functionalities for CRUD operations on over 50 books and sections, with a streamlined search option by author or section. Users can easily view, request, and return books, all within a simplified design that enhances navigation and overall user experience.",
      githubLink: "https://github.com/TharunKumarrA/Library-Mgmt-System",
      image: "/LibraryMgmt.jpeg",
    },
    {
      number: 6,
      name: "FC Team Forge",
      tags: ["Full-Stack", "Football", "Algorithm"],
      techStack: ["VueJS", "TailwindCSS", "Ngrok", "MySQL"],
      description:
        "Developed FC Team Forge, a web application designed to streamline football team creation for a pool of 50+ real-life players. The app uses advanced algorithms to ensure 100% balanced teams by factoring in player-preferred positions and statistics. This innovation reduced team setup time by 75% compared to traditional manual methods, enhancing efficiency and fairness in team formation. Now an open-source project, it has attracted multiple contributions that have significantly enhanced its features and functionality.",
      githubLink: "https://github.com/TharunKumarrA/FC-TeamForge",
      image: "/FC-Team-Forge.png",
    },
    {
      number: 7,
      name: "AI Study Mate",
      tags: ["Frontend", "AI Chatbot", "UI/UX"],
      techStack: ["VueJS", "TailwindCSS", "Gemmini API"],
      description:
        "Developed AI StudyMate, a learning application supporting over 100 topics with AI-powered explanations and real-life applications. Integrated supplementary resources, including 10+ top websites and reference books, with an option for PDF downloads to enhance learning. Features like topic grouping into lessons, a to-do list, and a Pomodoro timer, along with a chatbot for real-time Q&A, were designed to optimize learning. While no longer actively maintained, the project serves as a valuable reference for interactive education platforms.",
      githubLink: "https://github.com/Thanus-Kumaar/AI-Study-Mate",
      image: "/AI-Study-Mate.png",
    },
    {
      number: 8,
      name: "Union Budget Explorer",
      tags: ["DBMS", "CourseWork", "Team project"],
      techStack: ["VueJS", "MySQL", "NodeJS"],
      description:
        "Developed a web application for managing and analyzing non-tax revenue details for the government, as part of a DBMS course project. The application efficiently handled over 1,000 revenue entries, enabling streamlined data storage, retrieval, and analysis. Implemented advanced database queries to facilitate insightful reporting and trend analysis.",
      githubLink: "https://github.com/TharunKumarrA/Union-Budget-Explorer",
      image: "/UBE.jpeg",
    },
  ];
  return (
    <div>
      <div className="font-heading text-h5 py-10 px-4">PROJECTS</div>
      <ProjectCardContainer projects={projectData} />
    </div>
  );
}
