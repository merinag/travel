import React, { useEffect, useState } from "react";
import "react-slideshow-image";
import { Zoom, Slide } from "react-slideshow-image";
import wait from "./image/wait.png";
import begin from "./image/begin.png";
import exp from "./image/exped.png";

const slideimages = [
  {
    img: wait,
    title: ttt,
  },
  {
    img: begin,
    title: ttt,
  },
  { img: exp, title: ttt },
];
const delay = 3000;
function Slide() {
  const [currentIndex, setCurrentUser] = useState(0);
  useEffect(() => {
    setCurrentUser((prevIndex) =>
      prevIndex === colors.length - 1 ? 0 : prevIndex + 1
    ),
      delay;
  }, [index]);

  return (
    <div style={{ whiteSpace: " nowrap", transition: " ease 1000ms" }}>
      <slide>
        {slideimages.map((mm, index) => (
          <div key={index}>
            <div
              style={{
                display: " inline-block",
                height: " 400px",
                width: "100%",
                borderRadius: "40px",
              }}
            >
              <img src={mm.img} />
            </div>
          </div>
        ))}
      </slide>
    </div>
  );
}

export default Slide;
