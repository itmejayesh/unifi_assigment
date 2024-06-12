"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Service = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <section className="bg-black p-10">
      <div className="h-full w-full lg:w-1/2 lg:mx-auto rounded-xl bg-gradient-to-b bg-grad from-white via-[#7367F0] to-[#7367F0] p-1">
        <div className=" bg-gray-600 h-full w-full overflow-hidden flex flex-col rounded-xl ">
          <h2 className="text-white text-4xl text-center p-5 capitalize py-5">
            Explore Our Service
          </h2>

          <div className="flex justify-center w-full h-full p-5 gap-5 flex-wrap">
            {/* animate div */}
            <motion.div
              className="bg-gradient-to-tr from-black/60 via-[#7367F0] to-[#5247ca]  w-60 h-80 relative rounded-3xl flex flex-col flex-wrap justify-center items-center"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.div
                className="size-36 bg-blue-600 shadow-xl -mt-9 mb-6 flex justify-center items-center"
                initial={{ opacity: 1 }}
                animate={{
                  opacity: isHovered ? 0.3 : 1,
                  y: isHovered ? 100 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                {/* image */}
                image
              </motion.div>
              <motion.h3
                className={`text-center text-white uppercase font-medium text-2xl  ${isHovered ? "text-lg pb-0 pt-5" : "pb-5"}`}
                initial={{ y: 0 }}
                animate={{ y: isHovered ? -150 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {!isHovered ? (
                  <>
                    tech <br />
                    solutions
                  </>
                ) : (
                  <>tech solutions</>
                )}
              </motion.h3>
              {isHovered && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: isHovered ? -120 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="list-disc list-inside text-white"
                >
                  <li>Web Development</li>
                  <li>UI/UX Design</li>
                  <li>App Development</li>
                  <li>UI/UX Design</li>
                  <li>App Development</li>
                </motion.ul>
              )}

              <button className="px-10 py-2 bg-blue-500 text-white rounded-xl absolute bottom-0 transform left-10 right-10 text-xl mb-4">
                Browse
              </button>
            </motion.div>

            <motion.div
              className=" bg-gradient-to-tr from-black/60 via-[#7367F0] to-[#5247ca]  w-60 h-80 relative rounded-3xl flex flex-col justify-center items-center"
              onHoverStart={() => setIsHovered2(true)}
              onHoverEnd={() => setIsHovered2(false)}
            >
              <motion.div
                className="size-36 bg-blue-600 shadow-xl -mt-9 mb-6 flex justify-center items-center"
                initial={{ opacity: 1 }}
                animate={{
                  opacity: isHovered2 ? 0.3 : 1,
                  y: isHovered2 ? 100 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                {/* image */}
                image
              </motion.div>
              <motion.h3
                className={`text-center text-white uppercase font-medium text-2xl ${isHovered ? "text-lg pb-0 pt-5" : "pb-5"}`}
                initial={{ y: 0 }}
                animate={{ y: isHovered2 ? -150 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {!isHovered2 ? (
                  <>
                    tax <br />
                    solutions
                  </>
                ) : (
                  <>tax solutions</>
                )}
              </motion.h3>
              {isHovered2 && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: isHovered2 ? -120 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="list-disc list-inside text-white capitalize"
                >
                  <li>Buisness Setup</li>
                  <li>Tax compilation</li>
                  <li>Trade mark and IP</li>
                  <li>Other</li>
                </motion.ul>
              )}

              <button className="px-10 py-2 bg-blue-500 text-white rounded-xl absolute bottom-0 transform left-10 right-10 text-xl mb-4">
                Browse
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
