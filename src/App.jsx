import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages2/Homepage";
import "./App.css";
import AuthContextWrapper from "./context/authContext";
import AllStories from "./pages2/AllStories";
import CreateStory from "./pages2/CreateStory";
import OneStory from "./pages2/OneStory";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import ParticipantsStories from "./pages2/ParticipantsStories";
import AuthForm from "./components/Authform";

function App() {
  return (
    <>
      <AuthContextWrapper>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Homepage />}></Route>
              <Route>
                <Route path="/login" element={<AuthForm mode="Log in" />} />
                <Route path="/signup" element={<AuthForm mode="Signup" />} />
              </Route>

              <Route element={<ProtectedRoute />}>
                <Route path="/allstories" element={<AllStories />} />
                <Route path="/createstory" element={<CreateStory />} />
                <Route path="/stories/:id" element={<OneStory />} />
                <Route path="/userstories" element={<ParticipantsStories />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthContextWrapper>
    </>
  );
}

export default App;
