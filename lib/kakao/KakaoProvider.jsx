import React, { useEffect } from "react";

const KakaoProvider = ({ children, token }) => {
  const setting = () => {
    return new Promise((resolve, reject) => {
      const js = document.createElement("script");

      js.id = "kakao-sdk";
      js.src = "//developers.kakao.com/sdk/js/kakao.min.js";
      js.onload = resolve;

      document.head.append(js);
    });
  };

  useEffect(async () => {
    await setting();
    window.Kakao.init(token);
  }, []);

  return React.cloneElement(children);
};

export default KakaoProvider;
