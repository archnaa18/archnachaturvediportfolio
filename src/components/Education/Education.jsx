import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-6 md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="pointer-events-none absolute inset-y-0 left-6 sm:left-1/2 -translate-x-1/2 w-px bg-white/30" />

        {/* Education Entries */}
        <div className="space-y-16 sm:space-y-24">
          {education.map((edu, index) => {
            const isLeft = index % 2 === 0; // Even index -> left, odd -> right

            return (
              <div
                key={edu.id}
                className="relative grid grid-cols-1 sm:grid-cols-[1fr_1fr]"
              >
                {/* Timeline Dot */}
                <div
                  className="absolute -top-1 left-6 sm:left-1/2 -translate-x-1/2 z-10
                             bg-gray-200 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden"
                >
                  {edu.img && (
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain rounded-full"
                    />
                  )}
                </div>

                {/* Card */}
                {isLeft ? (
                  <div className="sm:col-start-1 sm:justify-self-end sm:pr-20 pl-16 sm:pl-0">
                    <EducationCard data={edu} align="left" />
                  </div>
                ) : (
                  <div className="sm:col-start-2 sm:justify-self-start sm:pl-20 pl-16 sm:pl-0">
                    <EducationCard data={edu} align="right" />
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

function EducationCard({ data, align = "left" }) {
  return (
    <div
      className={`w-full max-w-xl rounded-2xl border bg-gray-900/80 border-white/10 
                  backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.25)]
                  transition-transform duration-300 hover:scale-[1.02]
                  mt-8 sm:mt-0 p-5 sm:p-8
                  ${align === "right" ? "text-left sm:text-right" : "text-left"}`}
    >
      {/* Header */}
      <div
        className={`flex items-center gap-4 sm:gap-6 ${
          align === "right" ? "sm:flex-row-reverse" : ""
        }`}
      >
        {/* School Logo */}
        {data.img && (
          <div className="w-20 h-20 rounded-md overflow-hidden shrink-0 bg-white">
            <img
              src={data.img}
              alt={data.school}
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* School Info */}
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            {data.degree}
          </h3>
          <h4 className="text-sm sm:text-base text-gray-300">{data.school}</h4>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">{data.date}</p>
        </div>
      </div>

      {/* Grade */}
      <p className="mt-4 text-gray-400 font-semibold text-sm sm:text-base">
        Grade: {data.grade}
      </p>

      {/* Description */}
      {data.desc && (
        <p className="mt-2 text-gray-400 text-sm sm:text-base leading-relaxed">
          {data.desc}
        </p>
      )}
    </div>
  );
}

export default Education;
