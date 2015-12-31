import {
  default as AsyncGettingStarted,
} from "./AsyncGettingStarted";

import {
  default as GettingStarted,
} from "./GettingStarted";

import {
  default as GeojsonToComponents,
} from "./GeojsonToComponents";

AsyncGettingStarted.__raw = require(`!raw-loader!./AsyncGettingStarted`);
GettingStarted.__raw = require(`!raw-loader!./GettingStarted`);
GeojsonToComponents.__raw = require(`!raw-loader!./GeojsonToComponents`);

export {
  AsyncGettingStarted,
  GettingStarted,
  GeojsonToComponents,
};
