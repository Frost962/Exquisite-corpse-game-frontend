import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Header = () => {
  const { isLoggedIn, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authenticateUser();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1em",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div>
        <Link to="/home" style={{ marginRight: "1em" }}>
          Home
        </Link>
        <Link to="/all-stories">All Stories</Link>
      </div>

      <div>
        {isLoggedIn ? (
          <>
            <Link to="/create-story" style={{ marginRight: "1em" }}>
              Create Story
            </Link>
            <Link to="/favorite-stories" style={{ marginRight: "1em" }}>
              Favorite Stories
            </Link>
            <Link to="/participants-stories" style={{ marginRight: "1em" }}>
              Participants Stories
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: "1em" }}>
              Login
            </Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
