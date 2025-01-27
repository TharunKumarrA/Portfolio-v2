"use client";
import { FiArrowDown } from "react-icons/fi";

const DownArrowBox = () => {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight + 100,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleClick}
      className="w-12 h-12 lg:w-24 lg:h-24 border-text border-opacity-30 border-2 bg-primary flex justify-center items-center cursor-pointer hover:bg-[#E96B5C] hover:border-opacity-80 transition-colors duration-200 active:bg-primary active:border-opacity-80"
    >
      <FiArrowDown className="text-black text-h5 lg:text-h3 hover:text-opacity-80" />
    </div>
  );
};

export default DownArrowBox;
