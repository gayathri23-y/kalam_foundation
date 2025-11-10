import React from "react";
import BgImage from "./../../assets/Sec4/kalam.png"; // your background image
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="elative w-full max-w-[1100px] mx-auto h-[500px] py-16 px-8 md:px-20  overflow-hidden my-12relative w-full h-[500px] md:h-[600px] bg-cover bg-center flex items-center justify-center py-16 px-8 md:px-20  overflow-hidden my-12"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative text-center text-white max-w-3xl">
        <p className="text-lg md:text-xl leading-relaxed mb-6 font-semibold">
          Founded as part of the Pixla Group’s social initiatives, Pixla Kalam
          Foundation was created to bridge the gap between ambition and
          opportunity
        </p>

        {/* Join Button */}
        <button className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-800 text-white text-[18px] px-6 py-2 rounded-md font-medium transition-all duration-300">
          Join Us <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
