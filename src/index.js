import React from "react";
import ReactDOM from "react-dom";
import { GoogleProvider, KakaoProvider, NaverProvider } from "react-sns-login";
import { BrowserRouter } from "react-router-dom";
import Router from "./demo/Router";
import App from "./App";

ReactDOM.render(
  <GoogleProvider token={process.env.GOOGLE_KEY}>
    <NaverProvider
      clientId={process.env.NAVER_KEY}
      callbackUrl={"http://localhost:8080/"}
    >
      <KakaoProvider token={process.env.KAKAO_KEY}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </KakaoProvider>
    </NaverProvider>
  </GoogleProvider>,
  document.getElementById("root")
);