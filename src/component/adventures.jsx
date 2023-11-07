import React, { useEffect } from "react";
import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Header from "./header";
import cloud from "./image/cloud.png";
import Headers from "./Front";
import Images from "./Image";
import Title from "./title";
function Adventures() {
  const [photos, setphotos] = useState([]);
  const [isLoading, setIsLoadidng] = useState(false);

  useEffect(() => {
    console.log(
      "*****+++++++++++++++++++++++++++++++==========================*****"
    );
    console.log(photos);
    console.log("**********");
  }, [photos]);
  return (
    <>
      <div>
        <div
          className="header "
          style={{ backgroundImage: ` url(${require("./image/spaflag.jpg")})` }}
        >
          <Header />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 style={{ color: "white", fontSize: 70 }}>Adventures</h1>
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
        <Headers setIsLoadidng={setIsLoadidng} setphotos={setphotos} />
        <Title />
        {!isLoading && <Images photos={photos} />}
        {isLoading && <h2 style={{ textAlign: "center" }}>...isLoading</h2>}
      </div>
    </>
  );
}

export default Adventures;
