import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages2/Homepage";
import Login from "./pages2/Login";
import Signup from "./pages2/Signup";
import "./App.css";
import AuthForm from "./components/Authform";
import AuthContextWrapper from "./context/authContext";
import AllStories from "./pages2/AllStories";
import CreateStory from "./pages2/CreateStory";
import OneStory from "./pages2/OneStory";
import FavoriteStory from "./pages2/FavoriteStory";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import ParticipantsStories from "./pages2/ParticipantsStories";

function App() {
  return (
    <>
      <AuthContextWrapper>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Homepage />}></Route>

              <Route element={<ProtectedRoute />}>
                <Route path="/allstories" element={<AllStories />} />
                <Route path="/creatstory" element={<CreateStory />} />
                <Route path="/onestory" element={<OneStory />} />
                <Route path="/favoritestory" element={<FavoriteStory />} />
                <Route
                  path="/participantsstories"
                  element={<ParticipantsStories />}
                />
              </Route>

              <Route path="/auth">
                <Route path="login" element={<authForm mode="Log in" />} />
                <Route path="signup" element={<authForm mode="Signup" />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthContextWrapper>
    </>
  );
}

export default App;
