'use client'
import React from "react";
import { motion } from "framer-motion";

const TextMarque = () => {
  
  return (
    <section>
      <div className="h-[30vh] xl:h-[45vh]">
        <div className="overflow-x-hidden h-full w-full my-auto">
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
        className="text-white text-5xl md:text-6xl lg:text-9xl font-outline-2 uppercase p-8 whitespace-nowrap
        ">bridging innovation & regulation</motion.h1>

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
          className="text-white text-5xl md:text-6xl lg:text-9xl font-outline-2 uppercase p-8 whitespace-nowrap">bridging innovation
           & regulation</motion.h1>
        </div>
      </div>
    </section>
  );
};

export default TextMarque;
