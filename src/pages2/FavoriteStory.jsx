import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FavoriteStories = () => {
  const [favoriteStories, setFavoriteStories] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await axios.get("/api/stories/favorite", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setFavoriteStories(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h1>Your Favorite Stories</h1>
      {favoriteStories.length > 0 ? (
        favoriteStories.map((story) => (
          <div key={story.id}>
            <h2>
              <Link to={`/stories/${story.id}`}>{story.title}</Link>
            </h2>
            <p>{story.content}</p>
          </div>
        ))
      ) : (
        <p>You have not favorited any stories yet.</p>
      )}
    </div>
  );
};

export default FavoriteStories;
