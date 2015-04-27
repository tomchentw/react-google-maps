import SimpleChildComponent from "./internals/SimpleChildComponent";
import createRegisterEvents from "./internals/createRegisterEvents";
import BASIC_EVENT_NAMES from "./internals/BASIC_EVENT_NAMES";

class DirectionsRenderer extends SimpleChildComponent {
}

DirectionsRenderer._GoogleMapsClassName = "DirectionsRenderer";

DirectionsRenderer._registerEvents = createRegisterEvents(
  BASIC_EVENT_NAMES
);

export default DirectionsRenderer;
