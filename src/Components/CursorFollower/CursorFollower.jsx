import React, { useEffect, useRef, useState } from "react";
import "./CursorFollower.css";

const CursorFollower = () => {
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const [showClickText, setShowClickText] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      return;
    }

    const circle = circleRef.current;
    const clickText = textRef.current; 

    const mouse = { x: 0, y: 0 };
    const previousMouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let currentScale = 0;
    let currentAngle = 0;
    const speed = 0.05;

    let hoveredRect = null;
    let isHovering = false;
    let isArticleHovering = false;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const el = e.target;
      const isTextElement = ["I", "SPAN"].includes(el.tagName);
      const articleEl = el.closest("ARTICLE"); 
      const isArticleElement = articleEl !== null;

      if (isTextElement) {
        hoveredRect = el.getBoundingClientRect();
        isHovering = true;
      } else {
        hoveredRect = null;
        isHovering = false;
      }
      
      if (isArticleElement) {
        isArticleHovering = true;
        setShowClickText(true);
      } else {
        isArticleHovering = false;
        setShowClickText(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const tick = () => {
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;

      const deltaX = mouse.x - previousMouse.x;
      const deltaY = mouse.y - previousMouse.y;
      previousMouse.x = mouse.x;
      previousMouse.y = mouse.y;

      // Velocity calculation (speed of movement)
      const velocity = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2) * 4, 150);
      
      // Increased stretching factor (0.4) for visible movement effect
      const scaleValue = (velocity / 150) * 0.4; 
      currentScale += (scaleValue - currentScale) * speed;

      const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      if (velocity > 20) currentAngle = angle; 

      // Calculate a dynamic shadow based on speed (velocity)
      // This dynamic shadow gives the "pulse" effect during movement
      const shadowIntensity = Math.min(velocity / 150, 0.7);
      const defaultDynamicShadow = `0 0 20px #120402ff, 0 0 10px rgba(18, 4, 2, ${shadowIntensity})`;

      // Transform with rotation and dynamic scaling (Default/Text Hover)
      let transformWithRotation = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) rotate(${currentAngle}deg) scale(${
        1 + currentScale
      }, ${1 - currentScale})`;

      // Transform WITHOUT rotation but WITH dynamic scaling (Article Hover)
      let transformWithoutRotation = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) scale(${
        1 + currentScale
      }, ${1 - currentScale})`;


      if (isHovering && hoveredRect) {
        // Text element hover logic (Dark border, no stretching/rotation needed here)
        circle.style.borderColor = `#120402ff`;
        // Dark, large shadow for text hover
        circle.style.boxShadow = `0 0 30px #120402ff`; 
        circle.style.width = `${hoveredRect.width + 10}px`;
        circle.style.height = `35px`;
        circle.style.borderRadius = `14px`;
        // Fixed position for text hover
        circle.style.transform = `translate(${
          hoveredRect.left + hoveredRect.width / 2
        }px, ${hoveredRect.top + hoveredRect.height / 2}px) translate(-50%, -50%)`;
        
      } else if (isArticleHovering) {
          // Article element hover logic - Apply WHITE border
          circle.style.width = `80px`;
          circle.style.height = `80px`;
          circle.style.borderRadius = `50%`;
          circle.style.borderColor = `#ffffff`;
          // White shadow on Article hover (static)
          circle.style.boxShadow = `0 0 20px rgba(0, 0, 0, 1), inset 0 0 10px rgba(255, 255, 255, 0.5)`; 
          
          // 👇 CHANGE: Apply scaling but NO rotation
          circle.style.transform = transformWithoutRotation;
          
          if (clickText) {
            clickText.style.transform = `none`; 
          }

      } else {
        // Default cursor follower logic - WITH ROTATION and velocity effects
        circle.style.width = `40px`;
        circle.style.height = `40px`;
        circle.style.borderRadius = `50%`;
        circle.style.borderColor = `#120402ff`;
        
        // 👇 Apply dynamic shadow based on movement speed
        circle.style.boxShadow = defaultDynamicShadow; 
        
        // Apply rotation and velocity scaling
        circle.style.transform = transformWithRotation;
      }

      requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) {
    return null;
  }

  return (
    <div className="circle" ref={circleRef}>
      {showClickText && <span className="click-text" ref={textRef}>Click!</span>} 
    </div>
  );
};

export default CursorFollower;