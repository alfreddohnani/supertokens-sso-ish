import React from "react";
import { Link } from "react-router-dom";

//! This is a protected page

const VideoChatPage = () => {
  return (
    <div>
      <div>VideoChatPage</div>
      <Link to="/chats">Chats</Link>
      <Link to="/">Home</Link>
    </div>
  );
};

export default VideoChatPage;
