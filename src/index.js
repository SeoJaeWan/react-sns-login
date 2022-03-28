import React from "react";
import ReactDOM from "react-dom";
import KakaoProvider from "../lib/kakao/KaKaoProvider";
import App from "./App";

ReactDOM.render(
  <KakaoProvider token={process.env.KAKAO_KEY}>
    <App />
  </KakaoProvider>,
  document.getElementById("root")
);
