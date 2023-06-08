import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, isLoggedIn, authenticateUser } = useContext(AuthContext);
  console.log(user);
  const logout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
  };
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/userstories"}>{user && user.userName}</NavLink>
        </li>
        <li>
          <NavLink to={"/allstories"}>Stories List</NavLink>
        </li>
        <li>
          <NavLink to={"/createstory"}>Create a Story</NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"/signup"}>Sign up</NavLink>
            </li>
          </>
        )}

        <>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </>
      </ul>
    </nav>
  );
};

export default Navbar;
