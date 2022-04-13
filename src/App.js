import React, { useEffect } from "react";
import styled from "styled-components";
import {
  GoogleLogin,
  GoogleLogout,
  KakaoLogin,
  KakaoLogout,
  KakaoUnlink,
  NaverLogin,
  NaverLogout,
} from "react-sns-login";
import { FacebookLogin, FacebookLogout } from "./lib";

const App = ({}) => {
  return (
    <div>
      {/* <KakaoLogin />

      <div onClick={() => KakaoLogout()}>logout</div>

      <div onClick={() => KakaoUnlink()}>회원 탈퇴</div>

      <NaverLogin />

      <div
        onClick={() =>
          NaverLogout(() => {
            console.log("out");
          })
        }
      >
        logout
      </div>

      <GoogleLogin render={() => <div>asdasdasd</div>} />

      <div onClick={() => GoogleLogout()}>Google Logout</div> */}

      {/* <FacebookLogin appId={"1092381454646861"} /> */}

      <button onClick={FacebookLogout}>logout</button>
    </div>
  );
};

export default App;
