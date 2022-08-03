import React from "react";
import { Link } from "react-router-dom";

//! This is a protected page

const DocumentPage = () => {
  return (
    <div>
      <h3>DocumentPage</h3>
      <Link to="/document">Document</Link>
      <Link to="/">Home</Link>
    </div>
  );
};

export default DocumentPage;
