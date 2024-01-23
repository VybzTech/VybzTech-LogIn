import React from "react";
import VybzTech from "../VybzTech.png";

const Hero = () => {
  return (
    <div className="hero w-fit mx-auto mb-11">
      {/*  HERO  */}
      <div className="flex items-center justify-center">
        <img className="w-7 mr-1.5" src={VybzTech} alt="VybzTech Logo" />
        <p className="text-3xl text-white tracking-wider pt-1">ybzTech .Inc</p>
      </div>
      <span
        className="mb-8 tracking-tighter italic text-zinc-500 text-xs
     sm:text-[0.8rem]"
      >
        We guarantee your project's success
      </span>
    </div>
  );
};

export default Hero;
