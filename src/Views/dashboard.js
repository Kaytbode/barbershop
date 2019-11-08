import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import CreateService from '../Components/Createservice';
import CurrentService from '../Components/Currentservice';
import Login from '../Components/Login';


function DashBoardViewer (props){
  const { email } = props.location.state;
    return (
      <Router>
        <Navbar bg="light" fixed="top" expand="lg">
          <Navbar.Brand>{ email }</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link className="Nav-link" to="/users/new"> Create New </Link>
                <Link className="Nav-link" to="/users/current"> Current Service </Link>
                <Link className="Nav-link" to="/users/history"> Job History </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/users/new">
            <CreateService email= { email } />
          </Route>
          <Route exact path="/users/current">
            <CurrentService />
          </Route>
          <Route path="/users/history">
            <Login />
          </Route>
        </Switch>
      </Router>
    );
}

export default withRouter(DashBoardViewer);
