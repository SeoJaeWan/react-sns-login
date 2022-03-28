import React from "react";
import ReactDOM from "react-dom";
import KakaoProvider from "../lib/kakao/KaKaoProvider";
import App from "./App";

ReactDOM.render(
  <KakaoProvider token={"dcb1bcb31e2ad1e25065c7085551d6c2"}>
    <App />
  </KakaoProvider>,
  document.getElementById("root")
);
