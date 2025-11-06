import React from "react";
import leftImg from "../../assets/Sec2/kalam.png"; // update with your actual path
import rightImg from "../../assets/Sec2/team.png"; // update with your actual path

const WhoWeAre = () => {
  return (
    <section className="bg-white py-30 px-8 md:px-20">
      <div className="max-w-8xl ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left section */}
          <div className="md:col-span-3 text-left">
            <h3 className="text-gray-500 text-lg font-medium mb-6">Who We Are</h3>

            <div className="w-30 h-30 md:w-32 md:h-32 rounded-sm overflow-hidden mb-6">
              <img src={leftImg} alt="Dr. Kalam" className="w-full h-full object-cover" />
            </div>
            <br />
            <p className="text-gray-500 text-15px leading-relaxed max-w-xs">
              Inspired by Dr. A.P.J. Abdul Kalam, we strive to build a developed India through innovation, education, and youth empowerment.
            </p>
          </div>

          {/* Center section */}
          <div className="md:col-span-6">
            <p className="text-black text-base md:text-2xl leading-7 md:leading-9 max-w-prose ml-9">
              Pixla Kalam Foundation is a non-profit <br />
               organization dedicated to empowering <br />
               communities, nurturing youth talent, and <br />
               promoting sustainable development. We <br />
                focus on education, skill development, and <br />
                environmental initiatives to create <br />
                 opportunities that enable individuals and <br />
                 communities to thrive.
            </p>

            <div className="flex items-center mt-8">
              <div className="flex-1">
                <hr className="border-gray-300" />
              </div>

              <div className="ml-6">
                <button className="inline-flex items-center px-5 py-2.5 bg-emerald-800 text-white text-18px font-medium rounded shadow">
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="md:col-span-3 flex justify-end">
            <div className="w-40 h-40 md:w-70 md:h-50 overflow-hidden rounded-sm mt-38">
              <img src={rightImg} alt="Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
