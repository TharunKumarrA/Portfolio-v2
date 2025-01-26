"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ExpImage = ({ src, alt }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{
        width: "585px",
        height: "390px",
        aspectRatio: "3:2",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="relative w-full h-full">
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
      </div>
      {!isMobile && isHovering && (
        <div
          className="absolute bg-black bg-opacity-80 rounded-full flex items-center justify-center"
          style={{
            width: "80px",
            height: "80px",
            left: position.x - 30,
            top: position.y - 30,
            transition: "all 0.1s ease",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ExpImage;
