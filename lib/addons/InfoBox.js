"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _addonsCreatorsInfoBoxCreator = require("./addonsCreators/InfoBoxCreator");

var _addonsCreatorsInfoBoxCreator2 = _interopRequireDefault(_addonsCreatorsInfoBoxCreator);

/*
 * Original author: @wuct
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/54
 */

var InfoBox = (function (_Component) {
  _inherits(InfoBox, _Component);

  function InfoBox() {
    _classCallCheck(this, InfoBox);

    _get(Object.getPrototypeOf(InfoBox.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(InfoBox, [{
    key: "getContent",

    // Public APIs
    //
    // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html
    value: function getContent() {/* TODO: children */}
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.state.infoBox.getPosition();
    }
  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state.infoBox.getVisible();
    }
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this.state.infoBox.getZIndex();
    }

    // END - Public APIs
    //
    // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;

      var infoBoxProps = _objectWithoutProperties(_props, ["mapHolderRef"]);

      var infoBox = _addonsCreatorsInfoBoxCreator2["default"]._createInfoBox(mapHolderRef, infoBoxProps);

      this.setState({ infoBox: infoBox });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.infoBox) {
        return _react2["default"].createElement(
          _addonsCreatorsInfoBoxCreator2["default"],
          _extends({ infoBox: this.state.infoBox }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _addonsCreatorsInfoBoxCreator.infoBoxDefaultPropTypes, _addonsCreatorsInfoBoxCreator.infoBoxControlledPropTypes, _addonsCreatorsInfoBoxCreator.infoBoxEventPropTypes),
    enumerable: true
  }]);

  return InfoBox;
})(_react.Component);

exports["default"] = InfoBox;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]