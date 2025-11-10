import React from "react";
import { ArrowUpRight } from "lucide-react";
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
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <h2 className="text-gray-400 text-lg font-medium">Pixla Promises</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
          Through Pixla Kalam Foundation, we’ve made five meaningful promises — where
          every click, purchase, or learning step contributes to our planet’s growth.
        </p>
      </div>

      {/* Animated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols- gap-3">
        {promises.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col justify-between border-r border-gray-500 last:border-r-0 p-6 transition-transform duration-700 ease-out opacity-0 animate-slideUp`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div>
              <h3 className="text-7xl h-30 font-bold text-gray-900 mb-5 text-center">
                {item.id}.
              </h3>

              <div className="flex justify-center items-center gap-2 mb-4">
                <ArrowUpRight className="w-5 h-5 text-gray-800" />
                <h4 className="text-lg font-semibold text-gray-800 mb-4 leading-snug text-center">
                  {item.title}
                </h4>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed text-left whitespace-pre-line">
                {item.desc}
              </p>
            </div>

            {/* Image */}
            <div className="relative mt-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-17 object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/40 text-white text-center py-6 text-sm font-medium">
                {item.bottomText}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes slideUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default PixlaPromisesSection;
