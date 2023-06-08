import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const OneStory = () => {
  const [story, setStory] = useState();
  const [chapters, setChapters] = useState([]); // to hold chapters
  const [newChapter, setNewChapter] = useState(""); // to hold new chapter content
  const { id } = useParams();

  const getStory = async () => {
    try {
      const res = await axios.get(
        `https://exquisite-corpse.onrender.com/stories/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      setStory(res.data);
    } catch (error) {
      console.error(error);
    }
    const chaptersRes = await axios.get(
      `https://exquisite-corpse.onrender.com/chapters/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );
    setChapters(chaptersRes.data);
  };
  const addChapter = async () => {
    // Make a POST request to create a new chapter
    const res = await axios.post(
      `https://exquisite-corpse.onrender.com/chapters/${id}/`,
      { content: newChapter },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );
    // Update chapters in state
    setChapters([...chapters, res.data]);
    setNewChapter("");
  };

  useEffect(() => {
    getStory();
  }, []);

  if (!stories.length) return <div>Loading</div>;
  return (
    <div>
      <h2>{story.title}</h2>
      <p>{story.content}</p>
      {chapters.map((chapter) => (
        <div key={chapter._id}>
          <p>{chapter.content}</p>
          <p>{chapter.timestamp}</p>
        </div>
      ))}
      <input
        type="text"
        value={newChapter}
        onChange={(e) => setNewChapter(e.target.value)}
      />
      <button onClick={addChapter}>Add Chapter</button>
    </div>
  );
};

export default OneStory;
