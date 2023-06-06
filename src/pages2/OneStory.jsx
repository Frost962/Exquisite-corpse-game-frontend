import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const OneStory = () => {
  const [story, setStory] = useState();
  const { id } = useParams();

  const getStory = async () => {
    try {
      const res = await axios.get(`/api/stories/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      setStory(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStory();
  }, []);

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div>
        <h2>{story.title}</h2>
        <p>{story.content}</p>
      </div>
    </Layout>
  );
};

export default OneStory;
