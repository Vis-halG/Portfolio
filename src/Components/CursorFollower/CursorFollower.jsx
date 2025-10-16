import React, { useEffect, useRef } from "react";
import "./CursorFollower.css";

const CursorFollower = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    // Check if the device is a mobile screen (or any screen with a max-width of 768px)
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      return; // Exit the effect if it's a mobile screen
    }

    const circle = circleRef.current;

    const mouse = { x: 0, y: 0 };
    const previousMouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };

    let currentScale = 0;
    let currentAngle = 0;
    const speed = 0.05;

    let hoveredRect = null;
    let isHovering = false;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const el = e.target;
      const isTextElement = ["I", "SPAN"].includes(el.tagName);

      if (isTextElement) {
        hoveredRect = el.getBoundingClientRect();
        isHovering = true;
      } else {
        hoveredRect = null;
        isHovering = false;
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

      const velocity = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2) * 4, 150);
      const scaleValue = (velocity / 150) * 0.25;
      currentScale += (scaleValue - currentScale) * speed;

      const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      if (velocity > 20) currentAngle = angle;

      let transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) rotate(${currentAngle}deg) scale(${
        1 + currentScale
      }, ${1 - currentScale})`;

      if (isHovering && hoveredRect) {
        const width = hoveredRect.width + 10;
        const height = 35;

        circle.style.width = `${width}px`;
        circle.style.height = `${height}px`;
        circle.style.borderRadius = `14px`;
        circle.style.borderColor = `#120402ff`;
        circle.style.boxShadow = `0 0 30px #120402ff`;

        circle.style.transform = `translate(${
          hoveredRect.left + hoveredRect.width / 2
        }px, ${hoveredRect.top + hoveredRect.height / 2}px) translate(-50%, -50%)`;
      } else {
        circle.style.width = `40px`;
        circle.style.height = `40px`;
        circle.style.borderRadius = `50%`;
        circle.style.borderColor = `#120402ff`;
        circle.style.boxShadow = `0 0 20px #120402ff`;
        circle.style.transform = transform;
      }

      requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Conditionally render the cursor follower div based on the device type
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) {
    return null; // Don't render anything on mobile
  }

  return <div className="circle" ref={circleRef}></div>;
};

export default CursorFollower;