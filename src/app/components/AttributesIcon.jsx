import Image from "next/image";
import OuterCircle from "./svg/OuterCircle";

const PublicSpeakingIcon = ({ name, svgSrc }) => {
  return (
    <div className="relative inline-block group">
      {/* Tooltip (above others on the y-axis) */}
      <p className="absolute -top-8 left-1/2 -translate-x-1/2 text-text font-body group-hover:opacity-100 opacity-0 transition-opacity duration-300 text-center text-small min-w-24">
        {name}
      </p>
      {/* Centered OuterCircle */}
      <div className="relative flex items-center justify-center w-full h-full">
        <OuterCircle />
        {/* Centered SVG */}
        <div className="absolute inset-0 flex items-center justify-center">
          {svgSrc}
        </div>
      </div>
    </div>
  );
};

export default PublicSpeakingIcon;
