import ProjectCardContainer from "./ProjectCardContainer";
import Link from "next/link";

const FeaturedProjects = () => {
  const projectData = [
    {
      number: 1,
      name: "SustAIn",
      tags: ["Sustainability", "AI", "Chrome Extension"],
      techStack: ["ReactJS", "Flask", "Vertex AI", "AutoML", "ExpressJS"],
      description:
        "Co-developed SustAIn, a browser extension that displays real-time carbon emissions and power consumption metrics for AI web platforms. Used by 25+ users and submitted to the GDG On-Campus Solutions Challenge 2025. The system uses a lightweight ML model trained with Google AutoML on Vertex AI to classify user queries and estimate their environmental impact. The frontend is optimized for performance and resiliency with retry, fallback, and timeout logic—cutting latency spikes by 40%.",
      githubLink: "https://github.com/SustAIn-GDG/SustAIn-Chrome-Extension",
      link: "https://chromewebstore.google.com/detail/sustain/bhjkhbmcamcpeebfobejnhnkghkfhegp?utm_source=item-share-cb",
      image: "/SustAIn.png",
    },
    {
      number: 2,
      name: "Pragati '25",
      tags: ["Frontend", "AI Chatbot", "Uni-fest"],
      techStack: ["NextJS", "TailwindCSS", "GSAP", "Vertex AI", "NodeJS"],
      description:
        "Led a 14-member team for Pragati '25, the official business fest website of Amrita School of Business. Enhanced mobile UI/UX, doubling daily active users and reducing bounce rate by 15%. Integrated an AI-powered chatbot using Vertex AI, PayU payment system, and supported over 360 successful registrations. The site featured GSAP-based animations and responsive design for seamless interactions.",
      githubLink: "https://github.com/Pragati-2025/",
      link: "https://pragati-frontend-2025.vercel.app/",
      image: "/Pragati.png",
    },
  ];

  return (
    <div>
      <div className="font-heading text-h5 pb-10 px-4">FEATURED PROJECTS</div>
      <ProjectCardContainer projects={projectData} />
      <div className="flex justify-center pt-10">
        <Link
          href="/projects"
          className="font-body text-lg border-2 border-text px-12 py-3 hover:bg-text hover:text-primary transition-colors duration-200"
        >
          More Projects
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
