import React from "react";
import image from "../assets/image125.svg"

const Content = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 mt-[55px] gap-4 mx-[48px]">
      {[...Array(9).fill().map((x, i) =>(
        <div className="relative w-full">
          <img src={image} alt="Deskripsi Gambar" className="w-full h-auto object-cover mask-fade-bottom" />
          <div className="absolute bottom-0 w-full font-semibold mb-7 bg-opacity-50 text-white text-start p-2 text-xs md:text-base bg-[#0000001e]">
            Title
          </div>
        </div>
      ))]}
    </div>
  );
};

export default Content;