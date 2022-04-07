import React, { useEffect } from "react";

const KakaoLogin = ({
  token,
  success = (authObj) => {
    console.log(JSON.stringify(authObj));
  },
  fail = (err) => {
    console.log(JSON.stringify(err));
  },
  render = false,
}) => {
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
    window.Kakao.init(token.toString());
  }, []);

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
