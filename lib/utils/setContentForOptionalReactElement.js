"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setContentForOptionalReactElement;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

function renderElement(contentElement, possiblePrevContent) {
  var prevContent = possiblePrevContent;
  if ("[object HTMLDivElement]" !== Object.prototype.toString.call(prevContent)) {
    prevContent = document.createElement("div");
  }

  (0, _reactDom.render)(contentElement, prevContent);
  return prevContent;
}

function setContentForOptionalReactElement(contentOptionalReactElement, infoWindowLikeInstance) {
  if (_react2["default"].isValidElement(contentOptionalReactElement)) {
    var contentElement = _react.Children.only(contentOptionalReactElement);
    var prevContent = infoWindowLikeInstance.getContent();

    var domEl = renderElement(contentElement, prevContent);
    infoWindowLikeInstance.setContent(domEl);
  } else {
    infoWindowLikeInstance.setContent(contentOptionalReactElement);
  }
}

module.exports = exports["default"];