import _ from "lodash";

import {
  default as React,
  Component,
} from "react";

import Helmet from "react-helmet";

export default class PageWithIframeEntry extends Component {

  isWritten = false;

  handleIframeMount = this.handleIframeMount.bind(this);

  handleIframeMount(iframe) {
    if (iframe && !this.isWritten) {
      this.isWritten = true;

      const [script] = [...document.querySelectorAll(`script`)]
        .filter(script => script.src.match(/static\/js\/(bundle|main.+)\.js$/));

      const scriptTag = script ? script.outerHTML : ``;

      const [link] = [...document.querySelectorAll(`link`)]
        .filter(link => link.href.match(/static\/css\/(bundle|main.+)\.css$/));

      const linkTag = link ? link.outerHTML : ``;

      const htmlTag = `
<!DOCTYPE html>
<html>
  <head>
    ${linkTag}
    <script type="text/javascript">
window.ReactGoogleMapsAsync = true;
    </script>
  </head>
  <body>
    <div id="root" />
    ${scriptTag}
  </body>
</html>
`;

      const doc = iframe.contentDocument;
      doc.open();
      doc.write(htmlTag);
      doc.close();
    }
  }

  render() {
    return (
      <div style={{height: `100%`}}>
        <Helmet
          title="Async Getting Started"
        />
        <h3 style={{marginTop: 0}}>
          Load Google Maps JavaScript API asynchronously!<br />
          <small>The map is loaded in an iframe to create an isloated runtime. During loading, we show up a loading spinner.</small>
        </h3>
        <iframe
          ref={this.handleIframeMount}
          style={{width: `100%`, height: `100%`}}
        />
      </div>
    );
  }
}
