import React from "react";
import { ArrowUpRight } from "lucide-react";
import Story from "./../../assets/Sec3/stor.png";
import Values from "./../../assets/Sec3/values.png";
import Mission from "./../../assets/Sec3/mission.png";

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
    <section className=" px-6 py-16 md:px-24 grid md:grid-cols-3 gap-10">
      {/* LEFT SIDE & RIGHT SIDE WRAPPED TOGETHER */}
      <div className="flex flex-col gap-8 col-span-2 md:col-span-2">
        <h3 className="text-gray-400 text-lg font-medium mb-2 ml-35">
          Our Story, Values, and Impact
        </h3>
        <p className="text-gray-800 text-lg font-normal mb-6 max-w-3xl">
          Founded as part of the Pixla Group’s social initiatives, Pixla Kalam
          Foundation was created to bridge the gap between ambition and
          opportunity.
        </p>

        <ArrowUpRight className="w-8 h-8 text-gray-800 mb-6" />

        <hr className="border-gray-200 mb-6" />

        {data.map((item, index) => (
          <div
            key={index}
            className="group grid md:grid-cols-2 gap-10 items-center transition-all duration-500 ease-in-out"
          >
            {/* Left - Image */}
            <div className="overflow-hidden flex justify-center transition-all duration-500 ease-in-out">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md transition-all duration-500 ease-in-out group-hover:h-60"
              />
            </div>

            {/* Right - Content */}
            <div className="relative overflow-hidden transition-all duration-500 ease-in-out h-40 group-hover:h-60 flex items-center">
              <div className="flex gap-6">
                <p className="text-4xl font-semibold text-gray-800">{item.id}</p>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="md:col-span-2">
              <hr className="border-gray-200 my-4" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StorySection;
