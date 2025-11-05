import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import storyImg from "../../assets/Sec3/stor.png";
import valuesImg from "../../assets/Sec3/values.png";
import missionImg from "../../assets/Sec3/mission.png";

const OurStorySection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Our Story",
      desc: "Pixla’s Retail Media Network helps brands connect with customers through data-driven advertising, in-store activations, and digital strategies—boosting visibility, personalization, and growth.",
      img: storyImg,
    },
    {
      id: 2,
      title: "Our Values & Our Impact",
      desc: "We believe in innovation, collaboration, and sustainable growth — creating impact-driven initiatives that empower communities and transform lives.",
      img: valuesImg,
    },
    {
      id: 3,
      title: "Mission & Vision",
      desc: "To foster innovation and leadership among youth while contributing to India’s growth through education, technology, and social empowerment.",
      img: missionImg,
    },
  ];

  return (
    <section className="w-full bg-white px-24 py-20 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start mb-14">
        <div>
          <h3 className="text-gray-500 text-sm font-medium mb-2 uppercase tracking-wide">
            Our Story, Values, and Impact
          </h3>
          <p className="text-gray-800 text-[17px] leading-relaxed max-w-xl">
            Founded as part of the Pixla Group’s social initiatives, Pixla Kalam
            Foundation was created to bridge the gap between ambition and
            opportunity.
          </p>
        </div>
        <ArrowUpRight className="text-black w-7 h-7 mt-1" />
      </div>

      {/* 3 Sections */}
      <div className="flex flex-col space-y-10">
        {sections.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center justify-between gap-12 transition-all duration-500 cursor-pointer ${
              activeIndex === index
                ? "scale-[1.02]"
                : "scale-100 opacity-90 hover:opacity-100"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Left Image */}
            <div className="w-[280px] h-[180px] flex-shrink-0 overflow-hidden rounded-md">
              <img
                src={item.img}
                alt={item.title}
                className={`w-full h-full object-cover rounded-md transition-transform duration-500 ${
                  activeIndex === index ? "scale-105" : "scale-100"
                }`}
              />
            </div>

            {/* Right Text */}
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-semibold text-gray-700">
                  {item.id < 10 ? `0${item.id}.` : `${item.id}.`}
                </span>
                <div>
                  <h4 className="text-gray-800 font-semibold text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurStorySection;
