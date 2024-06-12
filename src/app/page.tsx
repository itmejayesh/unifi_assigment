'use client'
import Globe from "@/components/Globe";
import HeroBanner from "@/components/HeroBanner";
import Service from "@/components/Service";
import TextMarque from "@/components/TextMarque";
import debounce from "debounce";
import React from "react";

const HomePage = () => {
  const [header, setHeader] = React.useState(false);
  const scrollHeader = () => {
		if (window.scrollY >= 180) {
			setHeader(true);
		} else {
			setHeader(false);
		}
	};
  React.useEffect(() => {
		const debouncedScroll = debounce(scrollHeader, 100);
		window.addEventListener("scroll", debouncedScroll);

		return () => {
			window.removeEventListener("scroll", debouncedScroll);
		};
	}, []);
  return (
    <main className="">
      <nav className={`flex justify-center rounded-xl gap-10 p-5 w-full bg-white z-10 shadow-md transition-transform duration-500 
      ease-in-out ${header? "sticky top-0 bg-transparent border-2 w-[75%] mx-auto":""}`}>
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
