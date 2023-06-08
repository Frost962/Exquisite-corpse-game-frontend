import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/AllStories.css";
import { Link } from "react-router-dom";

function AllStories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getStories = async () => {
      try {
        const response = await axios.get(
          "https://exquisite-corpse.onrender.com/stories"
        );
        setStories(response.data);
      } catch (error) {
        console.error("Error fetching all stories:", error);
      }
    };

    getStories();
  }, []);

  if (!stories.length) return <div>Loading</div>;
  return (
    <>
      <h1>All Stories</h1>;
      <div className="allStoryPage">
        {stories.map((story) => (
          <Link to={`/stories/${story._id}`} key={story._id}>
            <div className="storyCard">
              <h2>{story.title}</h2>
              <p>created by: {story.creator.userName}</p>
              <p>{story.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default AllStories;
