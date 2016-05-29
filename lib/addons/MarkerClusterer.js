'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x5, _x6, _x7) { var _again = true; _function: while (_again) { var object = _x5, property = _x6, receiver = _x7; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x5 = parent; _x6 = property; _x7 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require('can-use-dom');

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _addonsCreatorsMarkerClustererCreator = require('./addonsCreators/MarkerClustererCreator');

var _addonsCreatorsMarkerClustererCreator2 = _interopRequireDefault(_addonsCreatorsMarkerClustererCreator);

var MarkerClusterer = (function (_Component) {
  _inherits(MarkerClusterer, _Component);

  function MarkerClusterer() {
    _classCallCheck(this, MarkerClusterer);

    _get(Object.getPrototypeOf(MarkerClusterer.prototype), 'constructor', this).apply(this, arguments);

    this.state = {};
  }

  _createClass(MarkerClusterer, [{
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
      if (!_canUseDom2['default']) {
        return;
      }

      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;

      var markerClustererProps = _objectWithoutProperties(_props, ['mapHolderRef']);

      var markerClusterer = _addonsCreatorsMarkerClustererCreator2['default']._createMarkerClusterer(mapHolderRef, markerClustererProps);

      this.setState({ markerClusterer: markerClusterer });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.markerClusterer) {
        return _react2['default'].createElement(
          _addonsCreatorsMarkerClustererCreator2['default'],
          _extends({ markerClusterer: this.state.markerClusterer }, this.props),
          this.props.children
        );
      } else {
        return _react2['default'].createElement('noscript', null);
      }
    }
  }], [{
    key: 'propTypes',
    value: _extends({}, _addonsCreatorsMarkerClustererCreator.markerClusterDefaultPropTypes, _addonsCreatorsMarkerClustererCreator.markerClusterControlledPropTypes, _addonsCreatorsMarkerClustererCreator.markerClusterEventPropTypes),
    enumerable: true
  }]);

  return MarkerClusterer;
})(_react.Component);

exports['default'] = MarkerClusterer;
module.exports = exports['default'];