// import React, { Component } from 'react';





// const [isLoggedIn, setIsLoggedIn] = useState(false);
// const [appointments, setAppointments] = useState([]);
// const [date, setDate] = useState("");
// const [time, setTime] = useState("");
// const [username, setUsername] = useState('')
// const navigate = useNavigate();

// useEffect(() => {
//   axios
//     .get("http://localhost:3001/appointments")
//     .then((response) => setAppointments(response.data))
//     .catch((error) => console.error(error));
// }, [isLoggedIn]);

// function book() {
//   axios
//     .post("http://localhost:3001/appointments", { date, time })
//     .then(() => {
//       setDate("");
//       setTime("");
//       axios
//         .get("http://localhost:3001/appointments")
//         .then((response) => setAppointments(response.data))
//         .catch((error) => console.error(error));
//     })
//     .catch((error) => console.error(error));
// }
// function logout() {

// axios.post('http://localhost:3001/contact-logout')
// .then(()=> setIsLoggedIn(false))
// .catch((error) => console.error(error))
// navigate("/")
// }



// return (
//   <>
//     <div className="contact-form">
//       {/* {isLoggedIn ? ( */}
//       <div>
//         <h2>Welcome, {username}!</h2>
//         <button onClick={logout}>Logout</button>
//         <h3>Appointments:</h3>
//         <ul>
//           {appointments.map((appointment, index) => (
//             <li key={index}>{appointment.date} at {appointment.time}</li>
//           ))}
//         </ul>
//       <form style={{ display: "flex", flexDirection: "column", width:' 50%' }}>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => {
//             setDate(e.target.value);
//           }}
//           placeholder="Name"
//         />
//         <input
//           type="time"
//           value={time}
//           onChange={(e) => {
//             setTime(e.target.value);
//           }}
//           placeholder="Email"
//         />

//         <button onClick={book} style={{ color: "white" ,backgroundColor:'#10221b'}}>
//           BOOK
//         </button>
//       </form>
//       </div>
//       {/* ):'hello'} */}
//     </div>
  
//   </>
// );
// }


// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       maxCount: props.maxCount || 10, // Default maximum count is 10
//     };
//   }

//   incrementCount = () => {
//     if (this.state.count < this.state.maxCount) {
//       this.setState((prevState) => ({ count: prevState.count + 1 }));
//     }
//   };

//   resetCount = () => {
//     this.setState({ count: 0 });
//   };

//   setMaxCount = (event) => {
//     const maxCount = parseInt(event.target.value, 10);
//     this.setState({ maxCount });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Counter</h1>
//         <p>Count: {this.state.count}</p>
//         <p>Max Count: {this.state.maxCount}</p>
//         <button onClick={this.incrementCount} disabled={this.state.count >= this.state.maxCount}>
//           Increment
//         </button>
//         <button onClick={this.resetCount}>Reset</button>
//         <input
//           type="number"
//           value={this.state.maxCount}
//           onChange={this.setMaxCount}
//           placeholder="Set Max Count"
//         />
//       </div>
//     );
//   }
// }

// export default Counter;
