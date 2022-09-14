import Image from "next/image";
import React from "react";
import livingroom from "../utils/livingroom.jpg";
import bedroom from "../utils/bedroom.jpg";
import dinningroom from "../utils/dinningroom.jpg";

const Spaces = () => {
  return (
    <div className="bg-white pt-12" id="Spaces">
      <h2 className="text-xl font-bold capitalize  text-center">
        Aestatically Planning spaces
      </h2>
      <p className="text-gray-600 text-center mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        numquam ipsam consectetur, incidunt autem libero sapiente rerum possimus
      </p>

      <div className="flex md:flex-row flex-col md:gap-5 gap-7 w-[90%] justify-center  m-auto mt-28">
        <div className="md:w-[30%] h-[500px] relative md:-mt-12 hover:scale-[1.01] transition-all">
          <Image
            className="cursor-pointer"
            src={livingroom}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
          <p className="absolute -bottom-6 text-center w-full font-semibold">
            Living
          </p>
        </div>

        <div className="md:w-[30%] h-[500px] relative md:-mt-12 hover:scale-[1.01] transition-all">
          <Image
            className="cursor-pointer"
            src={dinningroom}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
          <p className="absolute -bottom-6 text-center w-full font-semibold">
            Dinning
          </p>
        </div>

        <div className="md:w-[30%] h-[500px] relative md:-mt-12 hover:scale-[1.01] transition-all">
          <Image
            className="cursor-pointer"
            src={bedroom}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
          <p className="absolute -bottom-6 text-center w-full font-semibold">
            bedroom
          </p>
        </div>
      </div>
    </div>
  );
};

export default Spaces;
