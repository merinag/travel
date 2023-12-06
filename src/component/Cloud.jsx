import React, { useEffect } from 'react';

import { useState } from 'react';
import mainpic from './image/adv.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Cloud() {
  const navigate = useNavigate();
  const [imageMain, setImageMain] = useState([]);
  const enquire = (id) => {
    navigate(`/book?id=${id}`);
    // const response = await axios.post(
    //   "http://localhost:3001/book",
    //   { id: id },
    //   {
    //     headers: {
    //       authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   }
    // );

    // if(response.status==200){}
    // else if(401){

    // }
  };

  const runner = async () => {
    try {
      const result = await axios.get('http://localhost:3001/bookings' , {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const listed_result = await result.data;
      console.log('LLLLLLLLLLLLLLLLLLLL');
      console.log(listed_result);
      setImageMain(listed_result);
      console.log('LLLLLLLLLLLLLLLLLLLL');
    } catch (e) { }
  };
  useEffect(() => {
    runner();
  }, []);

  return (
    <>
      <div className="cloud-main">
        <h2
          style={{ fontFamily: 'Nothing You Could Do,cursive', color: 'green' }}
        >
          Take yorself
        </h2>
        <h1
          style={{ fontFamily: 'sans-serif', fontSize: 40, color: '#10221B' }}
        >
          Adventures Ideas
        </h1>
      </div>
      <div className="cloud-main-img">
        {imageMain.map((emg) => {
          return (
            <>
              <div className="img-container">
                <img
                  src={'http://localhost:3001/' + emg.img}
                  alt="mee"
                  style={{
                    borderRadius: '50%',

                    height: 250,
                    width: 250,
                  }}
                />
                <div style={{ textAlign: 'center' }}>
                  <h1 style={{ color: '#10221B' }}>{emg.title}</h1>
                  <p>{emg.description}</p>
                  <p>
                    Price <b>{emg.price} birr</b>
                  </p>
                  <button
                    onClick={() => {
                      enquire(`${emg.id}&title=${emg.title}`);
                    }}
                    style={{
                      background: '#10221B',
                      color: '#fff',
                      padding: 9,
                      border: 'none',
                    }}
                  >
                    Book
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="cloud-mount">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // width: "1500px",
            // maxWidth: "100%",
            flexWrap: 'wrap',
            position: 'relative',
            // marginLeft:'2px'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="cloud-description">
              <h1>Making Adventure tours,activities affordable.</h1>
              <hr style={{ width: '100px', marginLeft: '0' }} />
              <p style={{ width: 400 }}>
                Find an advanture, crete a hobby that is related to nature in
                its vert pristiene shape for your goodness.
              </p>
            </div>

            <div className="both-pic">
              <img className="main-pic" src={mainpic} alt="mee" />
              <div className="main-picover"></div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Cloud;
