import React from "react";

const {PropTypes} = React;

class ReactHtml extends React.Component {

  _render_link_to_stylesheet_ (clientAssets) {
    if (clientAssets["client"]) {
      return (
        <link rel="stylesheet" href={clientAssets["client"].replace(/js$/, "css")} />
      );
    }
  }

  render () {
    const {props, state} = this,
          {clientAssets} = props,
          innerHtml = {__html: props.componentString};

    return (
      <html>
        <head>
          <title>React Google Maps | tomchentw</title>
          {this._render_link_to_stylesheet_(clientAssets)}
          <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing" />
          <script type="text/javascript" src="prism.min.js" />
        </head>
        <body>
          <div id="react-container" dangerouslySetInnerHTML={innerHtml} />
          <script type="text/javascript" src={clientAssets["assets/client"] || clientAssets["client"]} />
        </body>
      </html>
    );
  }
}

ReactHtml.propTypes = {
  componentString: PropTypes.string.isRequired,
  clientAssets: PropTypes.object.isRequired,
};

export default ReactHtml;
