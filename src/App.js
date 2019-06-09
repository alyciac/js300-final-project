import React from 'react';
import './App.css';
import SignUp from './SignUpForm';
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
              <Link className="nav-link" to="/users">Gardner Profiles</Link>
            </Nav>
            <Nav>
              <Link className="nav-link" to="/">Sign Up</Link>
            </Nav>
      </Navbar>
      </header>
      <div className='body'>
          <Route exact path="/" component={SignUp} />
          <Route path="/users" component={UserComponent} />
      </div>
    </Router>
    </div>
  );
}

export default App;
