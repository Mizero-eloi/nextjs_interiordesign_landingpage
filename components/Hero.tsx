import Image from "next/image";
import React from "react";
import hero from "../utils/hero.jpg";

const Hero = () => {
  return (
    <div className="md:flex gap-2 mt-1 bg-white" id="Home">
      <div className="md:w-[50%]  h-[530px] bg-green-400 relative">
        <Image src={hero} alt="logo" layout="fill" objectFit="cover" priority />
        {/* <div className="absolute w-full h-full bg-[rgba(172,135,99,0.1)]"></div> */}
      </div>

      <div className=" md:w-[50%] flex flex-col justify-center w-3/4">
        <div className="gap-6 md:pl-3 pl-6">
          <p className="text-xs text-gray-500 hidden md:block">New Arrival</p>
          <h2 className="mt-3 font-bold text-3xl md:w-full">
            {" "}
            Discover Our <br /> New Collection{" "}
          </h2>

          <p className="md:w-[67%] mt-3 text-gray-600 text-lg">
            Make indoor spaces functional safe and beautiful by determining
            space requirements and selecting essential and decorative items such
            as colors, lighting and materials.
          </p>
          <button className="text-white px-8 py-3 bg-[#A98551] mt-3">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
