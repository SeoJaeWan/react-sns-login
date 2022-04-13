import React, { useEffect } from "react";

const FacebookLogin = ({
  render,
  appId,
  scope = "public_profile,email",
  version = `v13.0`,
  success = (authObj) => {
    console.log(authObj);
  },
  fail = (err) => {
    console.log(err);
  },
}) => {
  const fnFbCustomLogin = () => {
    FB.login(
      function (response) {
        if (response.status === "connected") {
          FB.api("/me", "get", { fields: "name,email" }, function (r) {
            success(r);
          });
        } else {
          fail(response.status);
        }
      },
      { scope }
    );
  };

  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: appId,
        cookie: true,
        xfbml: true,
        version,
      });

      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <div onClick={() => fnFbCustomLogin()}>
      {render ? render() : <div>facebook</div>}
    </div>
  );
};

export const FacebookLogout = () => {
  FB.logout((response) => {
    console.log(response);
  });
};

export default FacebookLogin;
