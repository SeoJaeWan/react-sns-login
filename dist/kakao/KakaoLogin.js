"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var KakaoLogin = function KakaoLogin(_ref) {
  var _ref$success = _ref.success,
      success = _ref$success === void 0 ? function (authObj) {
    console.log(JSON.stringify(authObj));
  } : _ref$success,
      _ref$fail = _ref.fail,
      fail = _ref$fail === void 0 ? function (err) {
    console.log(JSON.stringify(err));
  } : _ref$fail,
      _ref$render = _ref.render,
      render = _ref$render === void 0 ? false : _ref$render;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sns-kakao-container",
    onClick: function onClick() {
      window.Kakao.Auth.login({
        success: success,
        fail: fail
      });
    }
  }, render ? render() : /*#__PURE__*/_react["default"].createElement("img", {
    className: "sns-kakao-img",
    width: "220px",
    src: "//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
  }));
};

var _default = KakaoLogin;
exports["default"] = _default;