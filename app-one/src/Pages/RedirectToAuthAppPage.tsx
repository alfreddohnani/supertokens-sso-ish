import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

/**
 *
 * ! This is the intermediate page that redirects to our Auth App
 */

const RedirectToAuthAppPage = () => {
  const [searchParams] = useSearchParams();

  // !We prepare the external Auth App URL
  // !!Take note of the redirectToPath search param which will be used on the Auth App to redirect back to this app(app-one)
  const authAppUrl = `http://localhost:3001/?redirectToPath=${searchParams.get(
    "redirectToUrl"
  )}`;

  useEffect(() => {
    // We redirect here
    window.location.href = authAppUrl;
  }, [authAppUrl]);

  return (
    <div>
      <span>
        You are being redirected to <a href={authAppUrl}>{authAppUrl}</a>. Click
        the link if you are not redirected.
      </span>
    </div>
  );
};

export default RedirectToAuthAppPage;
