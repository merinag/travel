import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function submitreg(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3001/contact-regi", {
        username,
        name,
        password,
        email,
      })
      .then((response) => {
        if ( response.status == 200) {
          toast("register in successfuly!", {
            autoClose: 1000,
            onClose: () => {
              navigate("/login");
            },
          });
        }
      })

      .catch((error) => {
        alert(error);
        // response.status(500).json({ error: "An error occurred" });
        console.log(error);
      });
  }
  return (
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
      <ToastContainer />
      <div className="contact-form" style={{ maxWidth: "min-content" }}>
        <form style={{ display: "flex", flexDirection: "column", width: 550 }}>
          <input
            type="text"
            
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
          />
          <input
            type="text"
            
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Username"
          />
          <input
            type="password"
            
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <button onClick={submitreg} style={{ color: "black" }}>
            REGISTER
          </button>
        </form>
      </div>
      <div style={{display:"flex"}}>
        if registered click {" "}
        <span>
          {" "}
          <Link to="/login"> here</Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterPage;
