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
        <div className="md:absolute left-[1.25%]  top-[45%] w-[95%] md:w-[33.33%] order-2 md:order-1 text-left">
          <h3 className="text-[1.15rem] md:text-[1.5rem] font-bold text-[#0a0a23]">Vishal S. Gupta</h3>
          <p className="mt-[0rem] text-[#0a0a23] text-[0.800rem] md:text-[1.1rem]">
            I am a <span className="font-bold text-[#ff5f49]">Front-End Developer</span> skilled in building attractive websites and web apps using HTML, CSS, Tailwind, JavaScript, and React. I hold a BSc (IT) Degree from Valia College of Commerce and Science, University of Mumbai, with a CGPA of 7.32.
          </p>

          <div className="flex gap-[1rem] mt-[1rem] text-[#0a0a23]">
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              className="hover:text-blue-700 text-[1.5rem] md:text-[1.5rem] transition-transform duration-300 transform hover:scale-125 hover:text-[#ff5f49]"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:VishalGupta25980@gmail.com"
              target="_blank"
              className="hover:text-[#ff5f49] text-[1.5rem] md:text-[1.5rem] transition-transform duration-300 transform hover:scale-125 hover:text-[#ff5f49]"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://wa.me/9773146258"
              target="_blank"
              className="hover:text-green-500 text-[1.5rem] md:text-[1.5rem] transition-transform duration-300 transform hover:scale-125 hover:text-[#ff5f49]"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="tel:+9773146258"
              className="hover:text-blue-500 text-[1.4rem] md:text-[1.4rem] transition-transform duration-300 transform hover:scale-125 hover:text-[#ff5f49]"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
        
        {/* Arrow Left */}
        <div className="absolute flex justify-end items-center  md:right-[55%] md:top-[6rem]  right-[15.5rem] top-[18%] w-[22rem] md:w-[33.33%]">
          <img
            className="w-[30%] md:w-[45%] h-auto opacity-100 -rotate-90 "
            src="data:image/svg+xml,..."
            alt="Arrow with Transparent Background"
          />
        </div>

        {/* Image Section */}
        <div
          className="flex justify-center items-center order-1 md:order-2 mt-[9rem] cursor-pointer"
          onClick={toggleImage}
        >
          <img
            className="w-[100rem] md:w-[37rem] h-auto"
            src={
              showOriginalImage
                ? "https://res.cloudinary.com/dwtn2kajc/image/upload/v1739437437/Main-OG_rfy4zm.png"
                : "https://res.cloudinary.com/dwtn2kajc/image/upload/v1747854583/Untitled_design_3_1_uxiddn.png"
            }
            alt="Hero"
          />
        </div>

        {/* Arrow Right */}
        <div className="absolute flex justify-end items-center top-[12rem] right-[9%] md:right-[32%] md:top-[22rem]">
          <img
            className="w-[80%] md:w-[100%] h-auto opacity-50"
            src="data:image/svg+xml,..."
            alt="Arrow with Transparent Background"
          />
        </div>

        {/* Right Section */}
        <div className="absolute right-[-0.1rem]  top-[9%] w-[59vw] md:w-[26vw] md:top-[28%] md:right-[0.5rem] text-left text-[#0a0a23]">
          <h3 className="text-[1.15rem] md:text-[1.8rem] font-bold">&lt;Coder/&gt;</h3>
          <p className="mt-[0rem] text-[#0a0a23] text-[3.6vw] md:text-[1.5rem]">
            A <span className="text-[#ff5f49] font-bold">Front-End Developer</span> who writes clean, efficient code with{" "}
            <span className="text-[#ff5f49] font-bold">modern web technologies. 🚀</span>
          </p>
        </div>

        {/* Smile Face (Hidden on Mobile) */}
        <div className="hidden md:block md:absolute right-[0%] md:right-[0%] md:top-[55%] md:w-[25%]">
          <img
            className="opacity-1"
            src="data:image/svg+xml,..."
            alt="Smile Face with Transparent Background"
          />
        </div>
      </header>
    </div>
  );
};

export default Home;
