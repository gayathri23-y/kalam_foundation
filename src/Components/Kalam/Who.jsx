import React from "react";
import leftImg from "../../assets/Sec2/kalam.png";
import rightImg from "../../assets/Sec2/team.png";

const WhoWeAre = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left section */}
          <div className="md:col-span-3 text-left">
            <h3 className="text-gray-500 text-lg font-medium mb-4 md:mb-6">Who We Are</h3>

            <div className="w-24 h-24 md:w-32 md:h-32 rounded-sm overflow-hidden mb-4 md:mb-6">
              <img
                src={leftImg}
                alt="Dr. Kalam"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed max-w-xs">
              Inspired by Dr. A.P.J. Abdul Kalam, we strive to build a developed
              India through innovation, education, and youth empowerment.
            </p>
          </div>

          {/* Center section */}
          <div className="md:col-span-6 text-center md:text-left">
            <p className="text-black text-sm md:text-xl leading-6 md:leading-9 max-w-full md:max-w-md mx-auto md:ml-9">
              Pixla Kalam Foundation is a non-profit <br className="hidden md:block" />
              organization dedicated to empowering <br className="hidden md:block" />
              communities, nurturing youth talent, and <br className="hidden md:block" />
              promoting sustainable development. We <br className="hidden md:block" />
              focus on education, skill development, and <br className="hidden md:block" />
              environmental initiatives to create <br className="hidden md:block" />
              opportunities that enable individuals and <br className="hidden md:block" />
              communities to thrive.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-8 gap-4">
              <hr className="hidden md:block flex-1 border-gray-300" />
              <button className="inline-flex items-center px-5 py-2.5 bg-emerald-800 text-white text-sm md:text-[18px] font-medium rounded shadow">
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
          <div className="md:col-span-3 flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="w-40 h-40 md:w-70 md:h-50 overflow-hidden rounded-sm">
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
