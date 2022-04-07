import React, { useEffect } from "react";

const GoogleLogin = ({
  render,
  token,
  success = (authObj) => {
    console.log(authObj);
  },
  fail = (err) => {
    console.log(err);
  },
}) => {
  const setting_script = () => {
    return new Promise((resolve, reject) => {
      const js = document.createElement("script");

      js.id = "google-sdk";
      js.src = "https://apis.google.com/js/api:client.js";
      js.onload = resolve;

      document.head.append(js);
    });
  };

  useEffect(async () => {
    await setting_script();

    gapi.load("auth2", function () {
      const auth2 = gapi.auth2.init({
        client_id: token,
        cookiepolicy: "additional_scope",
      });
      const item = document.getElementById("googleIdLogin");
      const buttons = document.getElementsByClassName("GoogleLogin");
      for (let i = 0; i < buttons.length; i++) {
        auth2.attachClickHandler(buttons[i], {}, success, fail);
      }
    });
  }, []);

  return (
    <div id="googleIdLogin" className="GoogleLogin">
      {render ? render() : <div>Google Button</div>}
    </div>
  );
};

export const GoogleLogout = () => {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
  });
};

export default GoogleLogin;
