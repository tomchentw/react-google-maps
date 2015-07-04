import SimpleChildComponent from "./internals/SimpleChildComponent";
import createRegisterEvents from "./internals/createRegisterEvents";
import BASIC_EVENT_NAMES from "./internals/BASIC_EVENT_NAMES";

class Circle extends SimpleChildComponent {
}

Circle._GoogleMapsClassName = "Circle";

Circle._registerEvents = createRegisterEvents(
  `${BASIC_EVENT_NAMES} radius_changed center_changed`
);

export default Circle;
