import React from "react";
import Empower from "./../../assets/Empower/Empower.png";

const DonationBanner = () => {
  return (
    <section className="relative w-full max-w-[1100px] mx-auto h-[500px] py-16 px-8 md:px-20  overflow-hidden my-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Empower})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 md:px-16">
        <h1 className="text-2xl sm:text-2xl  font-lg mb-4 leading-tight">
          Empower Change with Your Contribution
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-3xl mb-10  py-5 leading-relaxed">
          Your donations support education through Pixla Academy and drive sustainability
          via the Pixla Green Mission’s tree planting and environmental campaigns.
        </p>

        <button
          onClick={() => console.log("Donate Now clicked")}
          className="flex items-center justify-center bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4  transition-all duration-300 shadow-lg hover:scale-105"
        >
          Donate Now
          <span className="ml-2 text-lg">→</span>
        </button>
      </div>
    </section>
  );
};

export default DonationBanner;
