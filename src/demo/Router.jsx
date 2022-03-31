import React from "react";

import { Route, Routes, Link } from "react-router-dom";
import HomeDemo from "./Common/HomeDemo";
import GoogleDemo from "./Google/GoogleDemo";
import KakaoDemo from "./Kakao/KakaoDemo";
import NaverDemo from "./Naver/NaverDemo";

export default () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomeDemo />} />
      <Route exact path="/Google" element={<GoogleDemo />} />
      <Route exact path="/Kakao" element={<KakaoDemo />} />
      <Route exact path="/Naver" element={<NaverDemo />} />
    </Routes>
  );
};
