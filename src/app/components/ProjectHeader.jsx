const ProjectHeader = ({ projectNumber, projectName }) => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-10 max-w-full select-none font-heading text-h5 md:text-h3">
      <div>[{projectNumber}]</div>
      <div>{projectName}</div>
    </div>
  );
};

export default ProjectHeader;