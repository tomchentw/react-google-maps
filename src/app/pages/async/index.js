import AsyncGettingStartedExample from "./AsyncGettingStartedExample";

import PageWithIframeEntry from "./PageWithIframeEntry";

PageWithIframeEntry.__raw = require(`!raw!./AsyncGettingStartedExample`);

export {
  AsyncGettingStartedExample,
  PageWithIframeEntry,
};
