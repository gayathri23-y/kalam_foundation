import React from "react";
import { ArrowUpRight } from "lucide-react";
import GreenMissionImage from "./../../assets/Sec6/grn.png"; // replace with your image path

const GreenMission = () => {
  return (
    <section id="green-section" className="px-4 sm:px-6 md:px-20 py-10 sm:py-14 md:py-16 font-sans">
      {/* ===== Main Content Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
        {/* LEFT SIDE */}
        <div>
          {/* Paragraph */}
          <p className="text-gray-800 text-base sm:text-lg font-semibold leading-relaxed mb-6 sm:mb-8">
            Pixla Green Mission promotes a sustainable future through tree
            plantations, seed ball campaigns, and environmental awareness
            activities.
          </p>

          {/* Key Focus Areas */}
          <h4 className="text-gray-500 font-medium mb-3 sm:mb-4">
            Key Focus Areas
          </h4>
          <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-gray-800 text-sm sm:text-[16px]">
            <li>
              <span className="font-medium">Tree Sapling Drive:</span> Planting
              saplings in schools, colleges, villages, and urban areas;
              fostering long-term environmental responsibility.
            </li>
            <li>
              <span className="font-medium">Seed Ball Campaign:</span>{" "}
              Interactive workshops where participants create and disperse seed
              balls to restore greenery naturally; promotes biodiversity and
              ecological balance.
            </li>
          </ul>

          {/* Bottom Section - Button + Divider */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-start mt-8 sm:mt-10 gap-4 sm:gap-0">
            <button className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm sm:text-[16px] px-5 sm:px-6 py-2 rounded-md font-medium transition-all duration-300">
              Join the Green Mission <ArrowUpRight className="w-4 h-4" />
            </button>
            <hr className="flex-grow border-gray-300 w-full sm:w-auto sm:ml-6" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <p className="text-gray-400 text-base sm:text-lg font-medium mb-4 sm:mb-6 md:mb-17 md:mr-5">
            2. Plant Today, Protect Tomorrow
          </p>
          <img
            src={GreenMissionImage}
            alt="Plant Today, Protect Tomorrow"
            className="rounded-md w-[80%] sm:w-[70%] md:w-[80%] mt-8 sm:mt-14 md:mt-20 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GreenMission;
