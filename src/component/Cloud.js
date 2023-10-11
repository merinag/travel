import React from "react";

import { useState } from "react";
import afar from "./image/afar.jpg";
import simien from "./image/simien.jpg";
import bonga from "./image/semen.jpg";
import bahrdar from "./image/coffe.jpg";
import mainpic from "./image/adv.jpg";
import { useNavigate } from "react-router-dom";

function Cloud() {
  const navigate = useNavigate();
  function enquire() {
    navigate("/contact");
  }
  const imageMain = [
    {
      img: afar,
      title: "AFAR",
      description: "kayling makes takes thrill to the next level.",
      button: "Enquire",
    },
    {
      img: simien,
      title: "SIMIEN",
      description: "kayling makes takes thrill to the next level.",
      button: "Enquire",
    },
    {
      img: bonga,
      title: "BONGA",
      description: "kayling makes takes thrill to the next level.",
      button: "Enquire",
    },
    {
      img: bahrdar,
      title: "BAHIRDAR",
      description: "kayling makes takes thrill to the next level.",
      button: "Enquire",
    },
  ];
  return (
    <>
      <div className="cloud-main">
        <h2 style={{ fontFamily: "Nothing You Could Do", color: "green" }}>
          Take yorself
        </h2>
        <h1
          style={{ fontFamily: "sans-serif", fontSize: 40, color: "#10221B" }}
        >
          Adventures Ideas
        </h1>
      </div>
      <div className="cloud-main-img">
        {imageMain.map((emg) => {
          return (
            <>
              <div className="img-container">
                <img
                  src={emg.img}
                  style={{
                    borderRadius: "50%",

                    height: 250,
                    width: 250,
                  }}
                />
                <h1 style={{ color: "#10221B" }}>{emg.title}</h1>
                <p style={{ width: "200px" }}>{emg.description}</p>
                <button
                  onClick={enquire}
                  style={{
                    background: "#10221B",
                    color: "#fff",
                    padding: 9,
                    border: "none",
                  }}
                >
                  {emg.button}
                </button>
              </div>
            </>
          );
        })}
      </div>

      <div className="cloud-mount">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // width: "1500px",
            // maxWidth: "100%",
            flexWrap: "wrap",
            position: "relative",
            // marginLeft:'2px'
          }}
        >
          <div style={{display:'flex',flexWrap:'wrap'}}>
            <div className="cloud-description">
              <h1>Making Adventure tours,activities affordable.</h1>
              <hr style={{ width: "100px", marginLeft: "0" }} />
              <p style={{ width: 400 }}>
                Find an advanture, crete a hobby that is related to nature in
                its vert pristiene shape for your goodness.
              </p>
            </div>

            <div className="both-pic">
              <img className="main-pic" src={mainpic} />
              <div className="main-picover"></div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Cloud;
