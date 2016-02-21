import {
  default as React,
} from "react";

import {
  WebpackScriptEntry,
  WebpackStyleEntry,
  ReactRenderToStringEntry,
} from "reacthtmlpack/lib/entry";

export default (
  <html>
    <head>
      <title>Async | React Google Maps | tomchentw</title>
      <base href="../" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta charSet="UTF-8" />
      <WebpackStyleEntry
        chunkName="client-async"
        chunkFilepath="../../scripts/client-async.js"
        configFilepath="../../Client.webpackConfig.js"
      />
      <script type="text/javascript" src="https://cdn.jsdelivr.net/prism/1.4.1/prism.js"/>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/prism/1.4.1/components/prism-jsx.min.js"/>
    </head>
    <body>
      <ReactRenderToStringEntry
        id="react-container"
        tagName="div"
        chunkName="server-async"
        chunkFilepath="../../scripts/server-async.js"
        configFilepath="../../Server.webpackConfig.js"
      />
      <WebpackScriptEntry
        chunkName="client-async"
        chunkFilepath="../../scripts/client-async.js"
        configFilepath="../../Client.webpackConfig.js"
      />
    </body>
  </html>
);
