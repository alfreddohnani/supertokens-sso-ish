import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

/**
 *
 * ! This is the intermediate Page that redirects to the external app URL for us
 */

const RedirectToUrlPage = () => {
  const [searchParams] = useSearchParams();

  /**
   * ! Here we get the search param we named as url in src > App.tsx > recipeList > ThirdPartyEmailPassword.init > getRedirectionURL  return statement
   */
  const redirectToUrl = searchParams.get("url") || "";

  useEffect(() => {
    //! We finally redirect to the external app URL here
    window.location.href = redirectToUrl;
  }, [redirectToUrl]);

  return (
    <div>
      <span>
        You are being redirected to <a href={redirectToUrl}>{redirectToUrl}</a>.
        Click the link if you are not redirected.
      </span>
    </div>
  );
};

export default RedirectToUrlPage;
