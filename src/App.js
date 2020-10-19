import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Navbar, Nav, Container} from "react-bootstrap";
import "./App.css";

import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Portfolio",
        subTitle: "My Projects",
        subSubText: "Here is a list of my projects. Click on the project image to access a drop down that includes: a title, brief description, and a 'View' link to the project",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Contact Me",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand> Allison Barnard </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggler">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                subSubText={this.state.home.subSubText}
              />
            )}
          />
          <Route
            path="/about"
            render={() => <About title={this.state.about.title} />}
          />
          <Route
            path="/contact"
            render={() => <Contact title={this.state.contact.title} />}
          />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
