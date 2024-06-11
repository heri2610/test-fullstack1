import React from "react";
import image from "../assets/image120.png"

const Banner = () => {
  return (
    <div className="flex justify-between">
      <div className="pl-[48px] mt-[155px] space-y-[16px] text-white">
        <h2 className="text-[42px] font-bold text-white">
          Video Title Video Title <br />
          Video Title Video Title
        </h2>
        <p className="text-base">2022 | 2H 23m</p>
        <p className="text-base w-[418px]">
          Soda and Gembira are two best friends who have a lot in common. Their
          friendship begins to fall apart when they meet Jennie, a beautiful
          woman who is also an environmental activist. They were both interested
          and trie...
        </p>
      </div>
      <div className="w-fit">
      <div className="sticky inset-0 bg-gradient-to-r from-blue-900 via-transparent to-transparent"></div>
        <img src={image} alt="" className="-mt-24 z-0 mask-fade-left" />
      </div>
    </div>
  );
};

export default Banner;
