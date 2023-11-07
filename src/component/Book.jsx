import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
const Booking = ({ tour, avgRating }) => {
  // const { price, reviews, title } = tour
  console.log(window.location.search);
  const urlSearch = window.location.search;
  const params = new URLSearchParams(urlSearch);
  const bookingId = params.get("id");
  const navigate = useNavigate();
  const [booking, setBooking] = useState({});

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();
    axios.post(
      "http://localhost:3001/book",
      { ...booking, bookingId },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
      navigate("/add")
    );
    
  };
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h5>Information</h5>
        <div className="contact-form" style={{ maxWidth: "min-content" }}>
          <form
            onSubmit={submit}
            style={{
              borderWidth: "400px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <input
              type="tel"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />

            <input
              type="date"
              placeholder=""
              id="date"
              required
              onChange={handleChange}
            />
             {/* <input
              type="text"
              placeholder="place"
              id="place"
              required
              onChange={handleChange}
            /> */}
            <input
              type="number"
              placeholder="Guest"
              id="guest"
              required
              onChange={handleChange}
            />
            <input type="submit" value={"submit"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
