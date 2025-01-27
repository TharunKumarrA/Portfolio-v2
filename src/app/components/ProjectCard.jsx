"use client";
import { useState } from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectTags from "./ProjectTags";
import ProjectDetails from "./ProjectDetails";

const ProjectCard = ({
  projectData,
  onMouseEnter,
  onMouseLeave,
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`relative flex overflow-hidden flex-col pt-24 pb-8 pl-20 text-text border-t border-b border-solid bg-secondary border-y-white max-lg:pl-5 cursor-pointer group ${className}`}
      onClick={handleCardClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ProjectHeader
        projectNumber={projectData.number}
        projectName={projectData.name}
      />

      <div
        className={`
          transition-all duration-500 ease-in-out overflow-hidden 
          ${isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className={`
            transition-all duration-500 ease-in-out transform
            ${
              isExpanded
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }
          `}
        >
          <ProjectDetails
            techStack={projectData.techStack}
            description={projectData.description}
            link={projectData.link}
            githubLink={projectData.githubLink}
          />
        </div>
      </div>

      <ProjectTags tags={projectData.tags} />
    </div>
  );
};

export default ProjectCard;
