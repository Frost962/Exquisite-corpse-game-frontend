import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: send a request to the server for authentication
    console.log(userName, password);
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          userName:
          <input
            type="text"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
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
