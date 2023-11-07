import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Avatar() {
  const [userName, setUserName] = useState("");

  const runner = async () => {
    try {
      const response = await axios.get("http://localhost:3001/user", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response)

      if (response.status == 200) {
        setUserName(response.data.trim()[0]);
      }
    } catch (e) {
      setUserName('')
    }
  };

  const logout =()=>{
    localStorage.removeItem('token')
    runner()
  }

  useEffect(() => {
    runner();
  }, []);
  return (
    <>
      {userName ? (
        <div className="avatar-container">
          <div className="avatar">{userName}</div>
          <button className="logout" onClick={logout}>Log out</button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </>
  );
}

export default Avatar;
