"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExpImage from "./ExpImage";
import ExpPositionContent from "./ExpPositionContent";
import ExpDateRange from "./ExpDateRange";
import AboutAttributes from "./AboutAttributes";

const experienceData = [
  {
    expImg: "/1.png",
    expImgAlt: "NSS",
    role: ["NSS Student", "Coordinator"],
    company: "NSS",
    companyDetails:
      "It's an active part of the National Service Scheme, focused on community welfare, environmental sustainability, and awareness programs.",
    start: "JUL 2023",
    end: "MAR 2025",
    expDetails:
      "As a coordinator and volunteer in NSS Unit 3, I took part in organizing awareness campaigns, cleanliness drives, and sustainability projects. I worked with peers to address social issues, promote education and health, and engage with local communities. These experiences strengthened my leadership, teamwork, and organizational skills.",
  },
  {
    expImg: "/2.png",
    expImgAlt: "Another Experience",
    role: ["Another Role"],
    company: "Another Company",
    companyDetails: "Details about another experience",
    start: "JAN 2022",
    end: "DEC 2023",
    expDetails: "Another experience description",
  },
];

const ExpMainDiv = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experienceData.length);
  };

  const currentExp = experienceData[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-24 lg:mb-52">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex flex-col items-start space-y-8 w-full px-4">
          <motion.div
            key={`image-${currentIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center w-full order-1"
          >
            <ExpImage
              src={currentExp.expImg}
              alt={currentExp.expImgAlt}
              onClick={handleImageClick}
            />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`position-${currentIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="sm:w-full lg:w-auto order-2 lg:absolute lg:-left-72 lg:-top-16"
            >
              <ExpPositionContent
                role={currentExp.role}
                company={currentExp.company}
                details={currentExp.companyDetails}
              />
            </motion.div>

            <motion.div
              key={`date-${currentIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="sm:w-full lg:w-auto order-3 lg:absolute lg:-right-52 lg:top-8"
            >
              <ExpDateRange start={currentExp.start} end={currentExp.end} />
            </motion.div>

            <motion.div
              key={`details-${currentIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="sm:w-full lg:w-auto text-center order-5 lg:absolute lg:-bottom-40 lg:-right-64 max-w-md"
            >
              {currentExp.expDetails}
            </motion.div>
          </AnimatePresence>

          <div className="w-full order-4 lg:absolute lg:-bottom-48 lg:-left-72">
            <AboutAttributes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpMainDiv;
