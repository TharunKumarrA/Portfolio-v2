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
      <div className="absolute -bottom-5 -left-10 lg:-bottom-10 lg:-left-5 transform scale-50 lg:scale-75">
        <Image
          src="/tharun-sigil.png"
          alt="Tharun Sigil"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
