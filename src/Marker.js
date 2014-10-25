/** @jsx React.DOM */
"use strict";
var React = require("react/addons");

var ChildMixin = require("./mixins/ChildMixin");
var EventBindingMixin = require("./mixins/EventBindingMixin");

module.exports = React.createClass({
  displayName: "Marker",

  mixins: [ChildMixin, EventBindingMixin],

  getInitialState () {
    return {
      marker: null
    };
  },

  contextTypes: {
    getMap: React.PropTypes.func,
    getApi: React.PropTypes.func,
    hasMap: React.PropTypes.func,
  },

  componentDidMount () {
    if (this.invalid_context(this.state.marker)) return;
    this._init_marker(this.context);
    this.add_listeners(this.state.marker);
  },

  componentWillUpdate () {
    if (this.invalid_context(this.state.marker)) return;
    this.clear_listeners(this.state.marker);
  },

  componentDidUpdate () {
    if (this.invalid_context(this.state.marker)) return;
    this._init_marker(this.context);
    this.add_listeners(this.state.marker);
  },

  componentWillUnmount () {
    if (this.invalid_context(this.state.marker)) return;
    this.clear_listeners(this.state.marker);
  },

  render () {
    return this._render(this.props, this.state);
  },

  _init_marker (context) {
    if (this.state.marker || !context.hasMap() || !context.getApi()) {
      return;
    }
    var {Marker} = context.getApi();
    var marker = new Marker(this.props);
    marker.setMap(context.getMap());

    this.setState({ marker });
  },

  _render (props, state) {
    return null;
  }
});
