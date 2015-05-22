import React from "react";

const {PropTypes} = React;

function noop () {
}

class EventComponent extends React.Component {
  /* Contract
   *  statics:
   *    _registerEvents:
   *  member:
   *    _createOrUpdateInstance
   */
  constructor (...args) {
    super(...args);

    this._unregisterEvents = noop;
  }

  componentDidMount () {
    const instance = this._createOrUpdateInstance();
    if (!instance) {
      return;
    }
    this._add_listeners_(instance);
  }

  componentDidUpdate () {
    const instance = this._createOrUpdateInstance();
    if (!instance) {
      return;
    }
    this._unregisterEvents();
    this._add_listeners_(instance);
  }

  componentWillUnmount () {
    const {instance} = this.state;
    if (!instance) {
      return;
    }
    this._unregisterEvents();
  }

  _add_listeners_ (instance) {
    const {event} = this.props.googleMapsApi;
    const {_registerEvents} = this.constructor;

    this._unregisterEvents = _registerEvents(event, instance, this.props);
  }

}

EventComponent.propTypes = {
  googleMapsApi: PropTypes.object,
};

export default EventComponent;
