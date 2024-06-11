'use client'
import React from "react";
import { motion } from "framer-motion";

const TextMarque = () => {
  
  return (
    <section>
      <div className="h-[40vh]">
        <div className=" overflow-hidden h-full">
        <motion.h1 
        initial={{ x: "-100%" }}
        animate={{ x: ["-150%", "0%", "150%"]}}
        transition={{
          duration: 6,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="left-to-right text-white text-9xl text-nowrap font-outline-2
        uppercase px-2 py-4">bridging innovation & regulation</motion.h1>

          <motion.h1 
        initial={{ x: "-100%" }}
        animate={{ x: ["150%", "0%", "-150%"] }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: "reverse"
        }}
          className="text-white text-9xl text-nowrap font-outline-2 uppercase px-2 py-4">bridging innovation
           & regulation</motion.h1>
        </div>
      </div>
    </section>
  );
};

export default TextMarque;
