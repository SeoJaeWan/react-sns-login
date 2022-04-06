"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (res) {
    console.log("success: " + JSON.stringify(res));
  };
  var fail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (err) {
    console.log("fail: " + JSON.stringify(err));
  };
  Kakao.API.request({
    url: "/v1/user/unlink",
    success: success,
    fail: fail
  });
};

exports["default"] = _default;