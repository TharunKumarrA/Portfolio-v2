import TextUnderlineEffect from "./UnderlinedText";

const ExpPositionContent = ({ role, company, details }) => {
  return (
    <div className="flex flex-col gap-4 px-8 md:px-4">
      <div className="flex flex-col gap-2">
        {role.map((role, index) => (
          <div key={index}>
            <TextUnderlineEffect text={role} />
          </div>
        ))}
      </div>
      <div className="text-h6 md:text-h5 font-heading text-text">
        {company}
      </div>
      <div className="hidden lg:block text-p font-body text-text max-w-lg">
        {details}
      </div>
    </div>
  );
};

export default ExpPositionContent;