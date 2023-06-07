import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderTop: "1px solid #dee2e6",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div>© 2023 "We still didn't decide the name :) " App</div>
        <div>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
