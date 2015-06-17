import React from "react";

const {PropTypes} = React;

class VirtualContainer extends React.Component {

  render () {
    return (
      <div>
        {this._render_children_()}
      </div>
    );
  }

  _render_children_ () {
    const {props} = this;
    const extraProps = {
      googleMapsApi: props.googleMapsApi,
      map: props.map,
    };

    return React.Children.map(props.children, (child) => {
      if (child && child.type) {
        child = React.cloneElement(child, extraProps);
      }
      return child;
    });
  }
}

VirtualContainer.propTypes = {
  googleMapsApi: PropTypes.object.isRequired,
  map: PropTypes.object.isRequired,
  children: PropTypes.renderable || PropTypes.node, // https://github.com/facebook/react/issues/1752#issuecomment-47818166
};

export default VirtualContainer;
