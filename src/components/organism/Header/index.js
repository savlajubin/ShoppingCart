import React from "react";
import { Navbar, Nav, NavItem, Container } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar>
        <Container fluid>
          <Nav navbar>
            <NavItem className="logo-nav align-self-center">
              <img src="logo" alt="logo" />
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
