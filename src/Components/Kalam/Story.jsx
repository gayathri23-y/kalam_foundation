import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import storyImg from "../../assets/Sec3/stor.png";
import valuesImg from "../../assets/Sec3/values.png";
import missionImg from "../../assets/Sec3/mission.png";

export default function PixlaAbout() {
  const [active, setActive] = useState(1);

  const sections = [
    {
      id: 1,
      title: "Our Story",
      text: `Pixla’s Retail Media Network helps brands connect with customers through data-driven advertising,<br />in-store activations,<br />and digital strategies—boosting visibility, personalization, and growth.`,
      image: storyImg,
    },
    {
      id: 2,
      title: "Our Values & Our Impact",
      text: `We empower local communities by supporting education,<br />innovation,<br />and sustainability initiatives that create measurable, lasting impact.`,
      image: valuesImg,
    },
    {
      id: 3,
      title: "Mission & Vision",
      text: `Our mission is to bridge ambition and opportunity.<br />Our vision is a world where every individual has the tools and support to achieve their fullest potential.`,
      image: missionImg,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-10 font-sans">
      {/* ==================== TOP SECTION ==================== */}
      <div className="top-section flex justify-end mb-12">
        <div className="w-full md:w-2/3">
          <p className="text-gray-500 text-sm mb-2">
            Our Story, Values, and Impact
          </p>
          <div className="flex justify-between items-start">
            <h2 className="text-[17px] leading-relaxed text-gray-800 max-w-xl">
              Founded as part of the Pixla Group’s social initiatives, Pixla Kalam
              Foundation was created to bridge the gap between ambition and opportunity.
            </h2>
            <ArrowUpRight className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* ==================== MAIN SECTIONS ==================== */}
      <div className="main-sections space-y-10">
        {sections.map((sec) => (
          <div
            key={sec.id}
            onMouseEnter={() => setActive(sec.id)}
            className="section-row flex items-stretch gap-8"
          >
            {/* ---------- LEFT IMAGE ---------- */}
            <motion.div
              className="left-image w-[270px] flex-shrink-0 overflow-hidden rounded-md"
              animate={{
                scale: active === sec.id ? 1.03 : 1,
                opacity: active === sec.id ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={sec.image}
                alt={sec.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* ---------- RIGHT CONTENT ---------- */}
            <div className="right-content flex-1 border-t border-gray-200 pt-6 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-5xl font-light text-gray-800 leading-none">
                  {sec.id < 10 ? `0${sec.id}.` : sec.id}
                </div>

                <div>
                  <h3 className="text-[25px] font-semibold text-gray-800 mb-1">
                    {sec.title}
                  </h3>

                  <AnimatePresence initial={false}>
                    {active === sec.id && (
                      <motion.p
                        className="text-[20px] text-gray-500 max-w-xl leading-relaxed"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        dangerouslySetInnerHTML={{ __html: sec.text }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* final border */}
        <div className="border-t border-gray-200" />
      </div>
    </div>
  );
}
