"use strict";

module.exports = function (EVENT_MAP) {
  return {
    add_listeners (instance) {
      var {event} = this.context.getApi(),
          {_event_handles} = this.state;
      if (_event_handles) {
        return;
      }

      _event_handles = EVENT_MAP.__keys__.map((eventName) => {
        return event.addListener(instance, EVENT_MAP[eventName], this[eventName]);
      });
      this.setState({ _event_handles });
    },

    clear_listeners (instance) {
      var {event} = this.context.getApi(),
          {_event_handles} = this.state;
      if (!_event_handles) {
        return;
      }
      _event_handles.map(event.removeListener, event);
    },
  };
};
