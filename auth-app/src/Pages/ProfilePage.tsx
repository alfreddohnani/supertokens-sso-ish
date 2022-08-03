import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <div>This is your profile page</div>
      <h1>You have access to the following apps</h1>
      <ul>
        <li>
          {" "}
          <a target="_blank" href="http://localhost:4001" rel="noreferrer">
            App One - Docs app
          </a>{" "}
        </li>
        <li>
          <a target="_blank" href="http://localhost:4002" rel="noreferrer">
            App Two - Video Chat app
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfilePage;
