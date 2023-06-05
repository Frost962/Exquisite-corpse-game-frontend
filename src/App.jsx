import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages2/Homepage";
import Login from "./pages2/Login";
import Signup from "./pages2/Signup";
import "./App.css";
import AuthForm from "./components/Authform";
import AuthContextWrapper from "./context/authContext";

function App() {
  return (
    <AuthContextWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </Router>
    </AuthContextWrapper>
  );
}

export default App;
