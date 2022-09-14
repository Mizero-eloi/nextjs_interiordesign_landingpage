import Image from "next/image";
import React from "react";

import e1 from "../utils/e1.jpg";
import e2 from "../utils/e2.jpg";
import e3 from "../utils/e3.jpg";

const Explore = () => {
  return (
    <div
      className="flex flex-col gap-4 md:flex-row pt-32 bg-white"
      id="Inspiration"
    >
      <div className="md:w-1/2 md:block flex flex-col items-center gap-3 pl-10 md:pl-20">
        <h2 className="text-xl font-semibold md:mt-40">
          Want some great inspiration ?
        </h2>
        <p className="text-gray-600 mt-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quibusdam
          omnis, aut voluptas veritatis quo consequatur architecto odio aperiam!
          Perferendis hic deserunt ut minus accusamus eum numquam tenetur
          voluptatum ullam?
        </p>
        <button className="text-white px-8 py-3 bg-[#A98551] mt-3">
          Inspire me
        </button>
      </div>
      <div className="md:w-1/2 flex shrink-[0] gap-6 overflow-hidden">
        <div className="md:w-[270px] min-w-[270px] h-[500px] relative hover:scale-[1.01] transition-all">
          <Image
            className="cursor-pointer"
            src={e1}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-1/2 left-24  bg-[rgba(255,255,255,0.8)] md:p-3 p-8">
            <p className="text-gray-300"> 01 Living Room</p>
            <p className="m-auto w-[90%] font-semibold text-gray-700">
              Yellow Chair
            </p>
          </div>
        </div>
        <div className="md:w-[270px] min-w-[270px] h-[500px] relative hover:scale-[1.01] transition-all">
          <Image
            className="cursor-pointer"
            src={e2}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-1/2 left-24  bg-[rgba(255,255,255,0.8)] md:p-3 p-8">
            <p className="text-gray-300"> 01 Living Room</p>
            <p className="m-auto w-[90%] font-semibold text-gray-700">
              Yellow Chair
            </p>
          </div>
        </div>
        <div className="md:w-[270px] min-w-[270px] h-[500px] relative hover:scale-[1.01] transition-all">
          <Image
            className="cursor-pointer"
            src={e3}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-1/2 left-24  bg-[rgba(255,255,255,0.8)] md:p-3 p-8">
            <p className="text-gray-300"> 01 Living Room</p>
            <p className="m-auto w-[90%] font-semibold text-gray-700">
              Yellow Chair
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
