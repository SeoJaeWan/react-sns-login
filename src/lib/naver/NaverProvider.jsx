import axios from "axios";
import React, { useEffect } from "react";

let naverLogin;

const NaverProvider = ({ children, clientId, callbackUrl }) => {
  const setting_naver = () => {
    return new Promise((resolve, reject) => {
      const js = document.createElement("script");

      js.id = "naver-sdk";
      js.src = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
      js.onload = resolve;

      document.head.append(js);
    });
  };

  const setting_jquery = () => {
    return new Promise((resolve, reject) => {
      const js = document.createElement("script");

      js.id = "jquery-sdk";
      js.src = "https://code.jquery.com/jquery-1.12.4.min.js";
      js.onload = resolve;

      document.head.append(js);
    });
  };

  useEffect(async () => {
    await setting_naver();
    await setting_jquery();

    naverLogin = new naver.LoginWithNaverId({
      clientId: clientId,
      callbackUrl: callbackUrl,
      isPopup: true,
    });
    naverLogin.init();
  }, []);

  return React.cloneElement(children);
};

export const NaverLogout = (callback) => {
  naverLogin.logout();
  callback();
};

// DON'T USE
// export const NaverUnlink = ({ clientId, clientSecret, token }) => {
//   axios
//     .get(
//       `https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=${clientId}&client_secret=${clientSecret}&access_token=${token}`
//     )
//     .then((res) => {
//       console.log(res);
//     });
// };

export default NaverProvider;
