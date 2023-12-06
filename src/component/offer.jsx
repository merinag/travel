import React from "react";
import icon1 from "./image/kesticon.png";
import icon2 from './image/locate.png';
import icon3 from './image/icon.png';
import icon4 from './image/caricon.png';
import icon5 from './image/foot.png'
import icon6 from './image/bagicon.png'
function Offer() {
  return (
    <>
      <div className="offer-text">
        <h2 style={{ fontFamily: "Nothing You Could Do", color: "green" }}>
          Select your activity
        </h2>
        <h1
          style={{ fontFamily: "sans-serif", fontSize: 40, color: "#10221B" }}
        >
          Explore Activities
        </h1>
      </div>
      <div className="offer-main">
        <div style={{ width: 400, height: 500 }}></div>
        <div className="offer-icon">
          <div>
            <img style={{ width: 50, height: 50 }} src={icon1} />
            <h2>Various Adventures</h2>
            <p>At the time of the incident, there was a great deal of lore </p>
            <hr style={{ width: "200px", marginLeft: "0" }} />
          </div>
          <div>
            <img style={{ width: 50, height: 50 }} src={icon2} />
            <h2>Adventurous Trails</h2>
            <p>At the time of the incident, there was a great deal of lore </p>
            <hr style={{ width: "200px", marginLeft: "0" }} />
          </div>
          <div>
            <img style={{ width: 50, height: 50 }} src={icon3} />
            <h2>Trained Guides</h2>
            <p>At the time of the incident, there was a great deal of lore </p>
            <hr style={{ width: "200px", marginLeft: "0" }} />
          </div>
          <div>
            <img style={{ width: 50, height: 50 }} src={icon4} />
            <h2>Family Trips</h2>
            <p>At the time of the incident, there was a great deal of lore </p>
            <hr style={{ width: "200px", marginLeft: "0" }} />
          </div>
          <div>
            <img style={{ width: 50, height: 50 }} src={icon5} />
            <h2>Custom Packages</h2>
            <p>At the time of the incident, there was a great deal of lore </p>

          </div>
          <div>
            <img style={{ width: 50, height: 50 }} src={icon6} />
            <h2>Complete Gudie</h2>
            <p>At the time of the incident, there was a great deal of lore </p>

          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
