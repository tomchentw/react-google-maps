"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _React = require("react");

var _React2 = _interopRequireDefault(_React);

var _EventComponent = require("./EventComponent");

var _EventComponent2 = _interopRequireDefault(_EventComponent);

var PropTypes = _React2["default"].PropTypes;

var VirtualContainer = (function (_React$Component) {
  function VirtualContainer() {
    _classCallCheck(this, VirtualContainer);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(VirtualContainer, _React$Component);

  _createClass(VirtualContainer, [{
    key: "render",
    value: function render() {
      return _React2["default"].createElement(
        "div",
        null,
        this._render_children_()
      );
    }
  }, {
    key: "_render_children_",
    value: function _render_children_() {
      var props = this.props;

      var extraProps = {
        googleMapsApi: props.googleMapsApi,
        map: props.map };

      return _React2["default"].Children.map(props.children, function (child) {
        if (child && child.type) {
          child = _React2["default"].cloneElement(child, extraProps);
        }
        return child;
      });
    }
  }]);

  return VirtualContainer;
})(_React2["default"].Component);

VirtualContainer.propTypes = {
  googleMapsApi: PropTypes.object.isRequired,
  map: PropTypes.object.isRequired,
  children: PropTypes.arrayOf(PropTypes.element) };

exports["default"] = VirtualContainer;
module.exports = exports["default"];