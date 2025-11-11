import React from "react";
import Story from "./../../assets/Sec3/stor.png";
import Values from "./../../assets/Sec3/values.png";
import Mission from "./../../assets/Sec3/mission.png";
import Element from "./../../assets/Sec3/element.png";

const data = [
  {
    id: "01.",
    title: "Our Story",
    text: "Pixla’s Retail Media Network helps brands connect with customers through data-driven advertising, in-store activations, and digital strategies—boosting visibility, personalization, and growth.",
    img: Story,
  },
  {
    id: "02.",
    title: "Our Values & Our Impact",
    text: "We believe in sustainability, education, and empowerment — creating measurable community impact through every initiative.",
    img: Values,
  },
  {
    id: "03.",
    title: "Mission & Vision",
    text: "Our mission is to nurture innovation and leadership through accessible learning opportunities that inspire positive change.",
    img: Mission,
  },
];

const StorySection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-20 py-10 md:py-16 font-sans">
      {/* ===== TOP HEADING + PARAGRAPH ===== */}
      <div className="relative mb-10 md:mb-16 max-w-4xl mx-auto text-left">
        <img
          src={Element}
          alt="Arrow Icon"
          className="hidden md:block w-8 h-8 absolute top-8 -right-20 transition-transform duration-300 hover:scale-110"
        />

        <h3 className="text-gray-400 text-base sm:text-lg font-medium mb-2 md:mb-3 ml-0 md:ml-120">
          Our Story, Values, and Impact
        </h3>
        <p className="text-gray-800 text-sm sm:text-base md:text-lg font-normal leading-relaxed ml-0 md:ml-120">
          Founded as part of the Pixla Group’s social initiatives, Pixla Kalam
          Foundation was created to bridge the gap between ambition and
          opportunity.
        </p>
      </div>

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="flex flex-col space-y-12 md:space-y-0">
        {data.map((item, index) => (
          <div
            key={index}
            className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center transition-all duration-500 ease-in-out"
          >
            {/* LEFT - IMAGE */}
            <div className="overflow-hidden transition-all duration-500 ease-in-out">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 sm:h-56 md:h-40 object-cover rounded-md transition-all duration-500 ease-in-out group-hover:md:h-60"
              />
            </div>

            {/* RIGHT - CONTENT */}
            <div className="flex flex-col justify-center mt-2 md:mt-4">
              {index === 0 && (
                <hr className="border-gray-300 w-full mb-3 md:mb-0 transition-all duration-500 group-hover:border-gray-800 group-hover:scale-x-105 origin-center" />
              )}

              <div className="relative overflow-hidden transition-all duration-500 ease-in-out h-auto md:h-40 group-hover:md:h-60 flex items-start md:items-center">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start">
                  <p className="text-3xl sm:text-4xl font-semibold text-gray-800 min-w-[50px] sm:min-w-[60px]">
                    {item.id}
                  </p>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                      {item.title}
                    </h4>
                    {/* 👇 Always visible on mobile, hover-only on desktop */}
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-gray-300 w-full mt-3 md:mt-0 transition-all duration-500 group-hover:border-gray-800 group-hover:scale-x-105 origin-center" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StorySection;
