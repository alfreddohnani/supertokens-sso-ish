import React from "react";
import { Outlet } from "react-router";

const AuthOutletPage = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        Welcome to SuperTokens SSOish app
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthOutletPage;
