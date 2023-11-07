import React from "react";
import Header from "./header";
import cloud from "./image/cloud.png";
import Ventura from "./Ventura";
import Footer from "./footer";

import Contactlogin from "./contact-login";
function Contact() {

  return (
    <div style={{ maxWidth: " 100%", width: " 1500px" }}>
      <div
        className="header "
        style={{ backgroundImage: ` url(${require("./image/uss.jpg")})` }}
      >
        <Header />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ color: "white", fontSize: 70 }}>Contact</h1>
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

        <div className="contact-text">
          <div>
            <h2 style={{ fontFamily: "Nothing You Could Do", color: "green" }}>
              Talk to us
            </h2>
            <h1
              style={{
                fontFamily: "sans-serif",
                fontSize: 40,
                color: "#10221B",
              }}
            >
              Get in Touch
            </h1>
            <p style={{ width: 500 }}>
              Contact us and get strapped in for a better adventure exprience in
              your life time just look for opportunity to be with nature.don't
              hesitate to write to us and ask for any helpbaqt any time for your
              convenience.
            </p>
          </div>
          <div>
            <h1
              style={{
                fontFamily: "sans-serif",
                fontSize: 40,
                color: "#10221B",
              }}
            >
              Contact Info
            </h1>
            <a href="mailto:merina@gmail.com">merina@gmail.com</a>
            <p>+251950279186</p>
            <p>megenagna grace city mall, 9th floor</p>
          </div>
          <div>
            <h1
              style={{
                fontFamily: "sans-serif",
                fontSize: 40,
                color: "#10221B",
              }}
            >
              Business Hours:
            </h1>
            <p>Monday - Friday</p>
            <p>Saturday - Sunday</p>
            <p>8am - 9pm</p>
            <p>9am - 6pm</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 50,
            marginLeft: "6rem",
            marginTop: "6rem",
            flexWrap: "wrap",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31632.605625750304!2d36.817373964972724!3d7.675010809868106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1695671179974!5m2!1sen!2set"
            width="500"
            height="450"
            style={{ border: 0, backgroundColor: "lightBlue" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="contact-form">
            <Contactlogin/>
          </div>
        </div>
      </div>
      <Ventura />
      <Footer />
    </div>
  );
}

export default Contact;
