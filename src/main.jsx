import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/NavBar.jsx";
import AuthContextWrapper from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextWrapper>
      <App />
    </AuthContextWrapper>
  </React.StrictMode>
);
