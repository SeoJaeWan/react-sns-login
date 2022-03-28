import React, { useEffect } from "react";

const KakaoLogin = () => {
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
