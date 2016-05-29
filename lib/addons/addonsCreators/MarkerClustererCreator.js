'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addonsEventListsMarkerClustererEventList = require('../addonsEventLists/MarkerClustererEventList');

var _addonsEventListsMarkerClustererEventList2 = _interopRequireDefault(_addonsEventListsMarkerClustererEventList);

var _utilsEventHandlerCreator = require('../../utils/eventHandlerCreator');

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require('../../utils/defaultPropsCreator');

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require('../../utils/composeOptions');

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = require('../../utils/componentLifecycleDecorator');

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _creatorsGoogleMapHolder = require('../../creators/GoogleMapHolder');

var _creatorsGoogleMapHolder2 = _interopRequireDefault(_creatorsGoogleMapHolder);

var markerClustererControlledPropTypes = {
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

exports.markerClustererControlledPropTypes = markerClustererControlledPropTypes;
var markerClustererDefaultPropTypes = (0, _utilsDefaultPropsCreator2['default'])(markerClustererControlledPropTypes);

exports.markerClustererDefaultPropTypes = markerClustererDefaultPropTypes;
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

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2['default'])(_addonsEventListsMarkerClustererEventList2['default']);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var markerClustererEventPropTypes = eventPropTypes;

exports.markerClustererEventPropTypes = markerClustererEventPropTypes;

var MarkerClustererCreator = (function (_Component) {
  _inherits(MarkerClustererCreator, _Component);

  function MarkerClustererCreator() {
    _classCallCheck(this, _MarkerClustererCreator);

    _get(Object.getPrototypeOf(_MarkerClustererCreator.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(MarkerClustererCreator, [{
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
      var _this = this;

      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;
      var children = _props.children;

      if (_react.Children.count(children) > 0) {
        return _react2['default'].createElement(
          'div',
          null,
          _react.Children.map(children, function (childElement) {
            if (_react2['default'].isValidElement(childElement)) {
              return _react2['default'].cloneElement(childElement, {
                mapHolderRef: mapHolderRef,
                anchorHolderRef: _this
              });
            } else {
              return childElement;
            }
          })
        );
      } else {
        return _react2['default'].createElement('noscript', null);
      }
    }
  }], [{
    key: '_createMarkerClusterer',
    value: function _createMarkerClusterer(mapHolderRef, markerClustererProps) {
      var GoogleMarkerClusterer = require('marker-clusterer-plus');

      // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html#events
      var markerClusterer = new GoogleMarkerClusterer(mapHolderRef.getMap(), [], (0, _utilsComposeOptions2['default'])(markerClustererProps, markerClustererControlledPropTypes));

      return markerClusterer;
    }
  }, {
    key: 'PropTypes',
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_creatorsGoogleMapHolder2['default']).isRequired,
      markerClusterer: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _MarkerClustererCreator = MarkerClustererCreator;
  MarkerClustererCreator = (0, _utilsComponentLifecycleDecorator2['default'])({
    registerEvents: registerEvents,
    instanceMethodName: 'getMarkerClusterer',
    updaters: markerClustererUpdaters
  })(MarkerClustererCreator) || MarkerClustererCreator;
  return MarkerClustererCreator;
})(_react.Component);

exports['default'] = MarkerClustererCreator;