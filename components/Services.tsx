import Image from "next/image";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import image247 from "../utils/247.png";
import verified from "../utils/verified.png";

const Services = () => {
  return (
    <div className="px-6 py-16 flex flex-wrap gap-24 bg-white justify-center">
      <div className="flex md:flex-row flex-col gap-6 items-center">
        <TbTruckDelivery className="text-5xl" />
        <div className="">
          <h2 className="font-bold">Free Delivery</h2>
          <p className="text-gray-600">Lorem ipsum dolot sit amet</p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-6 items-center">
        <Image src={image247} alt="24/7" width="40" height="40" />
        <div className="">
          <h2 className="font-bold">Support 24/7</h2>
          <p className="text-gray-600">Lorem ipsum dolot sit amet</p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-6 items-center">
        <Image src={verified} alt="24/7" width="40" height="40" />
        <div className="">
          <h2 className="font-bold">100% Authentic</h2>
          <p className="text-gray-600">Lorem ipsum dolot sit amet</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
