import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import { Link } from "react-router-dom";

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
            `https://exquisite-corpse.onrender.com/stories/user/${user._id}`,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );
          setStories(res.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchStories();
  }, [user]);

  if (!stories.length) return <div>Loading</div>;

  return (
    <>
      <div>
        <h2>Your Stories</h2>
        {stories.map((story) => (
          <Link to={`/stories/${story._id}`} key={story._id}>
            <div>
              <h3>{story.title}</h3>
              <p>
                created by: {story.creator ? story.creator.userName : "Unknown"}
              </p>
              <p>
                Contributors:
                {story.contributors.map((c) => c.userName).join(", ")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ParticipantsStories;
