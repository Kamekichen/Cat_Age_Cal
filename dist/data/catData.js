"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cat = _interopRequireDefault(require("../class/cat"));

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var name = _readlineSync["default"].question("名前を入力してください:");

var age = _readlineSync["default"].question("ねこの年齢を入力してください:"); // 名前と年齢の入力部分


var cat = new _cat["default"](name, age);
var _default = cat;
exports["default"] = _default;