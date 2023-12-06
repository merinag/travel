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
              <div className="foot-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="5"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M9.89231 21V13.2538H7V9.94249H9.89231C9.89231 6.42419 9.89231 2.07805 17 3.17198V6.03983C13.9231 5.71462 13.6154 6.66071 13.6154 9.94249H17L16.3231 13.2538H13.6154V21"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
                <svg
                  fill="#000000"
                  viewBox="0 0 256 256"
                  id="Flat"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M245.65723,77.65674l-30.16407,30.16455C209.4707,177.70215,150.53809,232,80,232c-14.52441,0-26.49414-2.30273-35.57764-6.84473-7.33056-3.665-10.33349-7.59912-11.07861-8.71777a8,8,0,0,1,3.84717-11.92822c.25732-.09717,23.84814-9.15772,39.09521-26.40869a109.574,109.574,0,0,1-24.72656-24.355c-13.708-18.60352-28.206-50.91114-19.43066-99.17676a8.00023,8.00023,0,0,1,13.52832-4.22559c.35254.35156,33.64209,33.1709,74.3374,43.772L120,87.99609a48.31863,48.31863,0,0,1,48.6084-47.99267,48.11329,48.11329,0,0,1,40.96875,23.99609L240,64a8.0001,8.0001,0,0,1,5.65723,13.65674Z"></path>{" "}
                  </g>
                </svg>
                <a
                  href="https://www.instagram.com/merin_haa/?img_index=1"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <svg
                    fill="#000000"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z"></path>{" "}
                    </g>
                  </svg>
                </a>
                <a href="https://web.telegram.org/k/#631377125">
                  <svg
                    fill="#000000"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M233.86621,28.7051a19.95058,19.95058,0,0,0-20.36328-3.459L28.94629,97.751a19.99924,19.99924,0,0,0,3.39062,38.22558L76,144.71V199.9844a19.99269,19.99269,0,0,0,34.14209,14.1416l23.28906-23.28882,36.55908,32.17261a19.834,19.834,0,0,0,13.14649,5.00195,20.20114,20.20114,0,0,0,6.2041-.9834,19.83327,19.83327,0,0,0,13.35645-14.5664L240.31055,48.32912A19.95249,19.95249,0,0,0,233.86621,28.7051ZM147.9126,76.79934,85.21826,122.07839l-34.82861-6.96606ZM100,190.32717V161.41726l15.37744,13.53247Zm80.80371,10.22754L107.21582,135.7969,213.18164,59.26613Z"></path>{" "}
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h2>Useful Links</h2>
              <div className="foot-link">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/About">About</Link>
                <Link to="/adventures">Adventures</Link>
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
            <div className="foot-location">
              <h2>Reach Us</h2>
              <div>
                <p>
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                        stroke="#white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  megenagna grace city mall, 9th floor
                </p>
              </div>
              <svg
                viewBox="0 0 32 32"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "20", marginRight: "8" }}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g clip-path="url(#clip0_901_2553)">
                    {" "}
                    <path
                      d="M29 9H30C31 9 31 10 31 10V30C31 30.553 30.553 31 30 31H2.019C1.466 31 1 30.553 1 30V10C1 10 1 9 2 9H3M6 16V2C6 1.447 6.447 1 7 1H25C25.553 1 26 1.447 26 2V16M11 8H16M11 12H21M4 19H12V21C12 21.553 12.447 22 13 22H20C20.553 22 21 21.553 21 21V19H28"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <clipPath id="clip0_901_2553">
                      {" "}
                      <rect width="32" height="32" fill="white"></rect>{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                </g>
              </svg>
              <a
                href="mailto:merina@gmail.com"
                style={{ color: "white", textDecoration: "none" }}
              >
                merina@gmail.com{" "}
              </a>
            </div>
          </div>

          <div className="foot-footer">
            <div>
              <p>
                {" "}
                © 2023Adventor. Created by{" "}
                <a
                  href="https://www.instagram.com/merin_haa/?img_index=1"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  MERINA
                </a>
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Help</p>
              <p>Privacy and Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
