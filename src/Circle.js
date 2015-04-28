import SimpleChildComponent from "./internals/SimpleChildComponent";
import createRegisterEvents from "./internals/createRegisterEvents";

class Circle extends SimpleChildComponent {
}

Circle._GoogleMapsClassName = "Circle";

Circle._registerEvents = createRegisterEvents(
  "center_changed click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup radius_changed rightclick"
);

export default Circle;
