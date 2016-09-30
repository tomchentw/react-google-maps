"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kmlLayerEventPropTypes = exports.kmlLayerDefaultPropTypes = exports.kmlLayerControlledPropTypes = undefined;

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

var _KmlLayerEventList = require("../eventLists/KmlLayerEventList");

var _KmlLayerEventList2 = _interopRequireDefault(_KmlLayerEventList);

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

var kmlLayerControlledPropTypes = exports.kmlLayerControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
  defaultViewport: _react.PropTypes.any,
  metadata: _react.PropTypes.any,
  status: _react.PropTypes.any,
  url: _react.PropTypes.string,
  zIndex: _react.PropTypes.number
};

var kmlLayerDefaultPropTypes = exports.kmlLayerDefaultPropTypes = (0, _defaultPropsCreator2.default)(kmlLayerControlledPropTypes);

var kmlLayerUpdaters = {
  defaultViewport: function defaultViewport(_defaultViewport, component) {
    component.getKmlLayer().setDefaultViewport(_defaultViewport);
  },
  metadata: function metadata(_metadata, component) {
    component.getKmlLayer().setMetadata(_metadata);
  },
  status: function status(_status, component) {
    component.getKmlLayer().setStatus(_status);
  },
  url: function url(_url, component) {
    component.getKmlLayer().setUrl(_url);
  },
  zIndex: function zIndex(_zIndex, component) {
    component.getKmlLayer().setZIndex(_zIndex);
  }
};

var _eventHandlerCreator = (0, _eventHandlerCreator3.default)(_KmlLayerEventList2.default);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var kmlLayerEventPropTypes = exports.kmlLayerEventPropTypes = eventPropTypes;

var KmlLayerCreator = function (_Component) {
  (0, _inherits3.default)(KmlLayerCreator, _Component);

  function KmlLayerCreator() {
    (0, _classCallCheck3.default)(this, KmlLayerCreator);
    return (0, _possibleConstructorReturn3.default)(this, (KmlLayerCreator.__proto__ || (0, _getPrototypeOf2.default)(KmlLayerCreator)).apply(this, arguments));
  }

  (0, _createClass3.default)(KmlLayerCreator, [{
    key: "getKmlLayer",
    value: function getKmlLayer() {
      return this.props.kmlLayer;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;
      var children = _props.children;


      if (_react.Children.count(children) > 0) {
        return _react2.default.createElement(
          "div",
          null,
          _react.Children.map(children, function (childElement) {
            return childElement && _react2.default.cloneElement(childElement, {
              mapHolderRef: mapHolderRef
            });
          })
        );
      } else {
        return _react2.default.createElement("noscript", null);
      }
    }
  }], [{
    key: "_createKmlLayer",
    value: function _createKmlLayer(kmlLayerProps) {
      var mapHolderRef = kmlLayerProps.mapHolderRef;
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer

      var kmlLayer = new google.maps.KmlLayer((0, _composeOptions2.default)(kmlLayerProps, kmlLayerControlledPropTypes));

      kmlLayer.setMap(mapHolderRef.getMap());

      return kmlLayer;
    }
  }]);
  return KmlLayerCreator;
}(_react.Component);

KmlLayerCreator.propTypes = {
  mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2.default).isRequired,
  kmlLayer: _react.PropTypes.object.isRequired
};
exports.default = (0, _componentLifecycleDecorator2.default)({
  registerEvents: registerEvents,
  instanceMethodName: "getKmlLayer",
  updaters: kmlLayerUpdaters
})(KmlLayerCreator);