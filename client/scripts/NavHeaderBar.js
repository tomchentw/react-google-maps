"use strict";

var React = require("react/addons"),
    {PropTypes} = React,
    {update} = React.addons,
    cx = React.addons.classSet,

    actionPropType = PropTypes.shape({
        key: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
      });

module.exports = React.createClass({
  displayName: "NavHeaderBar",

  mixins: [require("./ReactFutureMixin")],

  propTypes: {
    activeActionKey: PropTypes.string.isRequired,
    actions: PropTypes.arrayOf(actionPropType).isRequired,
    dropdownActions: PropTypes.arrayOf(
        PropTypes.oneOfType([actionPropType, PropTypes.bool])
      ),
  },

  getInitialState: function() {
    return {
      dropdownOpen: false,
    };
  },

  _handle_click () {
    this.setState({dropdownOpen: !this.state.dropdownOpen});
  },

  _render (props, state) {
    var {activeActionKey} = props,
        dropdownClassSet = {dropdown: true};
    dropdownClassSet.open = state.dropdownOpen;

    return <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">React Google Maps</a>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="https://github.com/tomchentw" target="_blank">by @tomchentw</a></li>
            {props.actions.map(actionToMenuItem)}
            <li className={cx(dropdownClassSet)}>
              <a href="#" className="dropdown-toggle" onClick={this._handle_click}>Samples <span className="caret"></span></a>
              <ul className="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li className="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li className="divider"></li>
                <li><a href="#"></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>;

    function actionToMenuItem (action) {
      var classSet = {};
      classSet.active = activeActionKey === action.key;

      return <li key={action.key} className={cx(classSet)}>
        <a href={action.path}>{action.displayName}</a>
      </li>;
    }
  }
});
