import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
function Contactlogin() {
  const [isRegistering, setIsRegistering] = useState(true);
  const navigate = useNavigate();
  const [firstName, setFirstNmae] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  

  function submitreg(e) {
  
    axios
      .post("http://localhost:3001/contact-regi", {
        firstName,
        lastName,
        message,
        
      })
      .then((response) => {
        // setIsRegistering(!isRegistering);  
        console.log(response.data)
        })

      .catch((error) => {
        // response.status(500).json({ error: "An error occurred" });
        console.log(error)
      });
      // setIsRegistering(!isRegistering);
    }

  
  const toggleForm = () => {
    // Toggle between REGISTER and LOGIN forms
    setIsRegistering((e)=>!e);
  };

  const renderForm = () => {
    if (isRegistering) {
      return (
        <div>
          <form
            style={{ display: "flex", flexDirection: "column", width: 550 }}
          >
            <input
              type="text"
              name="firstNmae"
              value={firstName}
              onChange={(e) => {
                setFirstNmae(e.target.value);
              }}
              placeholder="FirstName"
            />
            <input
              type="text"
             name="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="LastName"
            />
           
            <input
              type="textarea"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Message"
            />
            <button onClick={submitreg} style={{ color: "black" }}>
              GET
            </button>
          </form>
        </div>
      );
    } else {
      navigate("/login")
      // return (
      //   <div>
      //     <form
      //       style={{
      //         borderWidth: "400px",
      //         display: "flex",
      //         flexDirection: "column",
      //       }}
      //     >
      //       <input
      //         type="text"
      //         value={username}
      //         onChange={(e) => {
      //           setUsername(e.target.value);
      //         }}
      //         placeholder="Username"
      //       />
      //       <input
      //         type="text"
      //         value={password}
      //         onChange={(e) => {
      //           setPassword(e.target.value);
      //         }}
      //         placeholder="Password"
      //       />
      //       <button onClick={submitlog} style={{ color: "black" }}>
      //         LOGIN
      //       </button>
      //     </form>
      //   </div>
    //   );
    }
  };

  //   return (
  //     <div>
  //       <button
  //         onClick={toggleForm}
  //         style={{ backgroundColor: "rgb(4, 42, 4)", color: "white" }}
  //       >
  //         {isRegistering ? "SWITCH TO LOGIN" : "SWITCH TO REGISTER"}
  //       </button>
  //       {renderForm()}
  //     </div>
  //   );

  // alert();
  // fetch("localhost:3001/contact", {
  //   method:"POST" ,
  //   headers:{
  //     'Content-Type':'application/json',
  //   },
  //   body:JSON.stringify({
  //     "name":"merina",
  //     "username":"merr1"
  //   })
  // })

  return (
    <div>
      <h1
        style={{
          fontFamily: "sans-serif",
          fontSize: 40,
          color: "#10221B",
          textAlign: "center",
        }}
      >
        Get in touch
      </h1>
      {renderForm()}
      <button
        onClick={toggleForm}
        style={{
          backgroundColor: "rgb(4, 42, 4)",
          color: "white",
          width: "550px",
        }}
      >
        <h2>Already have Account?</h2>
        {isRegistering ? " LOGIN" : " REGISTER"}
      </button>
    </div>
  );
}

export default Contactlogin;
