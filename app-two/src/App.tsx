import "./App.css";
import { Routes, Route } from "react-router";
import SuperTokens from "supertokens-auth-react";
import Session from "supertokens-auth-react/recipe/session";
import ThirdPartyEmailPassword, {
  Google,
} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import { lazy } from "react";
import PrivateRoutesOutlet from "./components/PrivateRoutesOutlet";

SuperTokens.init({
  appInfo: {
    appName: "app-two",
    apiDomain: "http://localhost:3000",
    websiteDomain: "http://localhost:4002",
    apiBasePath: "/",
    websiteBasePath: "/",
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [Google.init()],
      },

      /**
       *
       * ! We don't handle authentication here in this app (app-two)
       * We want to redirect to our auth SSO app which lives on an external URL to do this for us
       * Since SuperTokens does NOT automatically redirect to external URLs, a work around is
       * to create an intermediate page that will do the redirecting for us.
       * We route to this page with a search param called redirectToUrl, with a value of the current page
       * we we trying to visit but needed us to login/signup (page is protected)
       * create a page in src/pages called RedirectToAuthAppPage.tsx
       */
      getRedirectionURL: async function (context) {
        if (context.action === "SIGN_IN_AND_UP") {
          return `/redirectToAuthApp?redirectToUrl=${window.location.href}`;
        }
      },
    }),
    Session.init(),
  ],
});

const RedirectToAuthAppPage = lazy(
  () => import("./Pages/RedirectToAuthAppPage")
);

const ErrorsPage = lazy(() => import("./Pages/ErrorsPage"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const VideoChatPage = lazy(() => import("./Pages/VideoChatPage"));
const HomePage = lazy(() => import("./Pages/HomePage"));

function App() {
  return (
    <Routes>
      <Route path="redirectToAuthApp" element={<RedirectToAuthAppPage />} />

      <Route path="/" element={<PrivateRoutesOutlet />}>
        <Route index element={<HomePage />} />
        <Route path="chats" element={<VideoChatPage />} />
      </Route>

      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorsPage />} />
    </Routes>
  );
}

export default App;
