/** @jsx React.DOM */
"use strict";
var React = require("react/addons");

var ChildMixin = require("./mixins/ChildMixin");
var EventBindingMixin = require("./mixins/EventBindingMixin");

module.exports = React.createClass({
  displayName: "Polygon",

  mixins: [ChildMixin, EventBindingMixin],

  getInitialState () {
    return {
      polygon: null
    };
  },

  componentDidMount () {
    var polygon = this._init_polygon();
    if (!polygon) return;
    this.add_listeners(polygon);
  },

  componentWillUpdate () {
    var {polygon} = this.state;
    if (!polygon) return;
    this.clear_listeners(polygon);
  },

  componentDidUpdate () {
    var polygon = this._init_polygon();
    if (!polygon) return;
    this.add_listeners(polygon);
    polygon.setOptions(this.props);
  },

  componentWillUnmount () {
    var {polygon} = this.state;
    if (!polygon) return;
    this.clear_listeners(polygon);
    polygon.setMap(null);
    this.setState({ polygon: null });
  },

  render () {
    return this._render(this.props, this.state);
  },

  get_event_names () {
    return "click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick";
  },

  _init_polygon () {
    var {context} = this;
    var {polygon} = this.state;
    if (polygon || !context.hasMap() || !context.getApi()) {
      return polygon;
    }
    var {Polygon} = context.getApi();
    polygon = new Polygon(this.props);
    polygon.setMap(context.getMap());

    this.expose_getters_from(Polygon.prototype, polygon);
    this.setState({ polygon });
    return polygon;
  },

  _render (props, state) {
    return null;
  }
});
