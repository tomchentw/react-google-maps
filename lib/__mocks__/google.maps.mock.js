"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _googleMapsEventMock = require("./google.maps.event.mock");

var event = _interopRequireWildcard(_googleMapsEventMock);

var Map = (function () {
  function Map(domEl, options) {
    _classCallCheck(this, Map);
  }

  _createClass(Map, [{
    key: "setOptions",
    value: function setOptions(nextOptions) {}
  }, {
    key: "setZoom",
    value: function setZoom(nextZoom) {}
  }]);

  return Map;
})();

exports.Map = Map;
exports.event = event;