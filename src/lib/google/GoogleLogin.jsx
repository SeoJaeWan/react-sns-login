import React from "react";

const GoogleLogin = ({ render = false }) => {
  return (
    <div id="googleIdLogin">{render ? render() : <div>Google Button</div>}</div>
  );
};

export default GoogleLogin;
