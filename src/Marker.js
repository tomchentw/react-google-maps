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

  componentDidMount () {
    var marker = this._init_marker();
    if (!marker) return;
    this.add_listeners(marker);
  },

  componentWillUpdate () {
    var {marker} = this.state;
    if (!marker) return;
    this.clear_listeners(marker);
  },

  componentDidUpdate () {
    var marker = this._init_marker();
    if (!marker) return;
    this.add_listeners(marker);
    marker.setOptions(this.props);
  },

  componentWillUnmount () {
    var {marker} = this.state;
    if (!marker) return;
    this.clear_listeners(marker);
    marker.setMap(null);
  },

  render () {
    return this._render(this.props, this.state);
  },

  get_event_names () {
    return "animation_changed click clickable_changed cursor_changed dblclick drag dragend draggable_changed dragstart flat_changed icon_changed mousedown mouseout mouseover mouseup position_changed rightclick shape_changed title_changed visible_changed zindex_changed";
  },

  _init_marker () {
    var {context} = this;
    var {marker} = this.state;
    if (marker || !context.hasMap() || !context.getApi()) {
      return marker;
    }
    var {Marker} = context.getApi();
    marker = new Marker(this.props);
    marker.setMap(context.getMap());

    this.expose_getters_from(Marker.prototype, marker);
    this.setState({ marker });
    return marker;
  },

  _render (props, state) {
    return (props.children)? props.children : null;
  }
});
