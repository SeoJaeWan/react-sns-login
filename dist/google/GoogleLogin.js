"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var GoogleLogin = function GoogleLogin(_ref) {
  var _ref$render = _ref.render,
      render = _ref$render === void 0 ? false : _ref$render;
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "googleIdLogin"
  }, render ? render() : /*#__PURE__*/_react["default"].createElement("div", null, "Google Button"));
};

var _default = GoogleLogin;
exports["default"] = _default;