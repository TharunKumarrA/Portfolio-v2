"use client";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaCopy,
  FaEnvelope,
} from "react-icons/fa";
import AttributesIcon from "./AttributesIcon";

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "tharunkumarra@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialIcons = [
    {
      name: "",
      tag: <FaGithub className="text-h4 hover:scale-110" />,
      url: "https://github.com/TharunKumarrA",
    },
    {
      name: "",
      tag: <FaLinkedin className="text-h4 hover:scale-110" />,
      url: "https://linkedin.com/in/tharun-kumarr",
    },
    {
      name: "",
      tag: <FaTwitter className="text-h4 hover:scale-110" />,
      url: "https://x.com/astro_tharun",
    },
    {
      name: "",
      tag: <FaInstagram className="text-h4 hover:scale-110" />,
      url: "https://instagram.com/astro_tharun_",
    },
  ];

  return (
    <footer
      className="flex flex-col lg:flex-row justify-between items-center p-6 bg-secondary text-text 
      space-y-4 lg:space-y-0 lg:space-x-4 mt-10 lg:mt-20"
    >
      <div className="text-center lg:text-left w-full lg:w-auto">
        <p className="text-h5 lg:text-h4 font-heading">Let's</p>
        <p className="text-h5 lg:text-h4 font-heading">Connect</p>
      </div>

      <div
        className="flex flex-col items-center lg:items-end w-full lg:w-auto 
        font-heading gap-4 lg:mx-16"
      >
        <div className="flex items-center gap-2 mb-2">
          <FaEnvelope size={20} />
          <span className="text-h6 lg:text-h5 truncate max-w-[200px] lg:max-w-max">
            {email}
          </span>
          <button
            onClick={handleCopyEmail}
            className="text-text hover:text-opacity-50 ml-2"
          >
            {copied ? "Copied!" : <FaCopy size={16} />}
          </button>
        </div>

        <div className="flex gap-4 justify-center w-full">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-opacity-75 transition-opacity"
            >
              <AttributesIcon
                name={icon.name}
                svgSrc={icon.tag}
                className="transform transition-transform duration-300 hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
