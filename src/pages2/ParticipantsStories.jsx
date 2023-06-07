import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import Navbar from "../components/NavBar";

const ParticipantsStories = () => {
  const { user } = useContext(AuthContext);
  const [stories, setStories] = useState([]); // to store the stories

  // fetch all stories on component mount
  useEffect(() => {
    const fetchStories = async () => {
      try {
        if (user) {
          const res = await axios.get(`/user/${user._id}`);
          setStories(res.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchStories();
  }, [user]);

  const userStories = stories.filter(
    (story) =>
      story.creator._id === user._id ||
      story.contributors.some((contributors) => contributors._id === user._id)
  );

  return (
    <>
      <Navbar />
      <div>
        <h2>Your Stories</h2>
        {userStories.map((story) => (
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
