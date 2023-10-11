import React from "react";
import advent from "./image/advent.png";
import sun from "./image/sunrise.png";
import cloud from "./image/cloud.png";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <>
      <div className="mer">
        <div style={{ flexWrap: "wrap" }}>
          <div className="header-head">
            <img className="header-img" src={advent} />
            <div className="header-link">
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/About">About</Link>
              <Link to="/adventure">Adventures</Link>
            </div>
          </div>
          {/* {props.hH} */}
          {/* {props.isIn == "about" } */}

          {props.isIn == "home" && (
            <div className="header-sun">
              <img src={sun} />
              <h2 style={{ color: "white", fontSize: 40 }}>Discover the</h2>
              <h1
                style={{
                  color: "white",
                  fontFamily: "sans-serif",
                  fontSize: 100,
                }}
              >
                Adventure Travel
              </h1>
            </div>
          )}
        </div>
        {props.isIn == "home" && (
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
        )}
      </div>
    </>
  );
}
export default Header;
