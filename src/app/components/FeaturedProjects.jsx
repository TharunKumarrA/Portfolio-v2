import ProjectCardContainer from "./ProjectCardContainer";
import Link from "next/link";

const FeaturedProjects = () => {
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
