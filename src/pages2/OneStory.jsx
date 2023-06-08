import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const OneStory = () => {
  const [story, setStory] = useState();
  const [chapters, setChapters] = useState([]); // to hold chapters
  const [newChapter, setNewChapter] = useState(""); // to hold new chapter content
  const { id } = useParams();
  const [editingChapter, setEditingChapter] = useState(null);
  const [updatedContent, setUpdatedContent] = useState("");

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

  const deleteLastChapter = async () => {
    const lastChapter = chapters[chapters.length - 1];
    if (!lastChapter) return; // guard clause in case there are no chapters
    try {
      await axios.delete(
        `https://exquisite-corpse.onrender.com/chapters/${lastChapter._id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log("lastchapterid", lastChapter._id);
      // Filter out the deleted chapter from state
      setChapters(
        chapters.filter((chapter) => chapter._id !== lastChapter._id)
      );
    } catch (error) {
      console.error("Error deleting chapter:", error);
    }
  };

  const updateChapter = async (chapterId, updatedContent) => {
    try {
      const response = await axios.patch(
        `https://exquisite-corpse.onrender.com/chapters/${chapterId}`,
        { content: updatedContent },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      // Update the chapter in state
      setChapters(
        chapters.map((chapter) =>
          chapter._id === chapterId
            ? { ...chapter, content: response.data.content }
            : chapter
        )
      );
    } catch (error) {
      console.error("Error updating chapter:", error);
    }
  };

  useEffect(() => {
    getStory();
  }, []);

  if (!story) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>{story.title}</h2>
      <p>{story.content}</p>
      {chapters.map((chapter) => (
        <div key={chapter._id}>
          {chapter._id === editingChapter ? (
            <>
              <input
                type="text"
                value={updatedContent}
                onChange={(e) => setUpdatedContent(e.target.value)}
              />
              <button
                onClick={() => {
                  updateChapter(chapter._id, updatedContent);
                  setEditingChapter(null);
                  setUpdatedContent("");
                }}
              >
                Update Chapter
              </button>
              <button onClick={() => setEditingChapter(null)}>Cancel</button>
            </>
          ) : (
            <>
              <p>{chapter.content}</p>
              <p>{chapter.timestamp}</p>
              <button
                onClick={() => {
                  setEditingChapter(chapter._id);
                  setUpdatedContent(chapter.content);
                }}
              >
                Edit Chapter
              </button>
            </>
          )}
        </div>
      ))}
      <input
        type="text"
        value={newChapter}
        onChange={(e) => setNewChapter(e.target.value)}
      />
      <button onClick={addChapter}>Add Chapter</button>
      <button onClick={deleteLastChapter}>Delete Last Chapter</button>
    </div>
  );
};

export default OneStory;
