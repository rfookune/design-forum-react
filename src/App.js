import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation/>
          <div className="link-test">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
