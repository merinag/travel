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
        if (response.status == 200) {
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
        console.log(error);
      });
  }
  return (
    <div className="form-cont"
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
      <h1>Welcome to Tour and Travel</h1>
      <div style={{ maxWidth: "min-content" }}>
        <form style={{ display: "flex", flexDirection: "column", width: 300 }}>
          <p>Name</p>
          <input
            type="text"

            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
          />
          <p>Email</p>
          <input
            type="text"

            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <p>Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Username"
          />
          <p>Password</p>
          <input
            type="password"

            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <button onClick={submitreg} style={{
            color: "white",
            backgroundColor: "rgba(0, 128, 0, 0.563)",
            padding: '3px 6px',
            borderRadius: '8px',
            marginTop: '12px',
            border: '1px solid rgba(0, 128, 0, 0.563)'
          }}>
            REGISTER
          </button>
        </form>
      </div>
      <div style={{ display: "flex", marginTop: '8px', gap: '8px' }}>
        if registered click {" "}
        <span >
          {" "}
          <Link style={{
            color: 'white',
            textDecoration: 'none',
            backgroundColor: ' rgba(0, 128, 0, 0.563)',
            padding: '5px',
            borderRadius: '5px'

          }}
            to="/login"> here</Link>
        </span>
      </div>

    </div>
  );
};

export default RegisterPage;
