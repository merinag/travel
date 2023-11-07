import React, { useState, useEffect } from "react";

function Timercounter() {
  const [scrolling, setScrolling] = useState(false);

  // Add a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const rect = slidingComponentRef.current.getBoundingClientRect();
      const isElementInViewport =
        rect.top < window.innerHeight && rect.bottom >= 0;
      setScrolling(isElementInViewport);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const slidingComponentRef = React.createRef();

  return (
    <div
      className={`sliding-component ${scrolling ? "scrolling" : ""}`}
      ref={slidingComponentRef}
    >
      Hover or Scroll over me
      <div className="content">Your content goes here...</div>
    </div>
  );
}
export default Timercounter;
