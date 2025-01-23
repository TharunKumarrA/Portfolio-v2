"use client"
import { useState } from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const ProjectCardContainer = ({ projects }) => {
  const [activeImageSrc, setActiveImageSrc] = useState(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setImagePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} className="relative">
      {projects.map((project) => (
        <ProjectCard 
          key={project.number} 
          projectData={project} 
          onMouseEnter={() => setActiveImageSrc(project.image)}
          onMouseLeave={() => setActiveImageSrc(null)}
        />
      ))}
      {activeImageSrc && (
        <div 
          className="fixed z-50 pointer-events-none"
          style={{ 
            left: `${imagePosition.x + 260}px`, 
            top: `${imagePosition.y + 160}px`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div 
            className="relative overflow-hidden rounded-md shadow-2xl"
            style={{
              width: '480px', 
              height: '270px'
            }}
          >
            <Image 
              src={activeImageSrc} 
              alt="Project Image" 
              fill
              style={{
                objectFit: 'cover',
                transition: 'opacity 0.5s, transform 0.5s',
                opacity: activeImageSrc ? 1 : 0,
                transform: activeImageSrc ? 'scale(1)' : 'scale(0.9)'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCardContainer;