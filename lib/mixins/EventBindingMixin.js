"use strict";

module.exports = function (EVENT_MAP) {
  return {
    add_listeners:function (instance) {
      var $__0=  this.context.getApi(),event=$__0.event,
          $__1=  this.state,_event_handles=$__1._event_handles;
      if (_event_handles) {
        return;
      }

      _event_handles = EVENT_MAP.__keys__.map(function(eventName)  {
        return event.addListener(instance, EVENT_MAP[eventName], this[eventName]);
      }.bind(this));
      this.setState({ _event_handles:_event_handles });
    },

    clear_listeners:function (instance) {
      var $__0=  this.context.getApi(),event=$__0.event,
          $__1=  this.state,_event_handles=$__1._event_handles;
      if (!_event_handles) {
        return;
      }
      _event_handles.map(event.removeListener, event);
    },
  };
};
