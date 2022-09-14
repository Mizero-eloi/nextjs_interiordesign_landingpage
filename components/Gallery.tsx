import Image from "next/image";
import React from "react";

import e1 from "../utils/e1.jpg";
import e2 from "../utils/e2.jpg";
import e3 from "../utils/e3.jpg";
import livingroom from "../utils/livingroom.jpg";
import bedroom from "../utils/bedroom.jpg";
import dinningroom from "../utils/dinningroom.jpg";
import popular1 from "../utils/popular1.jpg";
import popular2 from "../utils/popular2.jpg";
import popular3 from "../utils/popular3.jpg";
import hero from "../utils/hero.jpg";

const Gallery = () => {
  return (
    <div className="bg-white pt-32" id="Gallery">
      <p className="text-center font-semibold text-xl mb-10">Gallery</p>
      <div className="flex shrink-[0] gap-6 overflow-hidden">
        <div className="absolute w-full h-full z-30 bg-[rgba(255,255,255,0.2)]"></div>
        <div className="md:w-[360px] min-w-[360px] h-[500px] relative hover:scale-[1.01] transition-all">
          <Image
            className="cursor-pointer"
            src={e1}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="md:w-[300px] min-w-[300px] h-[500px] relative hover:scale-[1.01] transition-all mt-10">
          <Image
            className="cursor-pointer"
            src={e2}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="md:w-[270px] min-w-[270px] h-[550px] relative hover:scale-[1.01] transition-all mt-16">
          <Image
            className="cursor-pointer"
            src={e3}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="md:w-[270px] min-w-[270px] h-[500px] relative hover:scale-[1.01] transition-all mt-7">
          <Image
            className="cursor-pointer"
            src={livingroom}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="md:w-[270px] min-w-[270px] h-[500px] relative hover:scale-[1.01] transition-all">
          <Image
            className="cursor-pointer"
            src={bedroom}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      {/* second flex box  */}

      <div className="flex  shrink-[0] gap-6 overflow-hidden -mt-24">
        <div className="absolute w-full h-full z-30 bg-[rgba(255,255,255,0.2)]"></div>
        <div className="md:w-[200px] min-w-[200px] h-[500px] relative hover:scale-[1.01] transition-all ">
          <Image
            className="cursor-pointer "
            src={dinningroom}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="md:w-[300px] min-w-[300px] h-[500px] relative hover:scale-[1.01] transition-all mt-10">
          <Image
            className="cursor-pointer"
            src={popular1}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="md:w-[360px] min-w-[360px] h-[500px] relative hover:scale-[1.01] transition-all mt-32">
          <Image
            className="cursor-pointer"
            src={popular2}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="md:w-[200px] min-w-[200px] h-[400px] relative hover:scale-[1.01] transition-all mt-40">
          <Image
            className="cursor-pointer"
            src={popular3}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="md:w-[270px] min-w-[270px] h-[500px] relative hover:scale-[1.01] transition-all mt-10">
          <Image
            className="cursor-pointer"
            src={hero}
            alt="logo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
