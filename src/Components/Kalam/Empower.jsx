import React from "react";
import Empower from "./../../assets/Empower/Empower.png";

const DonationBanner = () => {
  return (
    <section className="relative w-full max-w-[1100px] mx-auto h-[400px] sm:h-[450px] md:h-[500px] py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-20 overflow-hidden my-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Empower})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-8 md:px-16">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 leading-snug sm:leading-tight">
          Empower Change with Your Contribution
        </h1>

        <p className="text-sm sm:text-base md:text-lg max-w-2xl sm:max-w-3xl mb-8 sm:mb-10 leading-relaxed px-2">
          Your donations support education through Pixla Academy and drive sustainability
          via the Pixla Green Mission’s tree planting and environmental campaigns.
        </p>

        <button
          onClick={() => console.log("Donate Now clicked")}
          className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white text-sm sm:text-base font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-all duration-300 shadow-lg hover:scale-105"
        >
          Donate Now <span className="text-lg">→</span>
        </button>
      </div>
    </section>
  );
};

export default DonationBanner;
