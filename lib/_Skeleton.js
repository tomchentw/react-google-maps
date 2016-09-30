"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _SkeletonCreator = require("./creators/_SkeletonCreator");

var _SkeletonCreator2 = _interopRequireDefault(_SkeletonCreator);

var _GoogleMapHolder = require("./creators/GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Skeleton = function (_Component) {
  (0, _inherits3.default)(Skeleton, _Component);

  function Skeleton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Skeleton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Skeleton.__proto__ || (0, _getPrototypeOf2.default)(Skeleton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Skeleton, [{
    key: "getAnimation",


    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
    //    .filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getAnimation() {
      return this.state.skeleton.getAnimation();
    }
    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var mapHolderRef = this.context.mapHolderRef;

      if (!_canUseDom2.default) {
        return;
      }
      var skeleton = _SkeletonCreator2.default._createSkeleton((0, _extends3.default)({}, this.props, {
        mapHolderRef: mapHolderRef
      }));

      this.setState({ skeleton: skeleton });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.skeleton) {
        return _react2.default.createElement(
          _SkeletonCreator2.default,
          (0, _extends3.default)({ skeleton: this.state.skeleton }, this.props),
          this.props.children
        );
      } else {
        return _react2.default.createElement("noscript", null);
      }
    }
  }]);
  return Skeleton;
}(_react.Component);

Skeleton.propTypes = (0, _extends3.default)({}, _SkeletonCreator.skeletonDefaultPropTypes, _SkeletonCreator.skeletonControlledPropTypes, _SkeletonCreator.skeletonEventPropTypes);
Skeleton.contextTypes = {
  mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2.default)
};
exports.default = Skeleton;