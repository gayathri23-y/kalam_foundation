import React from "react";
import Story from "./../../assets/Sec3/stor.png";
import Values from "./../../assets/Sec3/values.png";
import Mission from "./../../assets/Sec3/mission.png";
import Element from "./../../assets/Sec3/element.png"; // ✅ import your PNG arrow

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
    <section className="px-6 md:px-24 py-16 font-sans">
      {/* ===== TOP HEADING + PARAGRAPH ===== */}
      <div className="relative mb-16 max-w-4xl mx-auto text-left">
        {/* ✅ Replace Lucide icon with your PNG */}
        <img
          src={Element}
          alt="Arrow Icon"
          className="w-8 h-8 absolute top-8 -right-20 transition-transform duration-300 hover:scale-110"
        />

        <h3 className="text-gray-400 text-lg font-medium mb-3 ml-120">
          Our Story, Values, and Impact
        </h3>
        <p className="text-gray-800 text-lg font-normal leading-relaxed ml-120">
          Founded as part of the Pixla Group’s social initiatives, Pixla Kalam
          Foundation was created to bridge the gap between ambition and
          opportunity.
        </p>
      </div>
<br />
      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="flex flex-col">
        {data.map((item, index) => (
          <div
            key={index}
            className="group grid md:grid-cols-2 gap-10 items-center transition-all duration-500 ease-in-out"
          >
            {/* LEFT - IMAGE */}
            <div className="overflow-hidden transition-all duration-500 ease-in-out">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover  transition-all duration-500 ease-in-out group-hover:h-60"
              />
            </div>

            {/* RIGHT - CONTENT */}
            <div className="flex flex-col justify-center mt-4">
              {/* Show divider above only for first item */}
              {index === 0 && (
                <hr className="border-gray-300 w-full transition-all duration-500 group-hover:border-gray-800 group-hover:scale-x-105 origin-center" />
              )}

              {/* Content */}
              <div className="relative overflow-hidden transition-all duration-500 ease-in-out h-40 group-hover:h-60 flex items-center">
                <div className="flex gap-6 items-start">
                  <p className="text-4xl font-semibold text-gray-800 min-w-[60px]">
                    {item.id}
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-md opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider after each item except the last one */}
              <hr className="border-gray-300 w-full transition-all duration-500 group-hover:border-gray-800 group-hover:scale-x-105 origin-center" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StorySection;
