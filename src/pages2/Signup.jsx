import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5005/auth/signup", {
        userName: userName,
        password: password,
        email: email,
      })
      .then((response) => {
        // handle success
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });

    // TODO: send a request to the server for user registration
    console.log(userName, password, email);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
          placeholder="userName"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
