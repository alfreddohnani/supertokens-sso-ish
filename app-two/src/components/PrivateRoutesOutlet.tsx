import React from "react";
import { Outlet } from "react-router";
import { ThirdPartyEmailPasswordAuth } from "supertokens-auth-react/recipe/thirdpartyemailpassword";

import { signOut } from "supertokens-auth-react/recipe/thirdpartyemailpassword";

async function onLogout() {
  await signOut();
  window.location.href = "http://localhost:3001";
}

const PrivateRoutesOutlet = () => {
  return (
    <ThirdPartyEmailPasswordAuth>
      <nav>
        <button onClick={onLogout}>Logout</button>
      </nav>
      <Outlet />
    </ThirdPartyEmailPasswordAuth>
  );
};

export default PrivateRoutesOutlet;
