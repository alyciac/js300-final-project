import React from 'react';
import './App.css';
import SignUp from './SignUpForm';
import SignIn from './SignInForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserComponent from './User';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <div className="App">
    <Router>
      <header>
      <Navbar bg="light" variant="light">
            <Navbar.Brand><Link to="/">TurnipSwap</Link></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link><Link to="/users">Gardner Profiles</Link></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link><Link to="/log-in">Log In</Link></Nav.Link>
              <Nav.Link><Link to="/">Sign Up</Link></Nav.Link>
            </Nav>
      </Navbar>
      </header>
      <div className='body'>
          <Route exact path="/" component={SignUp} />
          <Route path="/log-in" component={SignIn} />
          <Route path="/users" component={UserComponent} />
      </div>
    </Router>
    </div>
  );
}

export default App;
