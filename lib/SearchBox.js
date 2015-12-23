"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsSearchBoxCreator = require("./creators/SearchBoxCreator");

var _creatorsSearchBoxCreator2 = _interopRequireDefault(_creatorsSearchBoxCreator);

/*
 * Original author: @eyebraus
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/110
 */

var SearchBox = (function (_Component) {
  _inherits(SearchBox, _Component);

  function SearchBox() {
    _classCallCheck(this, SearchBox);

    _get(Object.getPrototypeOf(SearchBox.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(SearchBox, [{
    key: "getBounds",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    value: function getBounds() {
      return this.state.searchBox.getBounds();
    }
  }, {
    key: "getPlaces",
    value: function getPlaces() {
      return this.state.searchBox.getPlaces();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;
      var classes = _props.classes;
      var style = _props.style;
      var placeholder = _props.placeholder;

      var searchBoxProps = _objectWithoutProperties(_props, ["mapHolderRef", "classes", "style", "placeholder"]);

      // Cannot create input via component - Google Maps will mess with React's internal state by detaching/attaching.
      // Allow developers to style the "hidden element" via inputClasses.
      var domEl = document.createElement("input");
      domEl.className = classes;
      domEl.type = "text";
      domEl.placeholder = placeholder;

      for (var propKey in style) {
        if (style.hasOwnProperty(propKey)) {
          domEl.style[propKey] = style[propKey];
        }
      }

      var searchBox = _creatorsSearchBoxCreator2["default"]._createSearchBox(domEl, searchBoxProps);

      this.setState({
        inputElement: domEl,
        searchBox: searchBox
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props;
      var mapHolderRef = _props2.mapHolderRef;
      var controlPosition = _props2.controlPosition;

      return this.state.searchBox ? _react2["default"].createElement(
        _creatorsSearchBoxCreator2["default"],
        _extends({ controlPosition: controlPosition, inputElement: this.state.inputElement, mapHolderRef: mapHolderRef, searchBox: this.state.searchBox }, this.props),
        this.props.children
      ) : _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsSearchBoxCreator.searchBoxDefaultPropTypes, _creatorsSearchBoxCreator.searchBoxControlledPropTypes, _creatorsSearchBoxCreator.searchBoxEventPropTypes),
    enumerable: true
  }]);

  return SearchBox;
})(_react.Component);

exports["default"] = SearchBox;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]