// src/Components/LoadingScreen/LoadingScreen.jsx
import React from 'react';
import './LoadingScreen.css';

// Accept the new prop: isFading
const LoadingScreen = ({ isFading }) => {
  return (
    // Use the isFading prop to apply the fade-out class
    <div className={`loader-screen-overlay ${isFading ? 'fade-out' : ''}`}> 
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;