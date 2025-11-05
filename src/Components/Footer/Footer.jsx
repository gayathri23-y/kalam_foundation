import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';
import Footeri from "../../assets/Footer/Footer.png";

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter/X', href: '#' },
  ];

  return (
    <footer className="bg-black text-white font-sans">
      <div className="container mx-auto px-28 py-16 md:py-24">
        
        <h2 className="text-6xl md:text-8xl font-thin tracking-widest uppercase mb-12 md:mb-16">
          Get in touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-10 ">
          
          {/* Column 1: About - Adjusted max-width for paragraph */}
          <div className="">
            <h3 className="text-xl font-medium mb-4">Pixla Kalam Foundation</h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-8xl"> {/* Added max-w-sm here */}
              We'd love to hear from you! Whether you want to volunteer, partner, or support our initiatives, reach out to us through any of the following channels
            </p>
          </div>

          {/* Column 2: Contact & Address (Combined into one column) */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-col gap-8 md:gap-10 ml-30">
            
            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-medium mb-4">CONTACT/</h3>
              <a 
                href="mailto:contact@pixlakalamfoundation.org" 
                className="block text-md text-gray-400 hover:text-white hover:underline transition-colors"
              >
                contact@pixlakalamfoundation.org
              </a>
              <a 
                href="tel:+918778584566" 
                className="block text-md text-gray-400 hover:text-white hover:underline transition-colors mt-2"
              >
                +91 87785 84566
              </a>
            </div>

            {/* Address Section (Now immediately below Contact) */}
            <div>
              <h3 className="text-xl font-medium mb-4">Address</h3>
              <p className="text-md text-gray-400 leading-relaxed">
                Opposite St. Joseph Polytechnic College, <br />
                Soolamalai Village Bus Stop, <br />
                Krishnagiri District, <br />
                Tamil Nadu, 635108, India
              </p>
            </div>
          </div> 
          {/* End of Combined Contact/Address Column */}

          {/* Column 4 (or 3, depending on screen size): Image - Adjusted position */}
          <div className="md:col-span-3 lg:col-span-1 flex justify-end -mt-8 md:-mt-40 "> 
            <img 
              src={Footeri} 
              alt="Hands stacked together" 
              className="w-[200px] h-[350px] object-cover" 
            />
          </div>

        </div> {/* End of Main Content Grid */}

        {/* 3. Send Us a Message Button */}
        <div className="mt-12 md:mt-16">
          <button className="bg-white text-black py-3 px-6 flex items-center gap-3 group transition-all duration-300">
            <span className="font-medium text-sm">Send Us a Message</span>
            <BsArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4. Bottom Bar (Socials & Copyright) */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-gray-800 flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-8">
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
                <FiArrowUpRight className="text-xs" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div>
            <span className="text-4xl lg:text-5xl font-light text-gray-500">
              @2025
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;