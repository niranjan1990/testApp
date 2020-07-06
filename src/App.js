import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router } from "react-router-dom";
import Navigator from './Navigator';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Test App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/form">Form</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navigator />
      </div>
     
    </Router>
  );
}

export default App;
