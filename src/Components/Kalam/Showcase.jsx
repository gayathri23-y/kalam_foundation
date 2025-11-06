import React from "react";
import ImgMain from "./../../assets/Showcase/Raj1.png"; // large image
import ImgSmall1 from "./../../assets/Showcase/Raj2.png"; // top right image
import ImgSmall2 from "./../../assets/Showcase/Raj3.png"; // bottom right image

const ShowcaseSection = () => {
  return (
    <section className="bg-white py-30 -mt-20 px-8 md:px-20 font-sans">
      {/* Title */}
      <h2 className="text-gray-400 text-xl md:text-2xl font-sm mb-15">
        Showcase your initiatives visually
      </h2>

      {/* Image grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Left large image */}
        <div className="md:col-span-2">
          <img
            src={ImgMain}
            alt="Main initiative"
            className="w-[800px] h-60 md:h-[415px] object-cover"
          />
        </div>

        {/* Right stacked images */}
        <div className="flex flex-col gap-4">
          {/* Top small image */}
          <img
            src={ImgSmall1}
            alt="Initiative small 1"
            className="w-full h-48 md:h-[200px]  object-cover"
          />

          {/* Bottom small image with overlay */}
          <div className="relative">
            <img
              src={ImgSmall2}
              alt="Initiative small 2"
              className="w-full h-48 md:h-[200px] object-cover"
            />
            {/* Overlay “See all” */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
              <button className="text-white text-lg font-medium">See all</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
