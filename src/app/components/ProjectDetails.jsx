import { FaGithub, FaLink } from "react-icons/fa";

const ProjectDetails = ({ techStack, description, githubLink, link }) => {
  const handleLinkClick = (e) => {
    e.stopPropagation(); // Prevent card expansion when clicking the link
  };

  return (
    <div>
      <div className="pt-4">
        <p className="text-h6 font-thin">{techStack.join(' | ')}</p>
      </div>
      <div className="pt-4 max-w-3xl select-none pr-4 md:pr-0 text-justify">
        <p>{description}</p>
      </div>
      <div className="pt-8 flex items-center space-x-4">
        {/* GitHub Link with icon */}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="text-primary hover:underline flex items-center space-x-2"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        )}

        {/* Live Project Link with icon */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="text-primary hover:underline flex items-center space-x-2"
          >
            <FaLink className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
