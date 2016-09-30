'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markerClustererEventPropTypes = exports.markerClustererDefaultPropTypes = exports.markerClustererControlledPropTypes = undefined;

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

var _MarkerClustererEventList = require('../addonsEventLists/MarkerClustererEventList');

var _MarkerClustererEventList2 = _interopRequireDefault(_MarkerClustererEventList);

var _eventHandlerCreator2 = require('../../utils/eventHandlerCreator');

var _eventHandlerCreator3 = _interopRequireDefault(_eventHandlerCreator2);

var _defaultPropsCreator = require('../../utils/defaultPropsCreator');

var _defaultPropsCreator2 = _interopRequireDefault(_defaultPropsCreator);

var _composeOptions = require('../../utils/composeOptions');

var _composeOptions2 = _interopRequireDefault(_composeOptions);

var _componentLifecycleDecorator = require('../../utils/componentLifecycleDecorator');

var _componentLifecycleDecorator2 = _interopRequireDefault(_componentLifecycleDecorator);

var _GoogleMapHolder = require('../../creators/GoogleMapHolder');

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var markerClustererControlledPropTypes = exports.markerClustererControlledPropTypes = {
  // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html
  averageCenter: _react.PropTypes.bool,
  batchSizeIE: _react.PropTypes.number,
  calculator: _react.PropTypes.func,
  clusterClass: _react.PropTypes.string,
  enableRetinaIcons: _react.PropTypes.bool,
  gridSize: _react.PropTypes.number,
  ignoreHidden: _react.PropTypes.bool,
  imageExtension: _react.PropTypes.string,
  imagePath: _react.PropTypes.string,
  imageSizes: _react.PropTypes.array,
  maxZoom: _react.PropTypes.number,
  minimumClusterSize: _react.PropTypes.number,
  styles: _react.PropTypes.array,
  title: _react.PropTypes.string,
  zoomOnClick: _react.PropTypes.bool
};

var markerClustererDefaultPropTypes = exports.markerClustererDefaultPropTypes = (0, _defaultPropsCreator2.default)(markerClustererControlledPropTypes);

var markerClustererUpdaters = {
  averageCenter: function averageCenter(_averageCenter, component) {
    component.getMarkerClusterer().setAverageCenter(_averageCenter);
  },
  batchSizeIE: function batchSizeIE(_batchSizeIE, component) {
    component.getMarkerClusterer().setBatchSizeIE(_batchSizeIE);
  },
  calculator: function calculator(_calculator, component) {
    component.getMarkerClusterer().setCalculator(_calculator);
  },
  enableRetinaIcons: function enableRetinaIcons(_enableRetinaIcons, component) {
    component.getMarkerClusterer().setEnableRetinaIcons(_enableRetinaIcons);
  },
  gridSize: function gridSize(_gridSize, component) {
    component.getMarkerClusterer().setGridSize(_gridSize);
  },
  ignoreHidden: function ignoreHidden(_ignoreHidden, component) {
    component.getMarkerClusterer().setIgnoreHidden(_ignoreHidden);
  },
  imageExtension: function imageExtension(_imageExtension, component) {
    component.getMarkerClusterer().setImageExtension(_imageExtension);
  },
  imagePath: function imagePath(_imagePath, component) {
    component.getMarkerClusterer().setImagePath(_imagePath);
  },
  imageSizes: function imageSizes(_imageSizes, component) {
    component.getMarkerClusterer().setImageSizes(_imageSizes);
  },
  maxZoom: function maxZoom(_maxZoom, component) {
    component.getMarkerClusterer().setMaxZoom(_maxZoom);
  },
  minimumClusterSize: function minimumClusterSize(_minimumClusterSize, component) {
    component.getMarkerClusterer().setMinimumClusterSize(_minimumClusterSize);
  },
  styles: function styles(_styles, component) {
    component.getMarkerClusterer().setStyles(_styles);
  },
  title: function title(_title, component) {
    component.getMarkerClusterer().setTitle(_title);
  },
  zoomOnClick: function zoomOnClick(_zoomOnClick, component) {
    component.getMarkerClusterer().setZoomOnClick(_zoomOnClick);
  }
};

var _eventHandlerCreator = (0, _eventHandlerCreator3.default)(_MarkerClustererEventList2.default);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var markerClustererEventPropTypes = exports.markerClustererEventPropTypes = eventPropTypes;

var MarkerClustererCreator = function (_Component) {
  (0, _inherits3.default)(MarkerClustererCreator, _Component);

  function MarkerClustererCreator() {
    (0, _classCallCheck3.default)(this, MarkerClustererCreator);
    return (0, _possibleConstructorReturn3.default)(this, (MarkerClustererCreator.__proto__ || (0, _getPrototypeOf2.default)(MarkerClustererCreator)).apply(this, arguments));
  }

  (0, _createClass3.default)(MarkerClustererCreator, [{
    key: 'getMarkerClusterer',
    value: function getMarkerClusterer() {
      return this.props.markerClusterer;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.props.markerClusterer.repaint();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.markerClusterer.setMap(null);
    }
  }, {
    key: 'getAnchor',
    value: function getAnchor() {
      return this.props.markerClusterer;
    }
  }, {
    key: 'getAnchorType',
    value: function getAnchorType() {
      return 'MarkerClusterer';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var mapHolderRef = this.context.mapHolderRef;


      if (_react.Children.count(children) > 0) {
        return _react2.default.createElement(
          'div',
          null,
          _react.Children.map(children, function (childElement) {
            if (_react2.default.isValidElement(childElement)) {
              return _react2.default.cloneElement(childElement, {
                mapHolderRef: mapHolderRef,
                anchorHolderRef: _this2
              });
            } else {
              return childElement;
            }
          })
        );
      } else {
        return _react2.default.createElement('noscript', null);
      }
    }
  }], [{
    key: '_createMarkerClusterer',
    value: function _createMarkerClusterer(mapHolderRef, markerClustererProps) {
      var GoogleMarkerClusterer = require( // eslint-disable-line global-require
      'marker-clusterer-plus');

      // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html#events
      var markerClusterer = new GoogleMarkerClusterer(mapHolderRef.getMap(), [], (0, _composeOptions2.default)(markerClustererProps, markerClustererControlledPropTypes));

      return markerClusterer;
    }
  }]);
  return MarkerClustererCreator;
}(_react.Component);

MarkerClustererCreator.PropTypes = {
  markerClusterer: _react.PropTypes.object.isRequired
};
MarkerClustererCreator.contextTypes = {
  mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2.default)
};
exports.default = (0, _componentLifecycleDecorator2.default)({
  registerEvents: registerEvents,
  instanceMethodName: 'getMarkerClusterer',
  updaters: markerClustererUpdaters
})(MarkerClustererCreator);