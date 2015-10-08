import {
  default as React,
  Children,
} from "react";

function renderElement (
  contentElement,
  prevContent
) {
  if ("[object HTMLDivElement]" !== Object.prototype.toString.call(prevContent)) {
    prevContent = document.createElement("div");
  }

  // FIXME: React@0.14
  React.render(contentElement, prevContent);
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
