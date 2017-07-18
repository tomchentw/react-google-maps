"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _flowRight2 = require("lodash/flowRight");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _constants = require("./constants");

var _enhanceElement = require("./enhanceElement");

var _enhanceElement2 = _interopRequireDefault(_enhanceElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global google */
var controlledPropTypes = {
    // NOTICE!!!!!!
    //
    // Only expose those with getters & setters in the table as controlled props.
    //
    // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
    //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#FusionTablesLayer
    options: _propTypes2.default.object
};

var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#FusionTablesLayer
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
    onClick: "click"
};

var publicMethodMap = {
    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#FusionTablesLayer
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
    //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    // END - Public APIs
};

var controlledPropUpdaterMap = {
    options: function options(fusionTablesLayer, _options) {
        fusionTablesLayer.setOptions(_options);
    }
};

function getInstanceFromComponent(component) {
    return component.state[_constants.FUSION_TABLES_LAYER];
}

exports.default = (0, _flowRight3.default)(_createReactClass2.default, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
    displayName: "FusionTablesLayer",

    propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes),

    contextTypes: (0, _defineProperty3.default)({}, _constants.MAP, _propTypes2.default.object),

    getInitialState: function getInitialState() {
        var fusionTablesLayer = new google.maps.FusionTablesLayer((0, _extends3.default)({
            map: this.context[_constants.MAP],
            query: this.props.options.query
        }, (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props)));

        return (0, _defineProperty3.default)({}, _constants.FUSION_TABLES_LAYER, fusionTablesLayer);
    },
    componentWillUnmount: function componentWillUnmount() {
        var fusionTablesLayer = getInstanceFromComponent(this);
        if (fusionTablesLayer) {
            fusionTablesLayer.setMap(null);
        }
    },
    render: function render() {
        return false;
    }
});