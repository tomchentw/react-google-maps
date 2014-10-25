/** @jsx React.DOM */
"use strict";
var React = require("react/addons");

var ChildMixin = require("./mixins/ChildMixin");
var EventBindingMixin = require("./mixins/EventBindingMixin");

module.exports = React.createClass({
  displayName: "Map",

  mixins: [ChildMixin, EventBindingMixin],

  contextTypes: {
    _set_map: React.PropTypes.func
  },

  componentDidMount () {
    var {context} = this;
    if (!context.getApi()) return;
    if (context.hasMap()) return;
    this.add_listeners(this._init_map());
  },

  componentWillUpdate () {
    var {context} = this;
    if (!context.getApi()) return;
    if (context.hasMap()) return;
    this.clear_listeners(context.getMap());
  },

  componentDidUpdate () {
    var {context} = this;
    if (!context.getApi()) return;
    if (context.hasMap()) {
      this.context.getMap().setOptions(this.props);
    } else {
      this.add_listeners(this._init_map());
    }
  },

  componentWillUnmount () {
    var {context} = this;
    if (!context.getApi()) return;
    if (context.hasMap()) return;
    this.clear_listeners(context.getMap());
  },

  render () {
    return this._render(this.props, this.state);
  },

  get_event_names () {
    return "bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed";
  },

  _init_map () {
    var {context} = this;
    var {Map} = context.getApi();
    var map = new Map(
      this.refs.mapCanvas.getDOMNode(),
      this.props
    );
    this.expose_getters_from(Map.prototype, map);
    return context._set_map(map);
  },

  _render (props, state) {
    return <div ref="mapCanvas" style={{width:"100%", height:400}} />;
  }
});
