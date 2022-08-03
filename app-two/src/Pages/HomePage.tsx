import React from "react";
import { Link } from "react-router-dom";

//This page is protected

const HomePage = () => {
  return (
    <div>
      <h3>Welcome the homepage which shows a list of all your video chats</h3>
      <Link to="/chats">Chats</Link>
      <Link to="/">Home</Link>
    </div>
  );
};

export default HomePage;
