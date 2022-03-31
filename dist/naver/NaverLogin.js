"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var NaverLogin = function NaverLogin(_ref) {
  var _ref$render = _ref.render,
      render = _ref$render === void 0 ? false : _ref$render;
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "naverIdLogin"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    id: "naverIdLogin_loginButton",
    className: "sns-naver-container"
  }, render ? render() : /*#__PURE__*/_react["default"].createElement("img", {
    className: "sns-naver-img",
    width: "220px",
    src: "https://static.nid.naver.com/oauth/big_g.PNG"
  })));
};

var _default = NaverLogin;
exports["default"] = _default;