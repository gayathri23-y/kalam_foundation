import React from "react";
import { ArrowUpRight } from "lucide-react";
import EmpowerImage from "./../../assets/Sec5/em.png"; // replace with your image path

const KeyPrograms = () => {
  return (
    <section className="px-4 sm:px-6 md:px-20 py-10 sm:py-14 md:py-16 font-sans">
      {/* ===== Section Heading ===== */}
      <h3 className="text-gray-400 text-base sm:text-lg font-medium mb-3">
        Our Key Programs
      </h3>

      {/* ===== Main Content Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between">
          {/* 1. Empowering the Next Generation */}
          <p className="text-gray-400 text-base sm:text-lg font-medium mb-4">
            1. Empowering the Next Generation
          </p>

          {/* IMAGE */}
          <div className="mt-6 sm:mt-8 md:mt-10">
            <img
              src={EmpowerImage}
              alt="Empowering the Next Generation"
              className="w-full h-40 sm:h-52 md:h-60 object-cover rounded-md"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <p className="text-gray-800 text-base sm:text-lg font-semibold leading-relaxed mb-6 sm:mb-8">
            Pixla Academy empowers youth with practical skills, mentorship, and
            career guidance to bridge the gap between education and
            employability.
          </p>

          {/* Key Focus Areas */}
          <h4 className="text-gray-400 font-medium mb-3 sm:mb-4">
            Key Focus Areas
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-gray-800 text-sm sm:text-[16px]">
            <ul className="list-disc list-inside space-y-2 sm:space-y-3">
              <li>
                <span className="font-medium">Digital Literacy & Coding:</span>{" "}
                Training in programming, IT, and digital tools
              </li>
              <li>
                <span className="font-medium">Entrepreneurship Development:</span>{" "}
                Encouraging innovation and startup mindset
              </li>
            </ul>
            <ul className="list-disc list-inside space-y-2 sm:space-y-3">
              <li>
                <span className="font-medium">Life Skills & Leadership:</span>{" "}
                Enhancing communication, confidence, and problem-solving
              </li>
              <li>
                <span className="font-medium">Career Readiness:</span> Resume
                building, interview preparation, and job placement support
              </li>
            </ul>
          </div>

          {/* Bottom Section - Divider and Button */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-10 gap-4 sm:gap-0">
            <hr className="flex-grow border-gray-300 w-full sm:w-auto sm:mr-6" />
            <button className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm sm:text-[16px] px-4 sm:px-6 py-2 rounded-md font-medium transition-all duration-300">
              Learn More <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyPrograms;
