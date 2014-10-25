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
    var {marker} = this.state;
    if (this.invalid_context(marker)) return;
    marker = this._init_marker();
    this.add_listeners(marker);
  },

  componentWillUpdate () {
    var {marker} = this.state;
    if (this.invalid_context(marker)) return;
    this.clear_listeners(marker);
  },

  componentDidUpdate () {
    var {marker} = this.state;
    if (this.invalid_context(marker)) return;
    marker = this._init_marker();
    this.add_listeners(marker);
  },

  componentWillUnmount () {
    var {marker} = this.state;
    if (this.invalid_context(marker)) return;
    this.clear_listeners(marker);
  },

  render () {
    return this._render(this.props, this.state);
  },

  _init_marker () {
    var {context} = this;
    if (this.state.marker || !context.hasMap() || !context.getApi()) {
      return;
    }
    var {Marker} = context.getApi();
    var marker = new Marker(this.props);
    marker.setMap(context.getMap());

    this.setState({ marker });
    return marker;
  },

  _render (props, state) {
    return null;
  }
});
