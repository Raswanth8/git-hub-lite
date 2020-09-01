import React from 'react';

import Logo from './logo1.png';
import './App.css';
import Profile from './profile.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
      </header>
      <br></br>
      <Profile/>
    </div>
  );
}

export default App;
