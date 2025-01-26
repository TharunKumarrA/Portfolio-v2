import React from "react";
import GridWithDownArrow from "./GridWithBtn";
import TextUnderlineEffect from "./UnderlinedText";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 mx-16 lg:mx-52">
        <GridWithDownArrow />
      </div>
      <div className="absolute text-small lg:text-p font-body top-2 left-8 lg:top-4 lg:left-44 z-10">
        <span>
          THARUN&apos;S
        </span>
        <br />
        <span className="ml-2 lg:ml-4">
          PORTFOLIO
        </span>
      </div>
      <div className="absolute -bottom-44 right-2 lg:-top-16 lg:right-80 z-10 scale-[64%] lg:scale-50">
        <TextUnderlineEffect text="DARE MIGHTY" />
        <br />
        <TextUnderlineEffect text="THINGS" />
      </div>
      <div className="relative z-10 font-heading text-h4 lg:text-h1 text-text mx-20 pt-[68px] lg:mx-[306px] lg:pt-[208px]">
        <span>DEVELOPER</span>
        <br />
        <span>CRAFTING DIGITAL</span>
        <br />
        <span>EXPERIENCES</span>
      </div>
      <div className="absolute z-10 -bottom-[270px] lg:-bottom-28 lg:right-24 font-normal text-p text-left w-64 lg:w-80 mx-8 lg:mx-0">
      Crafting innovative solutions through creativity and tech. Designing experiences that inspire and make an impact.
      </div>
    </div>
  );
};

export default Hero;
