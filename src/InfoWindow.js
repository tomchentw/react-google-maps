"use strict";
var React = require("react/addons");

var ChildMixin = require("./mixins/ChildMixin");
var EventBindingMixin = require("./mixins/EventBindingMixin");

module.exports = React.createClass({
  displayName: "InfoWindow",

  mixins: [ChildMixin, EventBindingMixin],

  getInitialState () {
    return {
      infowindow: null
    };
  },

  componentDidMount () {
    var infowindow = this._init_infowindow();
    if (!infowindow) return;
    this.add_listeners(infowindow);
  },

  componentWillUpdate () {
    var {infowindow} = this.state;
    if (!infowindow) return;
    this.clear_listeners(infowindow);
  },

  componentDidUpdate () {
    var infowindow = this._init_infowindow();
    if (!infowindow) return;
    this.add_listeners(infowindow);
    infowindow.setOptions(this.props);
  },

  componentWillUnmount () {
    var {infowindow} = this.state;
    if(!infowindow) return;
    this.clear_listeners(infowindow);
    this.setState({ infowindow: null });
  },

  render () {
    return this._render(this.props, this.state);
  },

  get_event_names () {
    return "click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick";
  },

  _init_infowindow () {
    var {context} = this;
    var {infowindow} = this.state;
    if(infowindow || !context.hasMap() || !context.getApi()) {
      return infowindow;
    }
    var {InfoWindow} = context.getApi();
    if (this.props.owner) {
      var {marker} = context.getRef(this.props.owner).state;
    }
    infowindow = new InfoWindow(this.props);
    infowindow.open(context.getMap(), marker);
    this.expose_getters_from(InfoWindow.prototype, infowindow);
    this.setState({ infowindow });
    return infowindow;
  },

  _render (props, state) {
    return null;
  }
});
