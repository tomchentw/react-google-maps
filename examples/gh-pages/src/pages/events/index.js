import {
  default as SimpleClickEvent,
} from "./SimpleClickEvent";

import {
  default as ClosureListeners,
} from "./ClosureListeners";

import {
  default as AccessingArguments,
} from "./AccessingArguments";

import {
  default as GettingProperties,
} from "./GettingProperties";

SimpleClickEvent.__raw = require(`!raw-loader!./SimpleClickEvent`);
ClosureListeners.__raw = require(`!raw-loader!./ClosureListeners`);
AccessingArguments.__raw = require(`!raw-loader!./AccessingArguments`);
GettingProperties.__raw = require(`!raw-loader!./GettingProperties`);

export {
  SimpleClickEvent,
  ClosureListeners,
  AccessingArguments,
  GettingProperties,
};
