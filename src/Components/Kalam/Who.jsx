import React from "react";
import leftImg from "../../assets/Sec2/kalam.png";
import rightImg from "../../assets/Sec2/team.png";

const WhoWeAre = () => {
  return (
    <section className="bg-white py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left section */}
          <div className="md:col-span-3 text-center md:text-left">
            <h3 className="text-gray-500 text-base sm:text-lg font-medium mb-4 md:mb-6">
              Who We Are
            </h3>

            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-sm overflow-hidden mb-4 md:mb-6 mx-auto md:mx-0">
              <img
                src={leftImg}
                alt="Dr. Kalam"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed max-w-xs mx-auto md:mx-0">
              Inspired by Dr. A.P.J. Abdul Kalam, we strive to build a developed
              India through innovation, education, and youth empowerment.
            </p>
          </div>

          {/* Center section */}
          <div className="md:col-span-6 text-center md:text-left mt-6 md:mt-0">
            <p className="text-black text-sm sm:text-base md:text-xl leading-6 sm:leading-7 md:leading-9 max-w-full md:max-w-md mx-auto md:ml-9">
              Pixla Kalam Foundation is a non-profit{" "}
              <br className="hidden md:block" />
              organization dedicated to empowering{" "}
              <br className="hidden md:block" />
              communities, nurturing youth talent, and{" "}
              <br className="hidden md:block" />
              promoting sustainable development. We{" "}
              <br className="hidden md:block" />
              focus on education, skill development, and{" "}
              <br className="hidden md:block" />
              environmental initiatives to create{" "}
              <br className="hidden md:block" />
              opportunities that enable individuals and{" "}
              <br className="hidden md:block" />
              communities to thrive.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start mt-8 gap-4">
              <hr className="hidden md:block flex-1 border-gray-300" />
              <button className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-emerald-800 text-white text-sm sm:text-[16px] md:text-[18px] font-medium rounded shadow hover:bg-emerald-700 transition">
                Learn More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right section */}
          <div className="md:col-span-3 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-52 overflow-hidden rounded-sm">
              <img
                src={rightImg}
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
