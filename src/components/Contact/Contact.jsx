import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      {/* Simple Contact Text */}
      <p className="text-gray-300 text-lg text-center max-w-2xl">
        I’d love to connect with you! For any opportunities, collaborations, or
        inquiries, please feel free to reach out to me at{" "}
        <span className="text-purple-400 font-semibold">
         chaturvediarchnaa18041996@gmail.com
        </span>
        . Looking forward to hearing from you!
      </p>
    </section>
  );
};

export default Contact;
