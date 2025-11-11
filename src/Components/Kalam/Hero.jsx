import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import bgImage from "../../assets/Header/himg.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[500px] sm:h-[550px] md:h-[620px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-4 sm:px-8 md:px-20 max-w-5xl mt-8 sm:mt-10 md:mt-12">
        <h1 className="text-[26px] sm:text-[30px] md:text-[43px] font-semibold leading-tight md:leading-snug mb-4">
          Inspired By Dr. A.P.J. Abdul Kalam <br className="hidden md:block" />
          Empowering A Better Tomorrow
        </h1>

        <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-2xl">
          Building A Brighter Future Through Education, Skill
          <br className="hidden sm:block" />
          Development, And Environmental Action
        </p>

        {/* Join Now Button */}
        <button
          type="button"
          className="bg-[#0f784f] hover:bg-[#0c6040] text-white px-4 sm:px-5 py-2 rounded-sm text-[16px] sm:text-[18px] md:text-[20px] font-medium flex items-center gap-2 transition"
        >
          Join now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 md:right-20 z-10">
        <button
          onClick={() =>
            document
              .getElementById("green-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          type="button"
          className="border border-white text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-sm text-[14px] sm:text-[16px] md:text-[18px] font-medium flex items-center gap-2 hover:bg-white/10 transition"
        >
          Scroll Down <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
