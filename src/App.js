import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import EventPage from './pages/event-page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/event-page">Event Page</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<div><h1>Home Page</h1><p>Welcome to the home page.</p></div>} />
        <Route path="/event-page" element={<EventPage />} />
      </Routes>
    </div>
  );
}

export default App;
