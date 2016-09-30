"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchBoxEventPropTypes = exports.searchBoxDefaultPropTypes = exports.searchBoxControlledPropTypes = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SearchBoxEventList = require("../eventLists/SearchBoxEventList");

var _SearchBoxEventList2 = _interopRequireDefault(_SearchBoxEventList);

var _eventHandlerCreator2 = require("../utils/eventHandlerCreator");

var _eventHandlerCreator3 = _interopRequireDefault(_eventHandlerCreator2);

var _defaultPropsCreator = require("../utils/defaultPropsCreator");

var _defaultPropsCreator2 = _interopRequireDefault(_defaultPropsCreator);

var _composeOptions = require("../utils/composeOptions");

var _composeOptions2 = _interopRequireDefault(_composeOptions);

var _componentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _componentLifecycleDecorator2 = _interopRequireDefault(_componentLifecycleDecorator);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var searchBoxControlledPropTypes = exports.searchBoxControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  bounds: _react.PropTypes.any
};

var searchBoxDefaultPropTypes = exports.searchBoxDefaultPropTypes = (0, _defaultPropsCreator2.default)(searchBoxControlledPropTypes);

var searchBoxUpdaters = {
  bounds: function bounds(_bounds, component) {
    component.getSearchBox().setBounds(_bounds);
  }
};

var _eventHandlerCreator = (0, _eventHandlerCreator3.default)(_SearchBoxEventList2.default);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var searchBoxEventPropTypes = exports.searchBoxEventPropTypes = eventPropTypes;

var SearchBoxCreator = function (_Component) {
  (0, _inherits3.default)(SearchBoxCreator, _Component);

  function SearchBoxCreator() {
    (0, _classCallCheck3.default)(this, SearchBoxCreator);
    return (0, _possibleConstructorReturn3.default)(this, (SearchBoxCreator.__proto__ || (0, _getPrototypeOf2.default)(SearchBoxCreator)).apply(this, arguments));
  }

  (0, _createClass3.default)(SearchBoxCreator, [{
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
      return _react2.default.createElement("noscript", null);
    }
  }], [{
    key: "_createSearchBox",
    value: function _createSearchBox(inputElement, searchBoxProps) {
      var searchBox = new google.maps.places.SearchBox(inputElement, (0, _composeOptions2.default)(searchBoxProps, searchBoxControlledPropTypes));

      return searchBox;
    }
  }]);
  return SearchBoxCreator;
}(_react.Component);

SearchBoxCreator.propTypes = {
  mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2.default).isRequired,
  searchBox: _react.PropTypes.object.isRequired
};
exports.default = (0, _componentLifecycleDecorator2.default)({
  registerEvents: registerEvents,
  instanceMethodName: "getSearchBox",
  updaters: searchBoxUpdaters
})(SearchBoxCreator);