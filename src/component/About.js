import React, { Component } from "react";
import Header from "./header";
import cloud from "./image/cloud.png";
import { Link, useNavigate } from "react-router-dom";
import flag from "./image/ehio.jpg";
import camel from "./image/camel.jpg";
import church from "./image/church.jpg";
import TimeCounter from "./timercounter";
import Slideshow from "./imageslideshow";
import { Slide } from "react-slideshow-image";
import AutoCounter from "./autocount";
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
        <Header isIn="about" />
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
        <p style={{ width: 700, color: "rgba(0, 0, 0, 0.501)" }}>
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
        <p style={{ width: 700, color: "rgba(0, 0, 0, 0.501)" }}>
          With years of exploration and cultural immersion under our belts, our
          team is well-versed in every nook and cranny of Ethiopia. We've
          climbed the peaks, savored the cuisine, and celebrated the festivals.
          Our deep knowledge of the country allows us to curate the best travel
          experiences just for you.
        </p>
      </div>
      <div>
        {/* <TimeCounter/> */}
        <AutoCounter name="Counter A" maxCount={5} intervalMs={1000} />
        <AutoCounter name="Counter B" maxCount={10} intervalMs={500} />
        <AutoCounter name="Counter C" maxCount={15} intervalMs={200} />
      </div>

      {/* <div
        className="rotate-img"
        style={{ backgroundImage: ` url(${require("./image/compass.jpg")})` }}
      ></div>
      <div>
       
      </div> */}

      {/* <div>
          <h2>About</h2>
          <a href="mailto:merina@gmail.com">merina@gmail.com</a>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31632.605625750304!2d36.817373964972724!3d7.675010809868106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1695671179974!5m2!1sen!2set"
            width="600"
            height="450"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
    </>
  );
}

export default About;
