import React from "react";
import { Link } from "react-router-dom";

const ErrorsPage = () => {
  return (
    <div>
      Oopsie!! Sorry, it is okay that you may be lost, but you can{" "}
      <Link to="/login">go home</Link> now
    </div>
  );
};

export default ErrorsPage;
