import React, { useEffect } from "react";

const KakaoLogin = ({
  success = (authObj) => {
    console.log(JSON.stringify(authObj));
  },
  fail = (err) => {
    console.log(JSON.stringify(err));
  },
  render = false,
}) => {
  return (
    <div
      className="sns-kakao-container"
      onClick={() => {
        window.Kakao.Auth.login({
          success,
          fail,
        });
      }}
    >
      {render ? (
        render()
      ) : (
        <img
          className="sns-kakao-img"
          width="220px"
          src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
        />
      )}
    </div>
  );
};

export default KakaoLogin;
