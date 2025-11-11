import React from "react";
import { ArrowRight } from "lucide-react";
import logo from "../../assets/Header/lg.png"; // ✅ your logo image

const Header = () => {
  return (
    <header className="absolute top-4 md:top-10 left-0 w-full flex justify-between items-center px-4 md:px-20 py-6 md:py-16 z-20">
      {/* Left: Logo + Text */}
      <div className="flex items-center space-x-2 md:space-x-3">
        <img
          src={logo}
          alt="Pixla Kalam Foundation Logo"
          className="w-10 h-8 md:w-15 md:h-10 object-contain"
        />
        <div className="border-l border-white/70 pl-2 md:pl-3 text-[12px] md:text-[15px]">
          <p className="text-white text-xs md:text-sm font-medium leading-tight uppercase">
            Pixla <br /> Kalam <br /> Foundation
          </p>
        </div>
      </div>

      {/* Right: Button */}
      <button className="bg-white text-black hover:bg-gray-100 px-3 md:px-5 py-1.5 md:py-2 rounded-md text-[14px] md:text-[18px] font-medium flex items-center gap-1 transition">
        Lets talk <ArrowRight className="w-4 h-4 md:w-5 md:h-4" />
      </button>
    </header>
  );
};

export default Header;
