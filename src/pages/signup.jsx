import React from "react";

function Signup() {
  return (
    <div>
      <h2>Signup</h2>
      <form>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input type="text" name="email" placeholder="email" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
