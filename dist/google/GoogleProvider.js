"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GoogleLogout = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var GoogleProvider = function GoogleProvider(_ref) {
  var children = _ref.children,
      token = _ref.token,
      _ref$success = _ref.success,
      success = _ref$success === void 0 ? function (authObj) {
    console.log(authObj);
  } : _ref$success,
      _ref$fail = _ref.fail,
      fail = _ref$fail === void 0 ? function (err) {
    console.log(err);
  } : _ref$fail;

  var setting_script = function setting_script() {
    return new Promise(function (resolve, reject) {
      var js = document.createElement("script");
      js.id = "google-sdk";
      js.src = "https://apis.google.com/js/api:client.js";
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
            return setting_script();

          case 2:
            gapi.load("auth2", function () {
              var auth2 = gapi.auth2.init({
                client_id: token,
                cookiepolicy: "additional_scope"
              });
              var item = document.getElementById("googleIdLogin");
              auth2.attachClickHandler(item, {}, success, fail);
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return /*#__PURE__*/_react["default"].cloneElement(children);
};

var GoogleLogout = function GoogleLogout() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
  });
};

exports.GoogleLogout = GoogleLogout;
var _default = GoogleProvider;
exports["default"] = _default;