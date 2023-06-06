import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages2/Homepage";
import Login from "./pages2/Login";
import Signup from "./pages2/Signup";
import "./App.css";
import AuthForm from "./components/Authform";
import AuthContextWrapper from "./context/authContext";
import AllStories from "./components/AllStories";

function App() {
  return (
    <AuthContextWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<AuthForm mode="Log in" />} />
          <Route path="/signup" element={<AuthForm mode="Signup" />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/allstories" element={<AllStories />} />
          <Route path="/create-story" element={<CreateStory />} />
        </Routes>
      </Router>
    </AuthContextWrapper>
  );
}

export default App;
