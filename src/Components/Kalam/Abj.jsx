import React from "react";
import BgImage from "./../../assets/Sec4/kalam.png";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full max-w-[1100px] mx-auto h-[275px] sm:h-[300px] md:h-[500px] bg-cover bg-center flex items-center justify-center py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-20 overflow-hidden my-8 md:my-12"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative text-center text-white max-w-3xl mt-32 sm:mt-40 md:mt-60 px-2 sm:px-6">
        <p className="text-sm sm:text-base md:text-xl leading-relaxed mb-5 sm:mb-7 md:mb-9 font-semibold">
          Founded as part of the Pixla Group’s social initiatives, Pixla Kalam
          Foundation was created to bridge the gap between ambition and
          opportunity.
        </p>

        {/* Join Button */}
        <button className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-800 text-white text-sm sm:text-[16px] md:text-[18px] px-4 sm:px-5 md:px-6 py-2 rounded-md font-medium transition-all duration-300">
          Join Us <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
