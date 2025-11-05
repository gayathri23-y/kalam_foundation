// OurStorySection.jsx
import React, { useState } from "react";

import storyImg from "../../assets/Sec3/stor.png";
import valuesImg from "../../assets/Sec3/values.png";
import missionImg from "../../assets/Sec3/mission.png";

const items = [
  {
    number: "01",
    title: "Our Story",
    text: "Pixla’s Retail Media Network helps brands connect with customers through data-driven advertising, in-store activations, and digital strategies — boosting visibility, personalization, and growth.",
    src: storyImg,
    alt: "Our story",
  },
  {
    number: "02",
    title: "Our Values & Our Impact",
    text: "We believe in innovation, collaboration, and sustainable growth — creating impact-driven initiatives that empower communities and transform lives.",
    src: valuesImg,
    alt: "Values and impact",
  },
  {
    number: "03",
    title: "Mission & Vision",
    text: "To foster innovation and leadership among youth while contributing to India’s growth through education, technology, and social empowerment.",
    src: missionImg,
    alt: "Mission and vision",
  },
];

export default function OurStorySection() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-white px-8 md:px-24 py-16">
      {/* Header */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <h3 className="text-gray-500 font-medium mb-2 tracking-wide">
            Our Story, Values, and Impact
          </h3>
          <p className="text-gray-800 text-[17px] leading-[1.8] max-w-2xl">
            Founded as part of the Pixla Group’s social initiatives, Pixla Kalam
            Foundation was created to bridge the gap between ambition and
            opportunity.
          </p>
        </div>
        <div className="text-black opacity-80 text-2xl leading-none select-none">
          ↗
        </div>
      </div>

      {/* Story Items */}
      <div className="space-y-10">
        {items.map((it, idx) => {
          const isActive = active === idx;

          return (
            <div
              key={idx}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
              className={`flex flex-col md:flex-row items-start gap-8 cursor-pointer transition-all duration-500 ease-in-out ${
                isActive ? "opacity-100" : "opacity-80"
              }`}
            >
              {/* Image Section */}
              <div
                className={`overflow-hidden rounded-xl shadow-sm transition-all duration-500 ease-in-out ${
                  isActive ? "md:w-1/3 w-full" : "md:w-1/4 w-full"
                }`}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  className={`w-full object-cover rounded-xl transition-transform duration-500 ease-in-out ${
                    isActive
                      ? "scale-105 h-56 md:h-64"
                      : "scale-100 h-44 md:h-44"
                  }`}
                />
              </div>

              {/* Text Section */}
              <div
                className={`flex-1 transition-all duration-500 ease-in-out ${
                  isActive
                    ? "max-h-[800px] opacity-100"
                    : "max-h-[90px] opacity-70 overflow-hidden"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="text-2xl font-semibold text-gray-700">
                    {it.number}.
                  </span>
                  <div>
                    <h4 className="text-gray-800 font-semibold mb-2 text-[16px]">
                      {it.title}
                    </h4>
                    <p
                      className={`text-gray-500 text-sm leading-relaxed transition-all duration-500 ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-1 md:opacity-70"
                      }`}
                    >
                      {it.text}
                    </p>
                  </div>
                </div>

                {isActive && (
                  <hr className="border-gray-200 mt-6 transition-opacity duration-500" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
