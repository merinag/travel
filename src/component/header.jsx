import React from "react";
import advent from "./image/advent.png";
import sun from "./image/sunrise.png";
import cloud from "./image/cloud.png";
import { Link } from "react-router-dom";
import Avatar from './Avatar'
function Header(props) {
  return (
    <>
      <div className="mer">
        <div>
          <div className="header-head">
            <img className="header-img" src={advent} />
            <div className="header-link">
              <Link to="/">Home</Link>
              <Link  to="/contact">Contact</Link>
              <Link to="/About">About</Link>
              <Link to="/adventures">Adventures</Link>
              <Avatar/>
            </div>
          </div>
          {/* {props.hH} */}
          {/* {props.isIn == "about" } */}

          {props.isIn == "home" && (
            <div className="header-sun">
              <div>
                <img src={sun} />
              </div>
              <h2
                style={{
                  color: "white",
                  fontSize: 40,
                  fontFamily: "Nothing You Could Do,cursive",
                }}
              >
                Discover the
              </h2>
              <h1
                style={{
                  color: "white",
                  fontFamily: "sans-serif",
                  fontSize: 70,
                  textAlign: "center",
                }}
              >
                Adventure Travel
              </h1>
            </div>
          )}

          {props.isIn == "home" && (
            <div
              style={{
                bottom: "-24px",
                position: "absolute",
                // marginTop: -28,
                background: "transparent",
              }}
            >
              <img className="header-cloud" src={cloud} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Header;
