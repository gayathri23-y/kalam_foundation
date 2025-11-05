import React from "react";
import { ArrowRight } from "lucide-react";
import logo from "../../assets/Header/lg.png"; // ✅ your logo image

const Header = () => {
  return (
    <header className="absolute top-10 left-0 w-full flex justify-between items-center px-8 md:px-20 py- z-20">
      {/* Left: Logo + Text */}
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="Pixla Kalam Foundation Logo"
          className="w-15 h-10 object-contain"
        />
        <div className="border-l border-white/70 pl-3 text-[15px]">
          <p className="text-white text-sm font-medium leading-tight uppercase">
            Pixla <br /> Kalam <br /> Foundation
          </p>
        </div>
      </div>

      {/* Right: Button */}
      <button className="bg-white text-black hover:bg-gray-100 px-5 py-2 rounded-md text-[18px] font-medium flex items-center gap-1 transition">
        Lets talk <ArrowRight className="w-5 h-4" />
      </button>
    </header>
  );
};

export default Header;
