import React, { Component } from "react";
import Header from "./header";
import cloud from "./image/cloud.png";
import { Link, useNavigate } from "react-router-dom";
import flag from "./image/ehio.jpg";
import camel from "./image/camel.jpg";
import church from "./image/church.jpg";
import img1 from "./image/spahaa.jpg";
import img2 from "./image/spachjd.jpg";
import img3 from "./image/spgonder.jpg";

import Footer from "./footer";
// import Show from "./show";

function About() {
  const navigate = useNavigate();
  function view() {
    navigate("/adventures");
  }
  return (
    <>
      <div
        className="header "
        style={{ backgroundImage: ` url(${require("./image/poot.avif")})` }}
      >
        <Header />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ color: "white", fontSize: 70 }}>About</h1>
        </div>
      </div>

      <div
        style={{
          marginTop: -30,
          position: "relative",
          backgroundColor: "transparent",
          bottom: 40,
        }}
      >
        <img className="header-cloud" src={cloud} />
      </div>
      <div className="offer-text">
        <h2 style={{ fontFamily: "Nothing You Could Do", color: "green" }}>
          soulful adventure
        </h2>
        <h1
          style={{ fontFamily: "sans-serif", fontSize: 35, color: "#10221B" }}
        >
          Making the Adventure Happen
        </h1>
      </div>
      <div style={{ marginLeft: " 120px", marginTop: 90 }}>
        <h1
          style={{ fontFamily: "sans-serif", fontSize: 35, color: "#10221B" }}
        >
          activities that makes you thrilled.
        </h1>
        <hr style={{ width: "100px", marginLeft: "0" }} />
        <p style={{ width: 700 }}>
          Welcome to Adventure travel, your ultimate guide to the enchanting
          world of Ethiopian travel. Our journey through this mesmerizing land
          began with a passion for exploring the rich tapestry of cultures,
          breathtaking landscapes, and hidden gems that Ethiopia has to offer.
        </p>
        <button
          onClick={view}
          style={{
            background: "#10221B",
            color: "#fff",
            padding: 12,
            width: 180,
            border: "none",
          }}
        >
          View Activities
        </button>
      </div>
      <div className="about-image">
        <div
          className="about-img"
          style={{ display: "flex", gap: 30, flexDirection: "column" }}
        >
          <img src={camel} />
          <img src={church} />
        </div>
        <div className="about-imgtext">
          <img src={flag} />
          <h2
            style={{ fontFamily: "sans-serif", fontSize: 20, color: "#10221B" }}
          >
            A Vision Created For The Activities To Make Sure You Enjoy & Get
            thrilled.
          </h2>
        </div>
      </div>
      <div style={{ marginLeft: " 120px", marginTop: 90 }}>
        <h1
          style={{ fontFamily: "sans-serif", fontSize: 35, color: "#10221B" }}
        >
          Adventure brings the best in you
        </h1>
        <hr style={{ width: "100px", marginLeft: "0", color: "green" }} />
        <p style={{ width: 700 }}>
          With years of exploration and cultural immersion under our belts, our
          team is well-versed in every nook and cranny of Ethiopia. We've
          climbed the peaks, savored the cuisine, and celebrated the festivals.
          Our deep knowledge of the country allows us to curate the best travel
          experiences just for you.
        </p>
      </div>
      <div className="about-imag">
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default About;
