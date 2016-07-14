import {
  default as React,
  Component,
  PropTypes,
  Children,
} from "react";

import {
  Link,
} from "react-router";

import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";

import {
  LinkContainer,
} from "react-router-bootstrap";

import GitHubForkRibbon from "react-github-fork-ribbon";

import {
  ToastContainer,
  ToastMessage,
} from "react-toastr";

import {
  PrismCode,
} from "react-prism";

import Helmet from "react-helmet";

export default class Application extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  _handle_toast = this._handle_toast.bind(this);

  _handle_toast(title, message) {
    this.refs.toast.success(title, message);
  }

  render() {
    return (
      <div className="full-height">
        <Helmet
          titleTemplate="%s | React Google Maps | tomchentw"
          meta={[
            { name: `viewport`, content: `width=device-width, initial-scale=1` },
            { name: `description`, content: `react-google-maps example application` },
            { property: `og:type`, content: `article` },
          ]}
        />
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">React Google Maps</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem href="https://github.com/tomchentw" target="_blank">by @tomchentw</NavItem>
            <NavDropdown id="examples-dropdown" title="Examples">
              <LinkContainer to="/basics/simple-map"><MenuItem>Simple map</MenuItem></LinkContainer>
              <LinkContainer to="/basics/styled-map"><MenuItem>Styled map</MenuItem></LinkContainer>
              <LinkContainer to="/basics/geolocation"><MenuItem>Geolocation</MenuItem></LinkContainer>
              <LinkContainer to="/basics/directions"><MenuItem>Directions</MenuItem></LinkContainer>
              <LinkContainer to="/basics/overlay-view"><MenuItem>Overlay view</MenuItem></LinkContainer>
              <LinkContainer to="/basics/kml-layer"><MenuItem>KmlLayer</MenuItem></LinkContainer>
              <LinkContainer to="/basics/pop-up-window"><MenuItem>Pop-up InfoWindow</MenuItem></LinkContainer>
              <MenuItem divider />
              <LinkContainer to="/events/simple-click-event"><MenuItem>Simple click event</MenuItem></LinkContainer>
              <LinkContainer to="/events/closure-listeners">
                <MenuItem>
                  Using closures in event listeners
                </MenuItem>
              </LinkContainer>
              <LinkContainer to="/events/accessing-arguments">
                <MenuItem>
                  Accessing arguments in UI events
                </MenuItem>
              </LinkContainer>
              <LinkContainer to="/events/getting-properties">
                <MenuItem>
                  Getting properties with event handlers
                </MenuItem>
              </LinkContainer>
              <MenuItem divider />
              <LinkContainer to="/drawing/drawing-tools"><MenuItem>Drawing tools</MenuItem></LinkContainer>
              <MenuItem divider />
              <LinkContainer to="/places/search-box"><MenuItem>Adding a places search box</MenuItem></LinkContainer>
              <MenuItem divider />
              <LinkContainer to="/addons/marker-clusterer">
                <MenuItem>
                  Marker clusterer addon with Marker
                </MenuItem>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Navbar.Collapse style={{ marginRight: 100 }}>
            <Nav pullRight>
              <LinkContainer to="/async">
                <NavItem>Async example</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container-fluid full-height">
          <GitHubForkRibbon
            position="right"
            color="black"
            href="https://github.com/tomchentw/react-google-maps"
          >
            Fork me on GitHub
          </GitHubForkRibbon>
          <ToastContainer
            ref="toast"
            toastMessageFactory={React.createFactory(ToastMessage.animation)}
          />
          <div className="row full-height">
            <div className="col-xs-6" style={{ height: `100%` }}>
              {React.cloneElement(Children.only(this.props.children), {
                toast: this._handle_toast,
              })}
            </div>
            <div className="col-xs-6">
              <pre>
                <PrismCode className="language-javascript">
                  {Children.only(this.props.children).type.__raw}
                </PrismCode>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
