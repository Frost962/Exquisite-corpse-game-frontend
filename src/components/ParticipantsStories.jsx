import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import Navbar from "./NavBar";

const ParticipantsStories = () => {
  const { user } = useContext(AuthContext);
  const [stories, setStories] = useState([]); // to store the stories

  // fetch all stories on component mount
  useEffect(() => {
    const fetchStories = async () => {
      try {
        if (user) {
          const authToken = localStorage.getItem("authToken");
          const res = await axios.get(
            `http://localhost:5005/stories/user/${user._id}`,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );
          setStories(res.data);
          console.log("resssssssss", res.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchStories();
  }, [user]);

  return (
    <>
      <Navbar />
      <div>
        <h2>Your Stories</h2>
        {stories.map((story) => (
          <div key={story._id}>
            <h3>{story.title}</h3>
            <p>Created by: {story.creator.userName}</p>
            <p>
              Contributors:{" "}
              {story.contributors.map((c) => c.userName).join(", ")}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ParticipantsStories;
