import SimpleChildComponent from "./internals/SimpleChildComponent";
import createRegisterEvents from "./internals/createRegisterEvents";
import BASIC_EVENT_NAMES from "./internals/BASIC_EVENT_NAMES";

class Rectangle extends SimpleChildComponent {
}

Rectangle._GoogleMapsClassName = "Rectangle";

Rectangle._registerEvents = createRegisterEvents(
  `${BASIC_EVENT_NAMES} bounds_changed`
);

export default Rectangle;
