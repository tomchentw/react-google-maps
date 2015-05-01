import React from "react/addons";
import {PrismCode} from "react-prism";
import {GoogleMaps, Marker, Polyline, Polygon, InfoWindow} from "react-google-maps";

const {PropTypes} = React;

const ComponentPlayground = React.createClass({

  propTypes: {
    componentClass: PropTypes.func.isRequired,
    componentProps: PropTypes.object,
    // Adding __raw is to hide content from React Develop Tool
    componentRaw: PropTypes.shape({__raw: PropTypes.string}).isRequired,
  },

  render () {
    const {props, state} = this,
          Component = props.componentClass;

    return (
      <div className={props.className}>
        <Component className="col-xs-6" toast={props.toast} {...props.componentProps} />
        <div className="col-xs-6">
          <pre><PrismCode className="language-javascript">
            {props.componentRaw.__raw}
          </PrismCode></pre>
        </div>
      </div>
    );
  }
});

export default ComponentPlayground;
