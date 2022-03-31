import React, { useEffect } from "react";

const NaverLogin = ({ render = false }) => {
  return (
    <div id="naverIdLogin">
      <a id="naverIdLogin_loginButton" className="sns-naver-container">
        {render ? (
          render()
        ) : (
          <img
            className="sns-naver-img"
            width="220px"
            src="https://static.nid.naver.com/oauth/big_g.PNG"
          />
        )}
      </a>
    </div>
  );
};

export default NaverLogin;
