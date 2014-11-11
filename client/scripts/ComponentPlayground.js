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

  getInitialState () {
    return {
      googleMapsApi: google.maps
    };
  },

  componentDidMount () {
    this._setup_async_loaded();
  },

  componentWillReceiveProps (nextProps) {
    this.setState({
      googleMapsApi: nextProps.componentAsync ? null : google.maps
    });
  },

  componentDidUpdate () {
    if (this.props.componentAsync && !this.state.googleMapsApi) {
      this._setup_async_loaded();
    }
  },

  _setup_async_loaded () {
    setTimeout(() => {
      // Emulated google.maps script is loaded async.
      this.setState({googleMapsApi: google.maps});
    }, 3000);
  },

  _render (props, state) {
    var Component = props.componentClass;

    return <div className={props.className}>
      <Component className="col-xs-6" {...props.componentProps} {...state} />
      <div className="col-xs-6">
        <pre><PrismCode className="language-javascript">
          {props.componentRaw.__raw}
        </PrismCode></pre>
      </div>
    </div>;
  }
});
