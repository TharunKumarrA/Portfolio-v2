const ProfileCard = ({ data }) => {
  return (
    <div className="flex justify-end items-center space-x-4 p-4 rounded-md">
      <div className="text-right">
        {data.map((item, index) => (
          <div key={index}>
            <h3 className="text-h6 font-heading my-4">+ {item.title}</h3>
            <p className="text-h6 font-heading my-4">+ {item.specialization}</p>
            {item.education.split("\n").map((line, lineIndex) => (
              <p key={lineIndex} className="text-h6 font-heading my-4">
                + {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
