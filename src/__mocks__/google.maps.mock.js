import * as event from "./google.maps.event.mock";

export class Map {
  constructor(domEl, options) {
    this.domEl = domEl;
    this.options = options;
  }

  setOptions(nextOptions) {
  }

  setZoom(nextZoom) {
  }
}

export { event };
