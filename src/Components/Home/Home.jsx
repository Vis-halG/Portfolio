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
          <h3 className="text-[1.15rem] md:text-[1.5rem] font-bold text-[#0a0a23]">
            Vishal S. Gupta
          </h3>
          <p className="mt-[0rem] text-[#0a0a23] text-[0.800rem] md:text-[1.1rem]">
            I am a{" "}
            <span className="font-bold text-[#0a0a23]">
              Front-End Developer
            </span>{" "}
            skilled in building attractive websites and web apps using HTML,
            CSS, Tailwind, JavaScript, and React. I hold a BSc (IT) Degree from
            Valia College of Commerce and Science, University of Mumbai, with a
            CGPA of 7.32.
          </p>

          <div className="flex gap-[1rem] mt-[1rem] text-[#0a0a23]">
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              className=" text-[1.5rem] md:text-[1.5rem] transition-transform duration-300 transform hover:scale-125"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:VishalGupta25980@gmail.com"
              target="_blank"
              className=" text-[1.5rem] md:text-[1.5rem] transition-transform duration-300 transform hover:scale-125"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://wa.me/9773146258"
              target="_blank"
              className=" text-[1.5rem] md:text-[1.5rem] transition-transform duration-300 transform hover:scale-125"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="tel:+9773146258"
              className=" text-[1.4rem] md:text-[1.4rem] transition-transform duration-300 transform hover:scale-125"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
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

        {/* Right Section */}
        <div className="absolute right-[-0.1rem]  top-[9%] w-[59vw] md:w-[26vw] md:top-[28%] md:right-[0.5rem] text-left">
          <h3 className="text-[1.15rem] md:text-[1.8rem] font-bold text-[#0a0a23]">
            &lt;Coder/&gt;
          </h3>
          <p className="mt-[0rem] text-[#0a0a23] text-[3.6vw] md:text-[1.5rem]">
            A{" "}
            <span className="text-[#0a0a23] font-bold">Front-End Developer</span>{" "}
            who writes clean, efficient code with{" "}
            <span className="text-[#0a0a23] font-bold">
              modern web technologies. 🚀
            </span>
          </p>
        </div>
      </header>
    </div>
  );
};

export default Home;
