import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import CursorFollower from "./Components/CursorFollower/CursorFollower.jsx";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen.jsx"; 
import "./App.css";

// 💡 Critical Image URLs and Timing Constants
const CLOUDINARY_IMAGE_URLS = [
  "https://res.cloudinary.com/dwtn2kajc/image/upload/v1739437437/Main-OG_rfy4zm.png",
  "https://res.cloudinary.com/dwtn2kajc/image/upload/v1758037232/Untitled_design_3_1_uxiddn_c_crop_w_1587_h_1663_x_0_y_0_t5gzpj.png"
];

const MIN_DISPLAY_TIME = 1500; // 1500ms (1.5 seconds) minimum display time
const FADE_DURATION = 400;  // CSS transition time (0.4s)

// Helper function to load a single image using a Promise
const preloadImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = url;
  });
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true); 

  useEffect(() => {
    let stopLoaderTimer;
    
    // 1. Image loading Promise
    const imageLoadPromise = Promise.all(CLOUDINARY_IMAGE_URLS.map(preloadImage));
    
    // 2. Minimum time Promise
    // We create a separate deferred function that will resolve AFTER image loading is done, 
    // but only if images loaded quickly.
    
    // We'll use a single promise/timer resolution point:
    const startLoadingTime = Date.now();

    imageLoadPromise
      .then(() => {
        const timeElapsed = Date.now() - startLoadingTime;
        const remainingDelay = Math.max(0, MIN_DISPLAY_TIME - timeElapsed);

        // This timer ensures the MIN_DISPLAY_TIME is met. 
        // If images took 200ms, remainingDelay is 1300ms.
        // If images took 1700ms, remainingDelay is 0ms.
        return new Promise(resolve => setTimeout(resolve, remainingDelay));
      })
      .finally(() => {
        // --- START FADE-OUT LOGIC ---

        // 1. Immediately trigger the CSS fade-out (setIsLoading(false))
        setIsLoading(false); 

        // 2. Remove the component after the CSS transition finishes.
        stopLoaderTimer = setTimeout(() => {
          setShowLoader(false); 
        }, FADE_DURATION); // Wait only for the 400ms CSS fade to complete
      });
      
    // Cleanup function
    return () => {
      clearTimeout(stopLoaderTimer);
    };
  }, []); // Run only once on mount

  // Conditionally render the LoadingScreen component.
  const loader = showLoader ? <LoadingScreen isFading={!isLoading} /> : null;
  
  // Render the full application
  return (
    <div>
      {loader} 
      
      <CursorFollower />
      <Navbar />
      <Home />
      <Projects/>
      <Skills/>
      <Experience/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;