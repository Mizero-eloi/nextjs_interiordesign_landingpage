import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navList } from "../utils/constants";
import Logo from "../utils/logo.png";
import profile from "../utils/profile.jpg";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";

const Navbar = () => {
  const [isShowSideBar, setIsShowSideBar] = useState(false);

  useEffect(() => {
    if (isShowSideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isShowSideBar]);

  return (
    <div className="md:px-20 px-10  flex justify-between items-center text-gray-500 hover:text-gray-700 bg-white sticky top-0 z-50">
      {/* logo */}
      <Link href="/">
        <div className="w-[70px] md:w-[75px] ">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="logo"
            layout="responsive"
            priority
          />
        </div>
      </Link>

      <div className="md:hidden">
        <button className="text-xl" onClick={() => setIsShowSideBar(true)}>
          <FiMenu />
        </button>
      </div>

      {isShowSideBar && (
        <div className="absolute bg-white z-50 w-full h-[100vh] top-0 left-0 p-3">
          <button
            className="text-xl float-right mr-3 mt-3"
            onClick={() => setIsShowSideBar(false)}
          >
            <ImCancelCircle />
          </button>

          <ul className="pt-3 flex flex-col gap-5 text-xl  w-1/2 m-auto mt-24">
            {navList.map((i) => (
              <a
                key={i}
                href={`/#${i}`}
                onClick={() => setIsShowSideBar(false)}
              >
                <li>{i}</li>
              </a>
            ))}
          </ul>
        </div>
      )}

      <ul className="pt-3 hidden md:flex md:gap-6">
        {navList.map((i) => (
          <a key={i} href={`/#${i}`}>
            <li>{i}</li>
          </a>
        ))}
      </ul>

      <div className="hidden md:flex gap-5 text-xl items-center text-gray-600">
        <AiOutlineHeart />
        <AiOutlineShoppingCart />
        <div className="w-9 h-9 relative bg-red-500 rounded-full">
          <Image
            className="cursor-pointer rounded-full"
            src={profile}
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

export default Navbar;
