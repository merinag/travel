// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Row from 'react-bootstrap/esm/Row';
// import Col from 'react-bootstrap/esm/Col';
// import axios from 'axios';
// import { useState } from 'react';

// function Bookings() {
//   const [imageMain, setImageMain] = useState([]);

//   const params = useParams();

//   const { title } = params;

//   const runner = async () => {
//     try {
//       const result = await axios.get(
//         `http://localhost:3001/bookings/title/${title}`
//       );
//       const listed_result = await result.data;
//       console.log(listed_result);
//       setImageMain(listed_result);
//       console.log('LLLLLLLLLLLLLLLLLLLL');
//     } catch (e) {}
//   };
//   useEffect(() => {
//     runner();
//   }, [title]);
//   return;
// }

// export default Bookings;
