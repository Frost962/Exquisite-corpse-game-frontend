import React, { useState } from "react";
import axios from "axios";

const CreateStory = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fd = new FormData();
    fd.append("title", title);
    fd.append("content", content);

    try {
      const response = await axios.post("/api/stories", fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
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
      <textarea
        name="content"
        placeholder="Story Content"
        required
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create Story</button>
    </form>
  );
};

export default CreateStory;
