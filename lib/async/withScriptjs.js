"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.default = undefined

var _withScriptjs = require("../withScriptjs")

Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withScriptjs).default
  },
})

var _warning = require("warning")

var _warning2 = _interopRequireDefault(_warning)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

;(0, _warning2.default)(
  false,
  '[DEPRECATED] "react-google-maps/lib/async/withScriptjs" has been moved to "react-google-maps/lib/withScriptjs". You can also import { withScriptjs } from "react-google-maps" now.'
)
