import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import storyImg from "../../assets/Sec3/stor.png";
import valuesImg from "../../assets/Sec3/values.png";
import missionImg from "../../assets/Sec3/mission.png";

export default function PixlaAbout() {
  const [active, setActive] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Our Story",
      text: `Pixla’s Retail Media Network helps brands connect with 
      customers through data-driven advertising, in-store activations, 
      and digital strategies—boosting visibility, personalization, and growth.`,
      image: storyImg,
    },
    {
      id: 2,
      title: "Our Values & Our Impact",
      text: `We empower local communities by supporting education, innovation, 
      and sustainability initiatives that create measurable, lasting impact.`,
      image: valuesImg,
    },
    {
      id: 3,
      title: "Mission & Vision",
      text: `Our mission is to bridge ambition and opportunity. 
      Our vision is a world where every individual has the tools and 
      support to achieve their fullest potential.`,
      image: missionImg,
    },
  ];

  return (
    <div className="px-8 md:px-16 py-6 font-sans">
      {/* ==================== TOP SECTION ==================== */}
      <div className="flex items-start gap-12 mb-16">
        {/* Left side — empty image space for alignment */}
        <div className="w-[390px] flex-shrink-0" />

        {/* Right side — heading and paragraph */}
        <div className="flex-1">
          <p className="text-gray-500 text-[20px] mb-2">
            Our Story, Values, and Impact
          </p>
          <div className="flex justify-between items-start">
            <h2 className="text-[20px] leading-relaxed text-gray-800 max-w-xl">
              Founded as part of the Pixla Group’s social initiatives, Pixla Kalam
              Foundation was created to bridge the gap between ambition and opportunity.
            </h2>
            <ArrowUpRight
              className="text-gray-700 mt-[-9px] flex-shrink-0"
              size={72}
              strokeWidth={1.8}
            />
          </div>
        </div>
      </div>

      {/* ==================== MAIN SECTIONS ==================== */}
      <div className="space-y-14">
        {sections.map((sec) => (
          <motion.div
            key={sec.id}
            onMouseEnter={() => setActive(sec.id)}
            onMouseLeave={() => setActive(null)}
            className="flex items-start gap-12"
            animate={{ scale: active === sec.id ? 1.02 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* ---------- LEFT IMAGE ---------- */}
            <motion.div
              className="w-[390px] h-[250px] flex-shrink-0 overflow-hidden rounded-md"
              animate={{ scale: active === sec.id ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={sec.image}
                alt={sec.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* ---------- RIGHT CONTENT ---------- */}
            <div className="flex-1">
              {/* top border line */}
              <div className="border-t border-gray-300 w-full" />

              <div className="flex items-start gap-[120px] pt-9">
                {/* Number */}
                <div className="text-5xl font-light text-gray-800 leading-none min-w-[100px]">
                  {sec.id < 10 ? `0${sec.id}.` : sec.id}
                </div>

                {/* Title + Paragraph */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-[22px] font-semibold text-gray-800">
                    {sec.title}
                  </h3>
                  <AnimatePresence initial={false}>
                    {active === sec.id && (
                      <motion.p
                        className="text-[18px] text-gray-500 leading-relaxed max-w-[580px]"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {sec.text}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* bottom border line */}
              <div className="border-t border-gray-300 w-full mt-9" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
