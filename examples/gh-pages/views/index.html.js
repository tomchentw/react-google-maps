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
      <title>React Google Maps | tomchentw</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta charSet="UTF-8" />
      <WebpackStyleEntry
        chunkName="client"
        chunkFilepath="../scripts/client.js"
        configFilepath="../Client.webpackConfig.js"
      />
      <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"/>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/prism/1.4.1/prism.js"/>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/prism/1.4.1/components/prism-jsx.min.js"/>
    </head>
    <body>
      <ReactRenderToStringEntry
        id="react-container"
        tagName="div"
        chunkName="server"
        chunkFilepath="../scripts/server.js"
        configFilepath="../Server.webpackConfig.js"
      />
      <WebpackScriptEntry
        chunkName="client"
        chunkFilepath="../scripts/client.js"
        configFilepath="../Client.webpackConfig.js"
      />
    </body>
  </html>
);
