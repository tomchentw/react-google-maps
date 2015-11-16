"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _eventListsSearchBoxEventList = require("../eventLists/SearchBoxEventList");

var _eventListsSearchBoxEventList2 = _interopRequireDefault(_eventListsSearchBoxEventList);

var _utilsEventHandlerCreator = require("../utils/eventHandlerCreator");

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var searchBoxControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  bounds: _react.PropTypes.any
};

exports.searchBoxControlledPropTypes = searchBoxControlledPropTypes;
var searchBoxDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(searchBoxControlledPropTypes);

exports.searchBoxDefaultPropTypes = searchBoxDefaultPropTypes;
var searchBoxUpdaters = {
  bounds: function bounds(_bounds, component) {
    component.getSearchBox().setBounds(_bounds);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsSearchBoxEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var searchBoxEventPropTypes = eventPropTypes;

exports.searchBoxEventPropTypes = searchBoxEventPropTypes;

var SearchBoxCreator = (function (_Component) {
  _inherits(SearchBoxCreator, _Component);

  function SearchBoxCreator() {
    _classCallCheck(this, _SearchBoxCreator);

    _get(Object.getPrototypeOf(_SearchBoxCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(SearchBoxCreator, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mountComponentToMap(this.props.controlPosition);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.controlPosition !== prevProps.controlPosition) {
        this._unmountComponentFromMap(prevProps.controlPosition);
        this._mountComponentToMap(this.props.controlPosition);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._unmountComponentFromMap(this.props.controlPosition);
    }
  }, {
    key: "_mountComponentToMap",
    value: function _mountComponentToMap(controlPosition) {
      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;
      var inputElement = _props.inputElement;

      mapHolderRef.getMap().controls[controlPosition].push(inputElement);
    }
  }, {
    key: "_unmountComponentFromMap",
    value: function _unmountComponentFromMap(controlPosition) {
      var _props2 = this.props;
      var mapHolderRef = _props2.mapHolderRef;
      var inputElement = _props2.inputElement;

      var index = mapHolderRef.getMap().controls[controlPosition].getArray().indexOf(inputElement);
      mapHolderRef.getMap().controls[controlPosition].removeAt(index);
    }
  }, {
    key: "getSearchBox",
    value: function getSearchBox() {
      return this.props.searchBox;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createSearchBox",
    value: function _createSearchBox(inputElement, searchBoxProps) {
      var searchBox = new google.maps.places.SearchBox(inputElement, (0, _utilsComposeOptions2["default"])(searchBoxProps, searchBoxControlledPropTypes));

      return searchBox;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      searchBox: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _SearchBoxCreator = SearchBoxCreator;
  SearchBoxCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getSearchBox",
    updaters: searchBoxUpdaters
  })(SearchBoxCreator) || SearchBoxCreator;
  return SearchBoxCreator;
})(_react.Component);

exports["default"] = SearchBoxCreator;