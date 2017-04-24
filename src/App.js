import React, { Component } from 'react';
import {BrowserRouter as Router, Route, hashHistory } from 'react-router-dom'

import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './app.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation path={this.props.location.pathname}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>
      </div>
    );
  }
}

export default App;
