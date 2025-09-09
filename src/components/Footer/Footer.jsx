import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">
          Archna Chaturvedi
        </h2>

        {/* Navigation Links - Optional, keep if needed */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons: Gmail, LinkedIn, Call */}
        <div className="flex justify-center space-x-6 mt-6">
          {/* Gmail */}
          <a
            href="mailto:chaturvediarchnaa18041996@gmail.com"
            className="text-2xl hover:text-purple-500 transition-transform transform hover:scale-110"
            aria-label="Email"
          >
            <MdEmail />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/chaturvediarchna1804?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bb01NlwwCRv68%2BirsLZvl%2Bw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-purple-500 transition-transform transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Call */}
          <a
            href="tel:+916394988130"
            className="text-2xl hover:text-purple-500 transition-transform transform hover:scale-110"
            aria-label="Call"
          >
            <MdCall />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Archna Chaturvedi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
