"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NaverLogout = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var naverLogin;

var NaverProvider = function NaverProvider(_ref) {
  var children = _ref.children,
      clientId = _ref.clientId,
      callbackUrl = _ref.callbackUrl;

  var setting_naver = function setting_naver() {
    return new Promise(function (resolve, reject) {
      var js = document.createElement("script");
      js.id = "naver-sdk";
      js.src = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
      js.onload = resolve;
      document.head.append(js);
    });
  };

  var setting_jquery = function setting_jquery() {
    return new Promise(function (resolve, reject) {
      var js = document.createElement("script");
      js.id = "jquery-sdk";
      js.src = "http://code.jquery.com/jquery-1.11.3.min.js";
      js.onload = resolve;
      document.head.append(js);
    });
  };

  (0, _react.useEffect)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return setting_naver();

          case 2:
            _context.next = 4;
            return setting_jquery();

          case 4:
            naverLogin = new naver.LoginWithNaverId({
              clientId: clientId,
              callbackUrl: callbackUrl,
              isPopup: true
            });
            naverLogin.init();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return /*#__PURE__*/_react["default"].cloneElement(children);
};

var NaverLogout = function NaverLogout(callback) {
  naverLogin.logout();
  callback();
}; // DON'T USE
// export const NaverUnlink = ({ clientId, clientSecret, token }) => {
//   axios
//     .get(
//       `https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=${clientId}&client_secret=${clientSecret}&access_token=${token}`
//     )
//     .then((res) => {
//       console.log(res);
//     });
// };


exports.NaverLogout = NaverLogout;
var _default = NaverProvider;
exports["default"] = _default;