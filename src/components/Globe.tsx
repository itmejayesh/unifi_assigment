"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Point {
  x: number;
  y: number;
}

const Globe = () => {
  const [points, setPoints] = useState<Point[]>([
    { x: 122, y: 278 },
    { x: 189, y: 304 },
    { x: 287, y: 289 },
    { x: 377, y: 213 }
  ]);

  useEffect(() => {
    const animateDots = async () => {
      for (let i = 0; i < points.length; i++) {
        await new Promise(resolve => setTimeout(resolve, i * 1000)); // Adjust delay as needed
        setPoints(prevPoints => {
          return prevPoints.map((point, index) => {
            if (index === i) {
              return { ...point, opacity: 1 };
            } else {
              return { ...point, opacity: 0 };
            }
          });
        });
      }
      // After the loop completes, reset all points to initial state
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for animation to complete
      setPoints(prevPoints => prevPoints.map(point => ({ ...point, opacity: 0 })));
      // Restart animation
      animateDots();
    };

    animateDots();
  }, [points]);
  

  return (
    <div className="h-[60vh] flex justify-center w-full items-center bg-gray-400 relative">
      <div style={{ position: "relative" }}>
        <Image src={`/02.jpg`} width={500} height={20} alt="" />
        {points.map((point, index) => (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              left: `${point.x}px`,
              top: `${point.y}px`,
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "red",
              opacity: 0 // Initially hide the dot
            }}
            initial={{ x: point.x, y: point.y }} // Set initial position based on point's x and y
            animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
            transition={{ duration: 1, times: [0, 0.5, 1], repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
};

export default Globe;

