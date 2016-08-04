"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _SearchBoxCreator = require("./creators/SearchBoxCreator");

var _SearchBoxCreator2 = _interopRequireDefault(_SearchBoxCreator);

var _GoogleMapHolder = require("./creators/GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Original author: @eyebraus
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/110
 */
var SearchBox = function (_Component) {
  (0, _inherits3.default)(SearchBox, _Component);

  function SearchBox() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SearchBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(SearchBox)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SearchBox, [{
    key: "getBounds",


    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
    //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
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
      if (!_canUseDom2.default) {
        return;
      }
      var _props = this.props;
      var classes = _props.classes;
      var style = _props.style;
      var placeholder = _props.placeholder;
      var searchBoxProps = (0, _objectWithoutProperties3.default)(_props, ["classes", "style", "placeholder"]);

      // Cannot create input via component - Google Maps will mess with React's internal state
      // by detaching/attaching.
      // Allow developers to style the "hidden element" via inputClasses.

      var domEl = document.createElement("input");
      domEl.className = classes;
      domEl.type = "text";
      domEl.placeholder = placeholder;

      (0, _assign2.default)(domEl.style, style);

      var searchBox = _SearchBoxCreator2.default._createSearchBox(domEl, searchBoxProps);

      this.setState({
        inputElement: domEl,
        searchBox: searchBox
      });
    }
  }, {
    key: "render",
    value: function render() {
      var controlPosition = this.props.controlPosition;
      var mapHolderRef = this.context.mapHolderRef;


      return this.state.searchBox ? _react2.default.createElement(
        _SearchBoxCreator2.default,
        (0, _extends3.default)({
          controlPosition: controlPosition,
          inputElement: this.state.inputElement,
          mapHolderRef: mapHolderRef,
          searchBox: this.state.searchBox
        }, this.props),
        this.props.children
      ) : _react2.default.createElement("noscript", null);
    }
  }]);
  return SearchBox;
}(_react.Component);

SearchBox.propTypes = (0, _extends3.default)({}, _SearchBoxCreator.searchBoxDefaultPropTypes, _SearchBoxCreator.searchBoxControlledPropTypes, _SearchBoxCreator.searchBoxEventPropTypes);
SearchBox.contextTypes = {
  mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2.default)
};
exports.default = SearchBox;