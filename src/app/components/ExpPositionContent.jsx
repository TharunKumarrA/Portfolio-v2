import TextUnderlineEffect from "./UnderlinedText";

const ExpPositionContent = ({ role, company, details }) => {
  return (
    <div className="flex flex-col gap-4 pr-8 lg:px-4">
      <div className="flex flex-col gap-2">
        {role.map((role, index) => (
          <div className="" key={index}>
            <TextUnderlineEffect text={role} />
          </div>
        ))}
      </div>
      <div className="text-h6 lg:text-h5 font-heading text-text">{company}</div>
      <div className="hidden lg:block text-p font-body text-text max-w-sm">
        {details}
      </div>
    </div>
  );
};

export default ExpPositionContent;
