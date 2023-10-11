// import React, { useEffect, useState } from "react";
// import CountUP from "react-count-up";
import AutoCounter from "./autocount";
import birdimg from "./image/birds.png";
// import {useInView}from 'react-intersection-observer'
function Days() {
  // const [ref, inView] = useInView({
  //   threshold: 0.5,
  // })

  return (
    <>
      <div className="days-main">
        <div className="days-text">
          <div>
            <h2 style={{ fontFamily: "Nothing You Could Do", color: "green" }}>
              Deliciously near you
            </h2>
            <h1
              style={{
                fontFamily: "sans-serif",
                fontSize: 40,
                color: "#10221B",
              }}
            >
              Our Footprints
            </h1>
            <p style={{ width: 500 }}>
              Tempor incididunt at labore. et solore magna aliqua. quis ipsum
              suspendisse ultrices gravida. risus commodo vivverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
          <div className="days-counter">
            <AutoCounter name="Cities" maxCount={30} intervalMs={500} />
            <AutoCounter name="Countries " maxCount={10} intervalMs={1500} />
            <AutoCounter name="Outlets" maxCount={150} intervalMs={90} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Days;
