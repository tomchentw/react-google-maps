/** @jsx React.DOM */
"use strict";
var React = require("react/addons");

var ChildMixin = require("./mixins/ChildMixin");
var EventBindingMixin = require("./mixins/EventBindingMixin");

module.exports = React.createClass({
  displayName: "Polyline",

  mixins: [ChildMixin, EventBindingMixin],

  getInitialState () {
    return {
      polyline: null
    };
  },

  componentDidMount () {
    var polyline = this._init_polyline();
    if (!polyline) return;
    this.add_listeners(polyline);
  },

  componentWillUpdate () {
    var {polyline} = this.state;
    if (!polyline) return;
    this.clear_listeners(polyline);
  },

  componentDidUpdate () {
    var polyline = this._init_polyline();
    if (!polyline) return;
    this.add_listeners(polyline);
    polyline.setOptions(this.props);
  },

  componentWillUnmount () {
    var {polyline} = this.state;
    if (!polyline) return;
    this.clear_listeners(polyline);
    polyline.setMap(null);
    this.setState({ polyline: null });
  },

  render () {
    return this._render(this.props, this.state);
  },

  get_event_names () {
    return "click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick";
  },

  _init_polyline () {
    var {context} = this;
    var {polyline} = this.state;
    if (polyline || !context.hasMap() || !context.getApi()) {
      return polyline;
    }
    var {Polyline} = context.getApi();
    polyline = new Polyline(this.props);
    polyline.setMap(context.getMap());

    this.expose_getters_from(Polyline.prototype, polyline);
    this.setState({ polyline });
    return polyline;
  },

  _render (props, state) {
    return null;
  }
});
