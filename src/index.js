import React from "react";
import ReactDOM from "react-dom";
import { GoogleProvider, KakaoProvider, NaverProvider } from "react-sns-login";
import { BrowserRouter } from "react-router-dom";
import Router from "./demo/Router";
import App from "./App";

ReactDOM.render(
  <BrowserRouter
    //
    basename={process.env.PUBLIC_URL}
  >
    <Router />
  </BrowserRouter>,
  document.getElementById("root")
);
