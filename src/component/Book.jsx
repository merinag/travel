import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

const Booking = ({ tour, avgRating }) => {

  // const { price, reviews, title } = tour
  console.log(window.location.search);
  const urlSearch = window.location.search;
  const params = new URLSearchParams(urlSearch);
  const bookingId = params.get('id');
  const title = params.get('title');
  // const bookingimage = params.get('img')

  const navigate = useNavigate();
  const [booking, setBooking] = useState({});

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(booking)
    try {

      axios.post(
        'http://localhost:3001/book',
        { ...booking, bookingId },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }).then(() => {
          navigate('/add')
        })

    } catch (error) {
      toast(error.response.data.error, {
        autoClose: false,
        type: "error",
      });
    }
    // .then((Response) => {
    //   if (!token) {
    //     navigate('/add')
    //   }

    // })
    // .catch((error) => {
    //   console.log('not found')
    // })
    //

  };
  return (
    <div>
      <ToastContainer />
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >

        <h5>Information</h5>
        <h2>{title}</h2>
        <div className="contact-form" style={{ maxWidth: 'min-content' }}>
          <form

            style={{
              borderWidth: '400px',
              display: 'flex',
              flexDirection: 'column',
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
            <input onClick={submit} type="submit" value={'submit'} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
