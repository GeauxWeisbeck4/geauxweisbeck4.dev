"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mod = _interopRequireDefault(require("lume/mod.ts"));

var _lightningcss = _interopRequireDefault(require("lume/plugins/lightningcss.ts"));

var _windi_css = _interopRequireDefault(require("lume/plugins/windi_css.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var site = (0, _mod["default"])();
site.use((0, _lightningcss["default"])());
site.use((0, _windi_css["default"])());
var _default = site;
exports["default"] = _default;