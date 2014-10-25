/** @jsx React.DOM */
"use strict";
var React = require("react/addons");

var ChildMixin = require("./mixins/ChildMixin");
var EventBindingMixin = require("./mixins/EventBindingMixin");

module.exports = React.createClass({
  displayName: "Map",

  mixins: [ChildMixin, EventBindingMixin],

  contextTypes: {
    getMap: React.PropTypes.func,
    _set_map: React.PropTypes.func
  },

  componentDidMount () {
    if (this.invalid_context(true)) return;
    this.add_listeners(this._init_map());
  },

  componentWillUpdate () {
    if (this.invalid_context(true)) return;
    this.clear_listeners(this.context.getMap());
  },

  componentDidUpdate () {
    if (this.invalid_context(true)) return;
    this.add_listeners(this._init_map());
  },

  componentWillUnmount () {
    if (this.invalid_context(true)) return;
    this.clear_listeners(this.context.getMap());
  },

  render () {
    return this._render(this.props, this.state);
  },

  _init_map () {
    var {context} = this;
    var {Map} = context.getApi();
    return context._set_map(
      new Map(
        this.refs.mapCanvas.getDOMNode(),
        this.props
      )
    );
  },

  _render (props, state) {
    return <div ref="mapCanvas" style={{width:"100%", height:400}} />;
  }
});
