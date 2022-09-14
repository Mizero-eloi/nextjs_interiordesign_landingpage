import Image from "next/image";
import React from "react";
import popular1 from "../utils/popular1.jpg";
import popular2 from "../utils/popular2.jpg";
import popular3 from "../utils/popular3.jpg";

const PopularCollection = () => {
  return (
    <div className="bg-white pt-6" id="Popular">
      <h2 className="md:w-[15%] w-[30%] text-xl m-auto font-bold ">
        {" "}
        Popular Collection
      </h2>
      <p className="md:w-[27%] w-[34%] m-auto mt-3  text-gray-600">
        Make Indoor Spaces Functional, Safe And Beautiful
      </p>

      <div className="flex md:flex-row flex-col gap-5 w-[90%] justify-center  m-auto mt-28">
        <div className="md:w-[30%] h-[500px] relative hover:scale-[1.01] transition-all">
          <Image
            className="cursor-pointer"
            src={popular1}
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

        <div className="md:w-[30%] h-[500px] relative md:-mt-12 hover:scale-[1.01] transition-all">
          <Image
            className="cursor-pointer"
            src={popular2}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-1/2 left-24   bg-[rgba(255,255,255,0.8)] md:p-3 p-8 ">
            <p className="text-gray-300"> 01 Living Room</p>
            <p className="m-auto w-[90%] font-semibold text-gray-700">
              Yellow Chair
            </p>
          </div>
        </div>

        <div className="md:w-[30%] h-[500px] relative hover:scale-[1.01] transition-all">
          <Image
            className="cursor-pointer"
            src={popular3}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-1/2 left-24   bg-[rgba(255,255,255,0.8)] md:p-3 p-8">
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

export default PopularCollection;
