"use client";
import React, { useEffect, useState } from "react";
import { BsArrow90DegLeft } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const HeroBanner = () => {
  const texts = [
    "Empowering you with Technology",
    "Empowering you with Regulation",
  ];
  const [currentText, setCurrentText] = useState(0);
  console.log(currentText);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 5000); // change text every 5 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  const splitText = (text: string) => {
    const words = text.split(" ");
    const firstPart = words.slice(0, 3).join(" ");
    const lastWord = words[3];

    return { firstPart, lastWord };
  };

  return (
    <section className="h-[60vh] bg-[#4339b1] flex justify-center items-center relative">
      <video
        src="./01.mp4"
        className="absolute inset-0 object-cover w-full h-full opacity-50 filter brightness-75"
        autoPlay
        muted
        loop
      />
      <div className="flex justify-end sm:justify-center relative w-[80%] sm:w-full overflow-y-hidden">
        <AnimatePresence>
          {currentText === 0 && (
            <motion.p
              key={texts[currentText]}
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-white mt-2 font-light absolute text-xs sm:text-lg -left-[5%] sm:left-[6%] md:left-[9%] lg:left-[17%] xl:left-[23%] 2xl:left-[28%] text-nowrap"
            >
              {splitText(texts[currentText]).firstPart} <br />
              <span className="font-bold">
                {splitText(texts[currentText]).lastWord}
              </span>
            </motion.p>
          )}
          {currentText === 1 && (
            <motion.p
              key={texts[currentText]}
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 500, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-white mt-2 font-light absolute text-xs sm:text-lg -left-[5%] sm:left-[6%] md:left-[9%] lg:left-[17%] xl:left-[23%] 2xl:left-[28%] text-nowrap"
            >
              {splitText(texts[currentText]).firstPart} <br />
              <span className="font-bold">
                {splitText(texts[currentText]).lastWord}
              </span>
            </motion.p>
          )}
        </AnimatePresence>

        <BsArrow90DegLeft className="mx-5 mt-2 size-10 text-white fade-blue" />

        <div className="flex flex-col items-start justify-start h-full">
          <h1 className="text-white text-xl md:text-3xl lg:text-4xl z-10 uppercase leading-[5vh] md:leading-[6vh] lg:leading-[7vh] font-medium">
            <span className=" pb-2 bg-gradient-to-r from-gray-700 to-white bg-[length:100%_2px] bg-no-repeat bg-bottom">
              bridging
            </span>
            <br />
            innovation & <br />
            <span className="pb-2 bg-gradient-to-r from-gray-700 to-white bg-[length:100%_2px] bg-no-repeat bg-bottom">
              regulation
            </span>
          </h1>

          <button className="bg-[#7367F0] text-white text-xs md:text-xl uppercase px-5 py-2 rounded-lg mt-4">
            get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
