"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.event = exports.Map = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _googleMapsEvent = require("./google.maps.event.mock");

var event = _interopRequireWildcard(_googleMapsEvent);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Map = exports.Map = function () {
  function Map(domEl, options) {
    (0, _classCallCheck3.default)(this, Map);

    this.domEl = domEl;
    this.options = options;
  }

  (0, _createClass3.default)(Map, [{
    key: "setOptions",
    value: function setOptions(nextOptions) {}
  }, {
    key: "setZoom",
    value: function setZoom(nextZoom) {}
  }]);
  return Map;
}();

exports.event = event;