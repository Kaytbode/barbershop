import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import Signup from '../Components/Signup';
import Login from '../Components/Login';
import DashBoardViewer from '../Views/dashboard';



function NavViewer(){
  return (
    <Router>
      <Navbar bg="light" fixed="top" expand="lg">
        <Navbar.Brand>Barber Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <Link className="Nav-link" to="/"> Home </Link>
              <Link className="Nav-link" to="/login"> Log in </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/users">
          <DashBoardViewer />
        </Route>
      </Switch>
    </Router>
  );
}

export default NavViewer;
