import Image from "next/image";
import React from "react";
import inImage from "../utils/inImage.jpg";

const Inspiration = () => {
  return (
    <div className="md:flex gap-6 bg-white pt-24" id="Explore">
      <div className="md:w-1/2 md:block flex flex-col items-center gap-3 pl-10 md:pl-20">
        <h2 className="text-xl font-semibold md:mt-60">Interior Designer</h2>
        <p className="text-gray-600 mt-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quibusdam
          omnis, aut voluptas veritatis quo consequatur architecto odio aperiam!
          Perferendis hic deserunt ut minus accusamus eum numquam tenetur
          voluptatum ullam?
        </p>
        <button className="text-white px-8 py-3 bg-[#A98551] mt-3">
          Explore
        </button>
      </div>
      <div className="md:w-1/2 md:h-[700px] h-[300px] relative mt-2">
        <Image
          src={inImage}
          alt="inspirationalImage"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
};

export default Inspiration;
