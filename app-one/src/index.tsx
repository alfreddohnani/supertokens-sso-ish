import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { SuperTokensWrapper } from "supertokens-auth-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SuperTokensWrapper>
      <BrowserRouter>
        <Suspense fallback={<div>loading app one...please wait</div>}>
          <App />
        </Suspense>
      </BrowserRouter>
    </SuperTokensWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
