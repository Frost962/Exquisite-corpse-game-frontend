import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <h1>All Stories</h1>;
      {stories.map((story) => (
        <div key={story._id}>
          <h2>{story.title}</h2>
          <p>created by: {story.creator.userName}</p>
          <p>{story.body}</p>
        </div>
      ))}
    </div>
  );
}

export default AllStories;
