import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import CreateService from '../Components/Createservice';
import Login from '../Components/Login';


function DashBoardViewer(props){
  return (
    <Router>
      <Navbar bg="light" fixed="top" expand="lg">
        <Navbar.Brand>{props.email}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <Link className="Nav-link" to="/services/current"> Start Service </Link>
              <Link className="Nav-link" to="/services/done"> View Services </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/services/current">
          <CreateService email={props.email}/>
        </Route>
        <Route path="/services/done">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default DashBoardViewer;
