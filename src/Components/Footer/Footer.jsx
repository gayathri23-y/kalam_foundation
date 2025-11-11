import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import Footeri from "../../assets/Footer/Footer.png";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Twitter/X", href: "#" },
  ];

  return (
    <footer className="bg-black text-white font-sans">
      <div className="container mx-auto px-6 md:px-20 py-16 md:py-24">
        {/* Section Title */}
        <h2 className="text-4xl md:text-8xl lg:text-9xl font-thin tracking-wide uppercase mb-12 md:mb-16 text-center md:text-left">
          Get in touch
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10 items-start">
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-medium mb-4">
              Pixla Kalam Foundation
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              We'd love to hear from you! Whether you want to volunteer, partner,
              or support our initiatives, reach out to us through any of the
              following channels.
            </p>
          </div>

          {/* Column 2 & 3: Contact + Address */}
          <div className="md:col-span-2 flex flex-col gap-10">
            {/* Contact */}
            <div>
              <h3 className="text-2xl font-medium mb-4">Contact</h3>
              <a
                href="mailto:contact@pixlakalamfoundation.org"
                className="block text-xl text-gray-400 transition-colors"
              >
                contact@pixlakalamfoundation.org
              </a>
              <a
                href="tel:+918778584566"
                className="block text-xl text-gray-400  transition-colors mt-2"
              >
                +91 87785 84566
              </a>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-2xl font-medium mb-4">Address</h3>
              <p className="text-xl text-gray-400 leading-relaxed">
                Opposite St. Joseph Polytechnic College, <br />
                Soolamalai Village Bus Stop, <br />
                Krishnagiri District, <br />
                Tamil Nadu, 635108, India
              </p>
            </div>
          </div>

          {/* Column 4: Image */}
          <div className="flex justify-center md:justify-end items-start">
            <img
              src={Footeri}
              alt="Hands stacked together"
              className="w-[180px] h-[220px] md:w-[200px] md:h-[250px] object-cover md:-mt-40"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 md:mt-16 flex justify-center md:justify-start">
          <button className="bg-white text-black py-3 px-6 flex items-center gap-3 group transition-all duration-300 hover:bg-gray-200">
            <span className="font-medium text-sm">Send Us a Message</span>
            <BsArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-gray-800 flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-8">
          {/* Social Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center sm:justify-start w-full sm:w-auto">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
                <FiArrowUpRight className="text-xs" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="w-full sm:w-auto text-center sm:text-right">
            <span className="text-2xl md:text-4xl lg:text-5xl font-semibold">@2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
