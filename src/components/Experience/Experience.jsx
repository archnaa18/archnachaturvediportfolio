import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative pt-24 pb-40 md:pb-24 px-6 md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative">
        {/* Vertical line (left on mobile, centered on >= sm) */}
        <div className="pointer-events-none absolute inset-y-0 left-6 sm:left-1/2 -translate-x-1/2 w-px bg-white/30" />

        {/* Items */}
        <div className="space-y-16 sm:space-y-24">
          {experiences.map((experience, index) => {
            const isLeft = index % 2 === 0; // even -> left, odd -> right

            return (
              <div
                key={experience.id}
                className="relative grid grid-cols-1 sm:grid-cols-[1fr_1fr]"
              >
                {/* Timeline dot for this row */}
                <div
                  className="absolute -top-1 left-6 sm:left-1/2 -translate-x-1/2 z-10
                             bg-white border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden"
                  aria-hidden="true"
                >
                  {experience.img && (
                    <img
                      src={experience.img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Card (LEFT side) */}
                {isLeft ? (
                  <div className="sm:col-start-1 sm:justify-self-end sm:pr-20 pl-16 sm:pl-0">
                    <ExperienceCard data={experience} align="left" />
                  </div>
                ) : (
                  <div className="sm:col-start-2 sm:justify-self-start sm:pl-20 pl-16 sm:pl-0">
                    <ExperienceCard data={experience} align="right" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

function ExperienceCard({ data, align = "left" }) {
  return (
    <div
      className={`w-full max-w-xl rounded-2xl border bg-gray-900/70 border-white/10 
                  backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.25)]
                  transition-transform duration-300 hover:scale-[1.02]
                  mt-8 sm:mt-0 p-5 sm:p-8
                  ${align === "right" ? "text-left sm:text-right" : "text-left"}`}
    >
      {/* Header: logo + info */}
      <div
        className={`flex items-center gap-4 sm:gap-6
                    ${align === "right" ? "sm:flex-row-reverse" : ""}`}
      >
        {data.img && (
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden shrink-0">
            <img
              src={data.img}
              alt={data.company}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            {data.role}
          </h3>
          <h4 className="text-sm sm:text-base text-gray-300">{data.company}</h4>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">{data.date}</p>
        </div>
      </div>

      {/* Description */}
      {data.desc && (
        <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
          {data.desc}
        </p>
      )}

      {/* Skills */}
      {Array.isArray(data.skills) && data.skills.length > 0 && (
        <div className="mt-4">
          <h5 className="font-medium text-white">Skills:</h5>
          <ul
            className={`flex flex-wrap gap-2 mt-2 ${
              align === "right" ? "sm:justify-end" : ""
            }`}
          >
            {data.skills.map((skill, i) => (
              <li
                key={i}
                className="bg-[#8245ec] text-gray-100 px-3 py-1 text-xs sm:text-sm rounded-lg border border-white/10"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Experience;
