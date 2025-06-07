import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/RegisterPage/RegisterPage';

import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Geostride Logo" />
          <h1 className="App-title">GEOSTRIDE</h1>
          <div className="Navbar">
            <nav>
              <Link to="/login">
                <Button text="Log in" variant="primary" />
              </Link>
              <Link to="/register">
                <Button text="Sign up" variant="secondary" />
              </Link>
            </nav>
          </div>
        </header>

        <main className="App-main">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUpPage />} />
          </Routes>
        </main>

        <footer className="App-footer">
          <p>&copy; {new Date().getFullYear()} GEOSTRIDE. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;