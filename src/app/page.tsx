import Globe from "@/components/Globe";
import HeroBanner from "@/components/HeroBanner";
import Service from "@/components/Service";
import TextMarque from "@/components/TextMarque";
import React from "react";

const HomePage = () => {
  return (
    <main className="">
      <nav className="flex justify-center gap-10 p-5">
        {
          ["Home", "About", 'Contact Us'].map((item,indx) =>(
            <h2 key={indx} className="bg-gradient-to-r from-gray-700 to-white bg-[length:100%_2px] bg-no-repeat bg-bottom pb-2 cursor-pointer">{item}</h2>
          ))
        }
      </nav>
      <HeroBanner />
      <TextMarque />
      <Service />
      <Globe />
    </main>
  );
};

export default HomePage;
