import React from "react";
import ImgMain from "./../../assets/Showcase/Raj1.png"; // main large image
import ImgSmall1 from "./../../assets/Showcase/Raj2.png"; // small image 1
import ImgSmall2 from "./../../assets/Showcase/Raj3.png"; // small image 2

const ShowcaseSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 font-sans">
      <h2 className="text-gray-800 text-xl md:text-2xl font-medium mb-8">
        Showcase your initiatives visually
      </h2>

      <div className="grid md:grid-cols-3 gap-4 items-start">
        {/* Left: Large image */}
        <div className="md:col-span-2">
          <img
            src={ImgMain}
            alt="Main initiative"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Right: Two stacked smaller images */}
        <div className="flex flex-col gap-4">
          <img
            src={ImgSmall1}
            alt="Initiative small 1"
            className="w-full h-48 md:h-[180px] rounded-lg shadow-md object-cover"
          />
          <img
            src={ImgSmall2}
            alt="Initiative small 2"
            className="w-full h-48 md:h-[180px] rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
