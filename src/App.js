import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import {Route, Link } from 'react-router-dom'
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
