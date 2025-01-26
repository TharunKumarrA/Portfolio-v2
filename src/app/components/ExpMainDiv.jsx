"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExpImage from "./ExpImage";
import ExpPositionContent from "./ExpPositionContent";
import ExpDateRange from "./ExpDateRange";
import AboutAttributes from "./AboutAttributes";

const ExpMainDiv = ({ experienceData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experienceData.length);
  };

  const currentExp = experienceData[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-24 lg:mb-52">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex flex-col items-start space-y-8 w-full px-4">
          {/* Mobile Click Prompt */}
          <div className="w-full text-center text-sm text-white opacity-25 lg:hidden">
            * Click image to view next experience
          </div>

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

          <div className="w-full order-4 lg:absolute lg:-bottom-44 lg:-left-72">
            <AboutAttributes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpMainDiv;
