import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreateStory = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const storyData = { title };

    try {
      const response = await axios.post(
        "https://exquisite-corpse.onrender.com/stories",
        storyData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      navigate("/userstories");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Story Title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* <textarea
        name="content"
        placeholder="Story Content"
        required
        value={content}
        onChange={(e) => setContent(e.target.value)}
      /> */}

      <button type="submit">Create Story</button>
    </form>
  );
};

export default CreateStory;
