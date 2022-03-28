import React, { useEffect } from "react";

const KakaoLogin = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log(window.Kakao, window);
    });
  }, []);

  return (
    <div
      onClick={() => {
        window.Kakao.Auth.login();
      }}
    >
      KakaoLogin
    </div>
  );
};

export default KakaoLogin;
