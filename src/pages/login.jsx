import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5005/auth/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        navigate("/home");
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });

    // TODO: send a request to the server for authentication
    console.log(username, password);
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
        <button onClick={() => navigate("/signup")}>Go to Signup</button>
      </form>
    </div>
  );
};

export default Login;
