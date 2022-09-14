import Link from "next/link";
import React from "react";
import {
  AiFillInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-[80px] border-t border-gray-200 flex flex-col gap-4 justify-center items-center py-5">
      <p className="text-sm text-gray-600">Powered 💪 by MIZERO Eloi</p>
      <p className="flex justify-center items-center gap-2 text-gray-600 text-xl">
        <Link href="https://twitter.com/EloiMizero">
          <AiOutlineTwitter className="pointer" />
        </Link>

        <Link href="https://github.com/Mizero-eloi">
          <AiOutlineGithub className="pointer" />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
