import {
  default as React,
  Children,
} from "react";

import {
  render,
} from "react-dom";

function renderElement (
  contentElement,
  prevContent
) {
  if ("[object HTMLDivElement]" !== Object.prototype.toString.call(prevContent)) {
    prevContent = document.createElement("div");
  }

  render(contentElement, prevContent);
  return prevContent;
}

export default function setContentForOptionalReactElement (
  contentOptionalReactElement,
  infoWindowLikeInstance
) {
  if (React.isValidElement(contentOptionalReactElement)) {
    const contentElement = Children.only(contentOptionalReactElement);
    const prevContent = infoWindowLikeInstance.getContent();

    const domEl = renderElement(contentOptionalReactElement, prevContent);
    infoWindowLikeInstance.setContent(domEl);

  } else {
    infoWindowLikeInstance.setContent(contentOptionalReactElement);
  }
}
