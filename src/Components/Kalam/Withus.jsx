import React from "react";
import TeamImg from "./../../assets/Withus/Withus.png"; // replace with your actual image path

const GetInvolvedSection = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-20 font-sans text-gray-800">
      {/* Section Title */}
      <h2 className="text-gray-400 text-lg font-medium mb-16">
        Get Involved – Pixla Kalam Foundation
      </h2>

      <div className="grid md:grid-cols-3 gap-10 items-center">
        {/* Left Column - Volunteer */}
        <div>
          <h3 className="text-gray-500 font-medium mb-6"># Volunteer With Us</h3>
          <p className="text-xl font-semibold mb-4 leading-snug">
            Join us to empower youth, uplift communities, and build a greener
            future
          </p>
          <ul className="text-gray-500 space-y-3 mb-6 list-disc list-outside pl-4">
            <li>Assist in Pixla Academy training sessions and workshops</li>
            <li>
              Participate in Pixla Green Mission tree planting and seed ball drives
            </li>
            <li>Support community outreach programs and events</li>
          </ul>

          <button className="bg-green-700 hover:bg-green-800 text-white px-3 py-1 font-medium">
            Sign Up to Volunteer ↗
          </button>
        </div>

        {/* Middle Image */}
        <div className="flex justify-center">
          <img
            src={TeamImg}
            alt="Team Collaboration"
            className="w-full max-w-[270px] h-75 object-cover mt-20"
          />
        </div>

        {/* Right Column - Partner */}
        <div>
          <h3 className="text-gray-500 font-medium mb-6"># Partner With Us</h3>
          <p className="text-xl font-semibold mb-4 leading-snug">
            We invite schools, colleges, corporates, and NGOs to partner with us
            in expanding our programs for greater impact.
          </p>
          <ul className="text-gray-500 space-y-3 mb-6 list-disc list-outside pl-4">
            <li>Launch educational and skill development initiatives</li>
            <li>Organize environmental and sustainability campaigns</li>
            <li>Conduct community welfare projects</li>
          </ul>
          <button className="bg-green-700 hover:bg-green-800 text-white px-3 py-1 font-medium ">
            Become a Partner ↗
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
