"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Point {
  x: number;
  y: number;
}

interface DotProps {
  x: string;
  y: string;
  isVisible: boolean;
}

const coordinates:Point[] = [
  { x: 118, y: 273 },
  { x: 185, y: 300 },
  { x: 287, y: 282 },
  { x: 373, y: 210 },
];

const Dot:React.FC<DotProps> = ({ x, y, isVisible }) => (
  <motion.div
    initial={{ opacity: 0, scale:0.5 }}
    animate={{ opacity: isVisible ? 1 : 0, scale: 1.5 }}
    transition={{ duration: 1 }}
    style={{
      position: "absolute",
      width: '2%',
      height: '2%',
      borderRadius: "50%",
      backgroundColor: "blue",
      top: y,
      left: x,
    }}
  />
);

const Globe: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % coordinates.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[60vh] flex justify-center w-full items-center  bg-gray-300 relative">
      <div className=" relative h-auto w-[60vh]">
        <Image src={`/02.jpg`} width={500} height={500} alt="" className=" mix-blend-multiply" layout="responsive"/>
        <AnimatePresence>
          {coordinates.map((coord, index) => (
            <Dot
              key={index}
              x={`${(coord.x / 500) * 100}%`}
              y={`${(coord.y / 500) * 100}%`}
              isVisible={index === visibleIndex}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Globe;
