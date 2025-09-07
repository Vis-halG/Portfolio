import React, { useState } from "react";

const Home = () => {
  const [showOriginalImage, setShowOriginalImage] = useState(true);

  const toggleImage = () => {
    setShowOriginalImage(!showOriginalImage);
  };

  return (
    <div className="">
      <header className="flex flex-col md:flex-row justify-center items-center w-full relative">
        {/* Left Section */}
        <div className="md:absolute left-[1.25%] top-[45%] w-[95%] md:w-[33.33%] order-2 md:order-1 text-left">
          <h3 className="text-[1.15rem] md:text-[1.5rem] font-bold">
            Vishal S. Gupta
          </h3>
          <p className="mt-[0rem] text-gray-700 text-[0.800rem] md:text-[1.1rem]">
            I am a{" "}
            <span className="font-bold text-[#ff5f49] ">
              Front-End Developer
            </span>{" "}
            skilled in building attractive websites and web apps using HTML,
            CSS, Tailwind, JavaScript, and React. I hold a BSc (IT) Degree from
            Valia College of Commerce and Science, University of Mumbai, with a
            CGPA of 7.32.
          </p>

          {/* Social Links */}
          <div className="flex gap-[1rem] mt-[1rem]">
            <a
              href="https://github.com/Vis-halG"
              target="_blank"
              className="text-[1.5rem] md:text-[1.5rem] text-[#222] transition-transform duration-300 transform hover:scale-125 hover:text-[#f05743]"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              className="text-[1.5rem] md:text-[1.5rem] text-[#222] transition-transform duration-300 transform hover:scale-125 hover:text-[#f05743]"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:VishalGupta25980@gmail.com"
              target="_blank"
              className="text-[1.5rem] md:text-[1.5rem] text-[#222] transition-transform duration-300 transform hover:scale-125 hover:text-[#f05743]"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://wa.me/9773146258"
              target="_blank"
              className="text-[1.5rem] md:text-[1.5rem] text-[#222] transition-transform duration-300 transform hover:scale-125 hover:text-[#f05743]"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="tel:+9773146258"
              className="text-[1.4rem] md:text-[1.4rem] text-[#222] transition-transform duration-300 transform hover:scale-125 hover:text-[#f05743]"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>

        {/* Right Section (Image Toggle) */}
        <div className="order-1 md:order-2">
          <img
            src={
              showOriginalImage
                ? "https://res.cloudinary.com/dbithmxnp/image/upload/v1736006809/sammy-line-man-working-on-a-computer_jhxwm9.png"
                : "https://res.cloudinary.com/dbithmxnp/image/upload/v1736006795/sammy-line-man-and-woman-high-fiving-each-other_kgxomd.png"
            }
            alt="Profile"
            className="max-w-[280px] md:max-w-[400px] transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
            onClick={toggleImage}
          />
        </div>
      </header>
    </div>
  );
};

export default Home;
