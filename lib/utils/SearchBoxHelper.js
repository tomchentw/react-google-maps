"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.createInputElement = createInputElement;
exports.mountInputElementToControlPositionOnMap = mountInputElementToControlPositionOnMap;
exports.unmountInputElementFromControlPositionOnMap = unmountInputElementFromControlPositionOnMap;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global google */
function createInputElement(props) {
  var containerElement = document.createElement("div");
  // Allow developers to style the "hidden element" via `props.inputProps` and `props.input{*}`.
  var component = (0, _reactDom.render)(_react2.default.createElement("input", (0, _extends3.default)({}, props.inputProps, {
    style: props.inputStyle,
    className: props.inputClassName,
    placeholder: props.inputPlaceholder
  })), containerElement);
  // Cannot directly use the component - Google Maps will mess with React's internal state
  // by detaching/attaching.
  var inputEl = (0, _reactDom.findDOMNode)(component).cloneNode();
  (0, _reactDom.unmountComponentAtNode)(containerElement);
  return inputEl;
}

function mountInputElementToControlPositionOnMap(inputEl, controlPosition, map) {
  return map.controls[controlPosition].push(inputEl) - 1;
}

function unmountInputElementFromControlPositionOnMap(index, controlPosition, map) {
  return map.controls[controlPosition].removeAt(index);
}