"use strict";

var React = require("react/addons"),
    {update} = React.addons;

module.exports = React.createClass({
  displayName: "NavHeaderBar",

  mixins: [require("./ReactFutureMixin")],

  _render (props, state) {
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
            <li className="active"><a href="">Getting started</a></li>
          </ul>
        </div>
      </div>
    </nav>;
  }
});
