import React, { useState, useEffect } from "react";
//  import './abay.jpg'
import kesimg from "./image/spagond.jpg";
import afar from "./image/coffe3.jpg";
import gonder from "./image/coffe1.jpg";
import abay from "./image/sparod.jpg";
import woman from "./image/spawensz.jpg";

const colors = [
  {
    img: kesimg,
    title: "Visit the Ancient builiding at Gonder",
    price: "Start from Birr3000.00",
  },
  {
    img: afar,
    title: "Visit the Afar desert",
    price: "Start from Birr4000.00",
  },
  {
    img: gonder,
    title: "Visit the Ancient chirstian church",
    price: "Start from Birr2500.00",
  },
  {
    img: abay,
    title: "Visit beautifull urban area ",
    price: "Start from Birr5500.00",
  },
  {
    img: woman,
    title: "Visit the Simien Mountain",
    price: "Start from Birr4000.00",
  },
];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timerRef = React.useRef(null);

  function ressetTimeout() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }
  React.useEffect(() => {
    ressetTimeout();
    timerRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      ressetTimeout();
    };
  }, [index]);

  return (
    <div className="Slide">
      <div className="activty-text">
        <h2 style={{ fontFamily: "Nothing You Could Do", color: "green" }}>
          Select your activity
        </h2>
        <h1 style={{ fontFamily: "sans-serif", fontSize: 40,color:'#10221B' }}>
          Explore Activities
        </h1>
      </div>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((color, index) => (
            <div className="slide" key={index}>
              <img
                style={{ width:'100%', height: 400}}
                src={color.img}
                // alt={`Image ${index + 1}`}
              />
              <div style={{ textAlign: "center" }}>
                <h2>{color.title}</h2>
                <p>{color.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
