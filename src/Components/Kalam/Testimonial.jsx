// src/components/TestimonialSection.jsx
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import StudentImg from "./../../assets/Testimonial/stud.png"; // replace with your image
import StudentImg1 from "./../../assets/Testimonial/stud1.png"; 
import StudentImg2 from "./../../assets/Testimonial/stud2.png"; 

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Ellyse Perry",
      role: "React Developer Student",
      text: "The guidance and support at Pixla Academy made learning enjoyable and effective. I feel fully prepared for my professional journey.",
      img: StudentImg,
    },
    {
      name: "Rohit Sharma",
      role: "Java Full Stack Development",
      text: "Practical training and live projects helped me secure my first job quickly. Pixla Academy truly bridges learning and career.",
      img: StudentImg1,
    },
    {
      name: "Glenn Maxwell",
      role: "Cyber Security",
      text: "The mentorship and real-world experience at Pixla Academy gave me the edge I needed to excel in my career.",
      img: StudentImg2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-white py-16 px-8 md:px-20">

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <p className="inline-block text-lg md:text-md text-gray-400 font-medium mb-4 cursor-pointer">Testimonial</p>
          <h2 className="text-3xl md:text-4xl font-md mt-3 mb-8 leading-snug text-black">
           Pixla Success <br /> Stories
          </h2>

          <button className="flex items-center gap-2 bg-green-700 text-white px-6 py-2 mt-95 text-sm font-medium hover:bg-gray-800 transition">
            Show All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Section */}
        <div className="relative border-l-1 border-gray-400">
          {/* Quote Mark */}
          <div className="absolute top-24 left-10 text-green-600 font-serif text-[150px] leading-none opacity-20  transform -translate-x-1/2 -translate-y-1/2">
            “
          </div>

          {/* Testimonial Card */}
          <div className="relative p-8 pt-16 transition-all duration-700 ease-in-out">
            <div className="gap-6 items-center md:items-center">
              <img
                src={testimonials[currentIndex].img}
                alt={testimonials[currentIndex].name}
                className="w-60 h-60 object-cover rounded-lg filter grayscale"
              />
              <div className="flex flex-col gap-4 text-black">
                <p className="text-base md:text-lg py-4 text-black leading-relaxed">
                  {testimonials[currentIndex].text}
                </p>
                <hr className="border-t border-gray-500 my-6" />
                <div>
                  <h4 className="font-semibold text-black">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-md text-gray-500">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-end mt-4 gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index
                      ? "w-6 bg-green-700"
                      : "w-2 bg-gray-400"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-500 my-6" />
    </section>
  );
}
