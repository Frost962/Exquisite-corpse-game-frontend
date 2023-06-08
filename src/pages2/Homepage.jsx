import React from "react";
import Navbar from "../components/NavBar";

function Homepage() {
  return (
    <div className="homepage-container">
      <h1>Welcome to Coop Writing!</h1>
      <div className="homepage-content">
        <p>
          Coop Writing is a place for you to write community-shared stories.
          Create a Story, add its first chapter(s) and let other people from
          across the world take over!
        </p>
        <p>
          Here stories are eternal but certainly not unchangeable. You can add a
          chapter to anyone's story!
        </p>
      </div>
    </div>
  );
}

export default Homepage;
