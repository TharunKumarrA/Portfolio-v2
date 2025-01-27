"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ExpImage = ({ images, alt, onClick }) => {
  const [position, setPosition] = useState({ x: -50, y: -50 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const slideshowTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(slideshowTimer);
  }, [images.length]);

  const handleMouseMove = (e) => {
    if (containerRef.current && !isMobile) {
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
      className={`relative overflow-hidden w-full max-w-[380px] lg:max-w-[585px] mx-auto ${
        isMobile ? "aspect-[3/2]" : "aspect-[3/2]"
      } cursor-pointer`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      <div className="relative w-full h-full">
        {images.map((src, index) => (
          <div
            key={src}
            className="absolute w-full h-full transition-opacity duration-1000"
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
              zIndex: currentImageIndex === index ? 1 : 0,
            }}
          >
            <Image
              src={src}
              alt={`${alt} ${index + 1}`}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        ))}
      </div>
      {!isMobile && isHovering && (
        <div
          className="absolute bg-black bg-opacity-80 rounded-full flex items-center justify-center z-10"
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
