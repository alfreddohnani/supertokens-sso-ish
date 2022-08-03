import React from "react";
import { Link } from "react-router-dom";

//! This is NOT a protected page

const AboutPage = () => {
  return (
    <div>
      <h3>Welcome to app one!. It is a rich text editor app</h3>
      <Link to="/document">Document</Link>
      <Link to="/">Home</Link>
    </div>
  );
};

export default AboutPage;
