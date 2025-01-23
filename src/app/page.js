import { NavigationBar } from "./components/NavigationBar";
import ProjectCardContainer from "./components/ProjectCardContainer.jsx";
export default function Home() {
  const projectData = [
    {
      number: 1,
      name: "Project 1",
      tags: ["tag1", "tag2", "tag3"],
      techStack: ["tech1", "tech2", "tech3"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      githubLink: "https://github.com/TharunKumarrA",
      image: "/1.png",
    },
    {
      number: 2,
      name: "Project 2",
      tags: ["tag4", "tag5", "tag6"],
      techStack: ["tech4", "tech5", "tech6"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      githubLink: "https://github.com/TharunKumarrA/",
      image: "/2.png",
    },
  ];

  return (
    <>
      <NavigationBar />
      Tharun&apos;s Portfolio
      <ProjectCardContainer projects={projectData} />
    </>
  );
}
