'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require('can-use-dom');

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _MarkerClustererCreator = require('./addonsCreators/MarkerClustererCreator');

var _MarkerClustererCreator2 = _interopRequireDefault(_MarkerClustererCreator);

var _GoogleMapHolder = require('../creators/GoogleMapHolder');

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkerClusterer = function (_Component) {
  (0, _inherits3.default)(MarkerClusterer, _Component);

  function MarkerClusterer() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MarkerClusterer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(MarkerClusterer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MarkerClusterer, [{
    key: 'getAverageCenter',


    // Public APIs
    // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html#events
    value: function getAverageCenter() {
      return this.state.markerClusterer.getAverageCenter();
    }
  }, {
    key: 'getBatchSizeIE',
    value: function getBatchSizeIE() {
      return this.state.markerClusterer.getBatchSizeIE();
    }
  }, {
    key: 'getCalculator',
    value: function getCalculator() {
      return this.state.markerClusterer.getCalculator();
    }
  }, {
    key: 'getClusterClass',
    value: function getClusterClass() {
      return this.state.markerClusterer.getClusterClass();
    }
  }, {
    key: 'getClusters',
    value: function getClusters() {
      return this.state.markerClusterer.getClusters();
    }
  }, {
    key: 'getEnableRetinaIcons',
    value: function getEnableRetinaIcons() {
      return this.state.markerClusterer.getEnableRetinaIcons();
    }
  }, {
    key: 'getGridSize',
    value: function getGridSize() {
      return this.state.markerClusterer.getGridSize();
    }
  }, {
    key: 'getIgnoreHidden',
    value: function getIgnoreHidden() {
      return this.state.markerClusterer.getIgnoreHidden();
    }
  }, {
    key: 'getImageExtension',
    value: function getImageExtension() {
      return this.state.markerClusterer.getImageExtension();
    }
  }, {
    key: 'getImagePath',
    value: function getImagePath() {
      return this.state.markerClusterer.getImagePath();
    }
  }, {
    key: 'getImageSize',
    value: function getImageSize() {
      return this.state.markerClusterer.getImageSize();
    }
  }, {
    key: 'getMarkers',
    value: function getMarkers() {
      return this.state.markerClusterer.getMarkers();
    }
  }, {
    key: 'getMaxZoom',
    value: function getMaxZoom() {
      return this.state.markerClusterer.getMaxZoom();
    }
  }, {
    key: 'getMinimumClusterSize',
    value: function getMinimumClusterSize() {
      return this.state.markerClusterer.getMinimumClusterSize();
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      return this.state.markerClusterer.getStyles();
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      return this.state.markerClusterer.getTitle();
    }
  }, {
    key: 'getTotalClusters',
    value: function getTotalClusters() {
      return this.state.markerClusterer.getTotalClusters();
    }
  }, {
    key: 'getZoomOnClick',
    value: function getZoomOnClick() {
      return this.state.markerClusterer.getZoomOnClick();
    }

    // Public APIs - Use this carefully

  }, {
    key: 'addMarker',
    value: function addMarker(marker) {
      var nodraw = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      return this.state.markerClusterer.addMarker(marker, nodraw);
    }
  }, {
    key: 'addMarkers',
    value: function addMarkers(markers) {
      var nodraw = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      return this.state.markerClusterer.addMarkers(markers, nodraw);
    }
  }, {
    key: 'removeMarker',
    value: function removeMarker(marker) {
      var nodraw = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      return this.state.markerClusterer.removeMarker(marker, nodraw);
    }
  }, {
    key: 'removeMarkers',
    value: function removeMarkers(markers) {
      var nodraw = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      return this.state.markerClusterer.removeMarkers(markers, nodraw);
    }
  }, {
    key: 'clearMarkers',
    value: function clearMarkers() {
      return this.state.markerClusterer.clearMarkers();
    }
  }, {
    key: 'fitMapToMarkers',
    value: function fitMapToMarkers() {
      return this.state.markerClusterer.fitMapToMarkers();
    }
  }, {
    key: 'repaint',
    value: function repaint() {
      return this.state.markerClusterer.repaint();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!_canUseDom2.default) {
        return;
      }

      var markerClusterer = _MarkerClustererCreator2.default._createMarkerClusterer(this.context.mapHolderRef, this.props);

      this.setState({ markerClusterer: markerClusterer });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.markerClusterer) {
        return _react2.default.createElement(
          _MarkerClustererCreator2.default,
          (0, _extends3.default)({ markerClusterer: this.state.markerClusterer }, this.props),
          this.props.children
        );
      } else {
        return _react2.default.createElement('noscript', null);
      }
    }
  }]);
  return MarkerClusterer;
}(_react.Component);

MarkerClusterer.propTypes = (0, _extends3.default)({}, _MarkerClustererCreator.markerClusterDefaultPropTypes, _MarkerClustererCreator.markerClusterControlledPropTypes, _MarkerClustererCreator.markerClusterEventPropTypes);
MarkerClusterer.contextTypes = {
  mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2.default)
};
exports.default = MarkerClusterer;