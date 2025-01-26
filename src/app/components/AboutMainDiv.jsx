import UnderlinedText from "./underlinedText";
import ProfileImage from "./profileImage";
import ProfileCard from "./profileCard";

const aboutMainDiv = () => {
  const data = [
    {
      title: "Full-Stack Developer",
      specialization: "Specialized in UI/UX Design",
      education:
        "Generative AI & LLM Enthusiast\nCSE '26 | Amrita University\nIIT Madras Online BSc",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mx-auto lg:mx-0 justify-center items-center px-2">
      {/* Name Section */}
      <div className="flex flex-col gap-1 lg:mr-16 lg:my-16 relative  -left-20 lg:-left-0 lg:-top-32">
        <UnderlinedText text="THARUN" />
        <div className="ml-4 lg:ml-8">
          <UnderlinedText text="KUMARR A" />
        </div>
      </div>

      {/* Profile Image */}
      <ProfileImage imgSrc={"/Tharun_Kumarr.jpg"} altText={"Profile Picture"} />

      {/* Profile Card */}
      <ProfileCard data={data} />
    </div>
  );
};

export default aboutMainDiv;
