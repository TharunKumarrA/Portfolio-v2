import Image from "next/image";
import CosmosLogo from "./svg/CosmosLogo";

const ProfileImage = ({ imgSrc, altText }) => {
  return (
    <div className="relative p-6 sm:p-0">
      <Image
        src={imgSrc}
        alt={altText}
        width={520}
        height={520}
        className="rounded-full mx-auto"
      />
      <div className="absolute bottom-0 -left-10 lg:bottom-2 lg:left-2 transform scale-50 lg:scale-75">
        <CosmosLogo />
      </div>
    </div>
  );
};

export default ProfileImage;
