import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/AllStories.css";
import { Link } from "react-router-dom";

function AllStories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getStories = async () => {
      try {
        const response = await axios.get("http://localhost:5005/stories");
        setStories(response.data);
      } catch (error) {
        console.error("Error fetching all stories:", error);
      }
    };

    getStories();
  }, []);

  return (
    <>
      <h1>All Stories</h1>;
      <div className="allStoryPage">
        {stories.map((story) => (
          <Link to={`/stories/${story.id}`} key={story.id}>
            <div className="storyCard" key={story._id}>
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
