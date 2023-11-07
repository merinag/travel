import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submitlog(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/contact-login", { username, password })
      .then((response) => {
        if (response.status == 200) {
          localStorage.setItem("token", response.data.token);
          toast("logged in successfuly!", {
            autoClose: 1000,
            onClose: () => {
              navigate("/book");
            },
          });
        }
      })

      .catch((error) => {
        toast(error.response.data.error, {
          autoClose: false,
          type: "error",
        });

        // response.status(500).json({ error: "An error occurred" });
      });
  }
  return (
    <div className="loginpage"
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
        {}
        <form
          style={{
            borderWidth: "400px",
            display: "flex",
            flexDirection: "column",
          }}
        >
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
          <button onClick={submitlog} style={{ color: "black" }}>
            LOGIN
          </button>
        </form>
      </div>
      <div style={{ display: "flex" }}>
        if not registered click{" "}
        <span>
          {" "}
          <Link to="/register"> here</Link>
        </span>
      </div>{" "}
    </div>
  );
};

export default LoginPage;
