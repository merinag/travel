import React from "react";
import ventura from "./image/vent.png";
import wild from "./image/wild.png";
import mount from "./image/mouu.png";
import wander from "./image/wand.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className=" foot-image">
        <div className="foot-contain">
          <div className="foot-img">
            <img src={wander} />
            <img src={ventura} />
            <img src={wild} />
            <img src={mount} />
          </div>
          <div className="foot-wrap">
            <div className="foot-text">
              <div>
                <h2>Adventor.</h2>
                <p>
                  Going on an adventure is not about just fun, its all about
                  <br />
                  yourself and entertaining yourself. get the best out adventure
                  <br />
                  activities in you and start living the moment.
                </p>
              </div>
              <div>
                <h2>Useful Links</h2>
                <div className="foot-link">
                  <Link to="/">Home</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/About">About</Link>
                  <Link to="/adventure">Adventures</Link>
                </div>
              </div>
              <div>
                <h2>Support Links</h2>
                <p>
                  Ask a Question
                  <br />
                  Delivery Terms
                  <br />
                  Casreers
                </p>
              </div>
              <div>
                <h2>Reach Us</h2>
                <p>megenagna grace city mall, 9th floor</p>
                <a href="mailto:merina@gmail.com">merina@gmail.com</a>
              </div>
            </div>
            <div className="foot-footer">
              <p>Adventor. Created by merina<br/> Help & Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
