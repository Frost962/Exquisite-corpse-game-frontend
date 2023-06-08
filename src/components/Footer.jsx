import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderTop: "1px solid #dee2e6",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div>© 2023 "Coop Writing"</div>
        <div>
          <Link to="/NotFound">Privacy Policy</Link>
        </div>
        <div>
          <Link to="/NotFound">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
