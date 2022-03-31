"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "GoogleLogin", {
  enumerable: true,
  get: function get() {
    return _GoogleLogin["default"];
  }
});
Object.defineProperty(exports, "GoogleLogout", {
  enumerable: true,
  get: function get() {
    return _GoogleProvider.GoogleLogout;
  }
});
Object.defineProperty(exports, "GoogleProvider", {
  enumerable: true,
  get: function get() {
    return _GoogleProvider["default"];
  }
});
Object.defineProperty(exports, "KakaoLogin", {
  enumerable: true,
  get: function get() {
    return _KakaoLogin["default"];
  }
});
Object.defineProperty(exports, "KakaoLogout", {
  enumerable: true,
  get: function get() {
    return _KakaoLogout["default"];
  }
});
Object.defineProperty(exports, "KakaoProvider", {
  enumerable: true,
  get: function get() {
    return _KakaoProvider["default"];
  }
});
Object.defineProperty(exports, "KakaoUnlink", {
  enumerable: true,
  get: function get() {
    return _KakaoUnlink["default"];
  }
});
Object.defineProperty(exports, "NaverLogin", {
  enumerable: true,
  get: function get() {
    return _NaverLogin["default"];
  }
});
Object.defineProperty(exports, "NaverLogout", {
  enumerable: true,
  get: function get() {
    return _NaverProvider.NaverLogout;
  }
});
Object.defineProperty(exports, "NaverProvider", {
  enumerable: true,
  get: function get() {
    return _NaverProvider["default"];
  }
});

var _KakaoLogin = _interopRequireDefault(require("./kakao/KakaoLogin"));

var _KakaoLogout = _interopRequireDefault(require("./kakao/KakaoLogout"));

var _KakaoProvider = _interopRequireDefault(require("./kakao/KakaoProvider"));

var _KakaoUnlink = _interopRequireDefault(require("./kakao/KakaoUnlink"));

var _NaverProvider = _interopRequireWildcard(require("./naver/NaverProvider"));

var _NaverLogin = _interopRequireDefault(require("./naver/NaverLogin"));

var _GoogleProvider = _interopRequireWildcard(require("./google/GoogleProvider"));

var _GoogleLogin = _interopRequireDefault(require("./google/GoogleLogin"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }