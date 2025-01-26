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
    { name: "Github", tag: <FaGithub className="text-h4 hover:scale-110" /> },
    {
      name: "LinkedIn",
      tag: <FaLinkedin className="text-h4 hover:scale-110" />,
    },
    { name: "Twitter", tag: <FaTwitter className="text-h4 hover:scale-110" /> },
    {
      name: "Instagram",
      tag: <FaInstagram className="text-h4 hover:scale-110" />,
    },
  ];

  return (
    <footer
      className="flex flex-col md:flex-row justify-between items-center p-6 bg-secondary text-text 
      space-y-4 md:space-y-0 md:space-x-4 mt-10 lg:mt-20"
    >
      <div className="text-center md:text-left w-full md:w-auto">
        <p className="text-h5 lg:text-h4 font-heading">Let's</p>
        <p className="text-h5 lg:text-h4 font-heading">Connect</p>
      </div>

      <div
        className="flex flex-col items-center md:items-end w-full md:w-auto 
        font-heading gap-4 md:mx-16"
      >
        <div className="flex items-center gap-2 mb-2">
          <FaEnvelope size={20} />
          <span className="text-h6 lg:text-h5 truncate max-w-[200px] lg:max-w-max">{email}</span>
          <button
            onClick={handleCopyEmail}
            className="text-text hover:text-opacity-50 ml-2"
          >
            {copied ? "Copied!" : <FaCopy size={16} />}
          </button>
        </div>

        <div className="flex gap-4 justify-center w-full">
          {socialIcons.map((icon, index) => (
            <AttributesIcon
              key={index}
              name=""
              svgSrc={icon.tag}
              className="transform transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};
