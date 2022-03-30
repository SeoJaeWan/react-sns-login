"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
    console.log("logout ok\naccess token -> " + Kakao.Auth.getAccessToken());
  };
  var fail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    console.log("Not logged in.");
  };

  if (!Kakao.Auth.getAccessToken()) {
    fail();
    return;
  }

  Kakao.Auth.logout(success());
};

exports["default"] = _default;