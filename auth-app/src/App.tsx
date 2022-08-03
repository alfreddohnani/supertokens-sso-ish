import "./App.css";
import { Routes, Route } from "react-router-dom";
import SuperTokens, {
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import ThirdPartyEmailPassword, {
  //   Github,
  Google,
  //   Facebook,
  //   Apple,
} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { lazy } from "react";
import * as reactRouterDom from "react-router-dom";
import AuthOutletPage from "./Pages/AuthOutletPage";

SuperTokens.init({
  appInfo: {
    appName: "auth-app",
    apiDomain: "http://localhost:3000",
    websiteDomain: "http://localhost:3001",
    apiBasePath: "/",
    websiteBasePath: "/",
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [
          //   Github.init(),
          Google.init(),
          //   Facebook.init(),
          //   Apple.init(),
        ],
      },
      getRedirectionURL: async function (context) {
        /**
         * !! Here we get the url of the page we tried to visit in either app-one, app-two etc
         * yet since we were not authenticated, we will be redirected to the auth app (here)
         * where we will redirect back to when login succeeds
         */

        //! Where did this happen? See src/components/RedirectToKpilensAuthPage.tsx in any of the app-one, app-two etc
        const redirectToPath = new URLSearchParams(window.location.search).get(
          "redirectToPath"
        );

        //! Handling when login succeeds
        if (context.action === "SUCCESS") {
          /**
           * !! Why do we perform this check here?
           * I will first tell you what happens when you don't perform this check:
           * Even when login is successful, we will still remain on the login page
           *
           *
           * Hence we perform this check so that when a user visits the auth app directly(http://localhost:3001),
           * the default action will be to navigate them to their profile page. You can navigate them to
           * whichever page suits your application, really.
           */
          if (!redirectToPath)
            return `/redirectToUrl/?url=http://localhost:3001/profile`;

          /**
           * ! We also check if this is a new sign up here so that we can attach a `isNewUser=true`
           *  search param on the URL in order to inform the app which is being authenticated that
           * this is indeed a new user. This is useful in for instance taking the user through an onboarding
           * process or if there is any special kind of setup your perform for first time users
           * It defaults to an empty string when the user is NOT just signing up for the first time
           */
          const isNewUser = context.isNewUser;

          /**
           * !! Since SuperTokens does NOT automatically redirect to the external app URL being authenticated
           * i.e app-one,app-two etc, we try to go around it by creating an intermediate page which will do the redirecting for us.
           * Hence I created a component in src/Pages called RedirectToUrlPage and added a route with path=redirectToUrl
           * !! We indicated the external app URL with ?url search param which we will get in the RedirectToUrlPage component
           */
          return `/redirectToUrl/?url=${redirectToPath}${
            isNewUser ? "?isNewUser=true" : ""
          }`;
        }
      },
    }),
    Session.init(),
  ],
});

//lazy import the intermediate RedirectToUrlPage here
const RedirectToUrlPage = lazy(() => import("./Pages/RedirectToUrlPage"));

const ErrorsPage = lazy(() => import("./Pages/ErrorsPage"));
const ProfilePage = lazy(() => import("./Pages/ProfilePage"));

function App() {
  return (
    <Routes>
      {/* !Remember this route */}
      <Route path="redirectToUrl" element={<RedirectToUrlPage />} />

      <Route element={<AuthOutletPage />}>
        {/*This renders the login UI on the /auth route*/}
        {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
        {/*Your app routes*/}
        <Route path="profile" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<ErrorsPage />} />
    </Routes>
  );
}

export default App;
