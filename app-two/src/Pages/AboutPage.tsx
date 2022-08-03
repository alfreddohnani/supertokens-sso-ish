import React from "react";
import { Link } from "react-router-dom";

//! This is NOT a protected page

const AboutPage = () => {
  return (
    <div>
      <Link to="/chats">Chats</Link>
      <Link to="/">Home</Link>
      <h3>Welcome to app two!. It is a Video Chat app</h3>
    </div>
  );
};

export default AboutPage;
