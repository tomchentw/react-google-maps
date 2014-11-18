"use strict";

var React = require("react/addons"),
    {PropTypes} = React,
    {update} = React.addons,
    {PrismCode} = require("react-prism");

module.exports = React.createClass({
  displayName: "ComponentPlayground",

  mixins: [require("./ReactFutureMixin")],

  propTypes: {
    componentClass: PropTypes.func.isRequired,
    componentProps: PropTypes.object,
    // Adding __raw is to hide content from React Develop Tool
    componentRaw: PropTypes.shape({__raw: PropTypes.string}).isRequired,
  },

  _render (props, state) {
    var Component = props.componentClass;

    return <div className={props.className}>
      <Component className="col-xs-6" {...props.componentProps} />
      <div className="col-xs-6">
        <pre><PrismCode className="language-javascript">
          {props.componentRaw.__raw}
        </PrismCode></pre>
      </div>
    </div>;
  }
});
