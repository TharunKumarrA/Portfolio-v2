const ProjectHeader = ({ projectNumber, projectName }) => {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-10 max-w-full select-none font-heading text-h5 lg:text-h3">
      <div>[{projectNumber}]</div>
      <div>{projectName}</div>
    </div>
  );
};

export default ProjectHeader;
