"use client";
import React, { useState, useEffect } from "react";

const TextUnderlineEffect = ({ text }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scale = isMobile ? 1.15 : 2;

  if (!isClient)
    return <span className="text-h5 lg:text-h3 font-heading">{text}</span>;

  return (
    <div className="relative inline-block">
      <span className="relative text-h5 lg:text-h3 font-heading z-20">
        {text}
      </span>
      <div
        className="absolute bottom-2 left-0 h-1 lg:h-2 bg-red-500 transition-width duration-500 ease-in-out z-10"
        style={{ width: `${text.length * scale}rem` }}
      />
    </div>
  );
};

export default TextUnderlineEffect;
