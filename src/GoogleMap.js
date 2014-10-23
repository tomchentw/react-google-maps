/** @jsx React.DOM */
"use strict";
var React = require("react/addons");

var mapsNullObject = {

};

var EVENT_MAP = {};
var EVENT_LIST = "bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed"
                  .split(" ")
                  .map(toEventList, EVENT_MAP);

function toEventList (name) {
  var eventName = toEventName(name);
  this[eventName] = name;
  return eventName;
}

function toEventName(name) {
  return `on${ name
    .replace(/^(.)/, groupToUpperCase)
    .replace(/_(.)/g, groupToUpperCase) }`;
}

function groupToUpperCase (match, group) {
  return group.toUpperCase();
}

module.exports = React.createClass({
  displayName: "GoogleMap",

  getDefaultProps () {
    return {
      mapOptions: {}
    };
  },

  getInitialState () {
    return {
      googleMapsApi: this.props.googleMapsApi || mapsNullObject,
      map: null,
      eventNames: []
    };
  },

  componentWillMount () {
    this.setState({
      eventNames: this._collect_event_names(this.props)
    });
  },

  componentWillReceiveProps (nextProps) {
    var {googleMapsApi} = nextProps;
    var newState = {};

    if (mapsNullObject !== googleMapsApi) {
      newState.googleMapsApi = googleMapsApi;
    }
    newState.eventNames = this._collect_event_names(nextProps);
    this.setState(newState);
  },

  componentDidMount () {
    this._init_google_maps(this.state.googleMapsApi);
  },

  componentDidUpdate () {
    this._init_google_maps(this.state.googleMapsApi);
  },

  componentWillUnmount () {
    var {googleMapsApi, map} = this.state;
    this._clear_listeners(googleMapsApi, map);
  },

  render () {
    return this._render(this.props, this.state);
  },

  _init_google_maps (googleMapsApi) {
    if (mapsNullObject === googleMapsApi) { return; }
    var {map, eventNames} = this.state;
    if (!map) {
      map = new googleMapsApi.Map(
        this.refs.mapCanvas.getDOMNode(),
        this.props.mapOptions
      );
      this.setState({ map });
    }
    this._clear_listeners(googleMapsApi, map);
    eventNames.forEach((eventName) => {
      var name = EVENT_MAP[eventName];
      googleMapsApi.event.addListener(map, name, this.props[eventName]);
    });
  },

  _collect_event_names (props) {
    return EVENT_LIST.filter((eventName) => {
      return eventName in props;
    });
  },

  _clear_listeners (googleMapsApi, map) {
    googleMapsApi.event.clearInstanceListeners(map);
  },

  _render (props, state) {
    return <div ref="mapCanvas" style={{width:"100%", height:400}} />;
  }
});
