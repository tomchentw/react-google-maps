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
    var {polygon} = this.state;
    if (polygon || !this.context.hasMap()) return;
    this.add_listeners(this._init_polygon());
  },

  componentWillUpdate () {
    var {polygon} = this.state;
    if (polygon || !this.context.hasMap()) return;
    this.clear_listeners(polygon);
  },

  componentDidUpdate () {
    var {polygon} = this.state;
    if (!this.context.hasMap()) return;
    if (polygon) {
      polygon.setOptions(this.props);
    } else {
      this.add_listeners(this._init_polygon());
    }
  },

  componentWillUnmount () {
    var {polygon} = this.state;
    if (polygon || !this.context.hasMap()) return;
    this.clear_listeners(polygon);
  },

  render () {
    return this._render(this.props, this.state);
  },

  get_event_names () {
    return "click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick";
  },

  _init_polygon () {
    var {context} = this;
    if (this.state.polygon || !context.hasMap() || !context.getApi()) {
      return;
    }
    var {Polygon} = context.getApi();
    var polygon = new Polygon(this.props);
    polygon.setMap(context.getMap());

    this.expose_getters_from(Polygon.prototype, polygon);
    this.setState({ polygon });
    return polygon;
  },

  _render (props, state) {
    return null;
  }
});
