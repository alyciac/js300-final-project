import React from 'react';
import './App.css';
import SignUp from './SignUpForm';
import SignIn from './SignInForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p className="logo">TurnipSwap</p>
      </header>
      <div className='body'>
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    </div>
  );
}

export default App;
