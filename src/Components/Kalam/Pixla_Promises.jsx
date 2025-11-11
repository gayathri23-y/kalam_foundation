import React from "react";
import { ArrowUpRight } from "lucide-react"; // optional, if not using image remove
import ArrowImg from "./../../assets/Pixla_Promises/Elements.png"; // 🔥 your custom arrow image

import Img1 from "./../../assets/Pixla_Promises/Pixla Promises.png";
import Img2 from "./../../assets/Pixla_Promises/Pixla Promises.png";
import Img3 from "./../../assets/Pixla_Promises/Pixla Promises.png";
import Img4 from "./../../assets/Pixla_Promises/Pixla Promises.png";
import Img5 from "./../../assets/Pixla_Promises/Pixla Promises.png";

const promises = [
  {
    id: "01",
    title: "Pixlakart Green Promise",
    desc: `“Every Order Plants a Tree.” 
For every order placed on Pixlakart, we plant one tree sapling through Pixla Kalam Foundation.
Your shopping supports sustainable living and environmental restoration.`,
    image: Img1,
    bottomText: "1 Order = 1 Tree 🌱",
  },
  {
    id: "02",
    title: "Pixla Gold Green Promise",
    desc: `“Every Gram of Gold Plants a Tree.” 
Each gram of gold purchased from Pixla Gold plants a tree. 
Build your wealth while nurturing the Earth.`,
    image: Img2,
    bottomText: "1 Gram = 1 Tree 🌳",
  },
  {
    id: "03",
    title: "Pixla App Install Promise",
    desc: `“Every Install Throws a Seed Ball.” 
For every new install of the Pixla App, we launch a seed ball through our environmental drives.
Your single app install helps green barren lands and rural areas across India.`,
    image: Img3,
    bottomText: "1 Install = 1 Seed Ball 🌾",
  },
  {
    id: "04",
    title: "Pixla App Subscription Promise",
    desc: `“Every Subscription Plants a Tree.” 
Each subscription to Pixla App contributes to planting a tree under the Pixla Kalam Foundation.
Your entertainment directly supports a cleaner, greener India.`,
    image: Img4,
    bottomText: "1 Subscription = 1 Tree 🌿",
  },
  {
    id: "05",
    title: "Pixla Academy Green Promise",
    desc: `“Every Learner Plants a Tree.” 
Every individual who joins Pixla Academy helps us plant a tree — symbolizing both growth in knowledge and in nature.
Learn new skills, empower yourself, and give back to the planet.`,
    image: Img5,
    bottomText: "1 Learner = 1 Tree 🌲",
  },
];

const PixlaPromisesSection = () => {
  return (
    <section className="bg-white py-20 px-8 md:px-20 font-sans">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <h2 className="text-gray-400 text-lg font-medium">Pixla Promises</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
          Through Pixla Kalam Foundation, we’ve made five meaningful promises — where
          every click, purchase, or learning step contributes to our planet’s growth.
        </p>
      </div>

      {/* 🚄 Train Scroll Container */}
      <div className="relative overflow-hidden w-full">
        <div className="scroll-track flex animate-trainScroll">
          {promises.concat(promises).map((item, index) => (
            <div
              key={index}
              className="promise-card flex flex-col justify-between bg-white border-r border-gray-400 p-6 mx-2 w-[300px] shrink-0"
            >
              <div>
                <h3 className="text-7xl font-semibold text-gray-900 mb-7 text-center">
                  {item.id}.
                </h3>

                {/* 🔽 Replace icon with image arrow here */}
                <div className="flex justify-center items-center gap-2 mb-3">
                  <img
                    src={ArrowImg}
                    alt="Arrow"
                    className="w-10 h-25 object-contain" // adjust size here
                  />
                  <h4 className="text-lg font-semibold text-gray-800 ml-5 leading-snug text-left">
                    {item.title}
                  </h4>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed text-left whitespace-pre-line">
                  {item.desc}
                </p>
              </div>

              <div className="relative mt-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-15 object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/40 text-white text-center py-5 text-sm font-medium">
                  {item.bottomText}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🚄 CSS Animation */}
      <style>{`
        .scroll-track {
          width: max-content;
          animation: trainScroll 30s linear infinite;
        }

        @keyframes trainScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-10%);
          }
        }

        .scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PixlaPromisesSection;
