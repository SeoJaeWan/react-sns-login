import React from "react";
import ReactDOM from "react-dom";
import { KakaoProvider, NaverProvider } from "./lib";
import App from "./App";

ReactDOM.render(
  <NaverProvider
    clientId={process.env.NAVER_KEY}
    callbackUrl={"http://localhost:8080/"}
  >
    <KakaoProvider token={process.env.KAKAO_KEY}>
      <App />
    </KakaoProvider>
  </NaverProvider>,
  document.getElementById("root")
);
