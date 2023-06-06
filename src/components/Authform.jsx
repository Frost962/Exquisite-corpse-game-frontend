import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const AuthForm = ({ mode }) => {
  const { authenticateUser } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  console.log("mode=", mode);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userToLogin = { userName, email, password };
      if (mode === "Signup") {
        const response = await axios.post(
          "http://localhost:5005/auth/signup",
          userToLogin
        );
        navigate("/");
      } else {
        const response = await axios.post(
          "http://localhost:5005/auth/login",
          userToLogin
        );
        navigate("/home");
        localStorage.setItem("authToken", response.data.authToken);
        setError("");
        await authenticateUser();
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {mode === "Signup" && (
          <div>
            <label htmlFor="userName">Username: </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        )}
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p style={{ color: "red" }}>{error}</p>

        <button>{mode}</button>
      </form>
    </div>
  );
};

export default AuthForm;
