import React from "react";

const {PropTypes} = React;

class ReactHtml extends React.Component {

  render () {
    const {props, state} = this,
          {clientAssets} = props,
          innerHtml = {__html: props.componentString};

    return (
      <html>
        <head>
          <title>React Google Maps | tomchentw</title>
          <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp" />
          <script type="text/javascript" src="prism.min.js" />
        </head>
        <body>
          <div id="react-container" dangerouslySetInnerHTML={innerHtml} />
          <script type="text/javascript" src={clientAssets["main"]} />
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
