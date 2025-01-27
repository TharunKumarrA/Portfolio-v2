const ProjectTags = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-3 lg:gap-6 items-center select-none self-end px-16 mt-9 text-p lg:text-h6 max-lg:px-5">
      {tags.map((tag, index) => (
        <div key={index} className="self-stretch my-auto" tabIndex={0}>
          + {tag}
        </div>
      ))}
    </div>
  );
};

export default ProjectTags;
