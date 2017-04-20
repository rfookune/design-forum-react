import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {navOpen: false};
    // This binding is necessary to make `this` work in the callback
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav(event) {
    event.preventDefault();
    this.setState(prevState => ({
      navOpen: true
    }));
  }

  closeNav(event, preventEvent) {
    if (preventEvent) {
      event.preventDefault();
    }
    
    this.setState(prevState => ({
      navOpen: false
    }));
  }

  render() {
    return (
      <div className="nav-container">
        <div className="navbar--wrapper">
          <div className="standard_container">
            <div className="navbar--brand">
              <img className="navbar--logo logo-dark" src="/img/logo.png" alt="logo"></img>
              <img className="navbar--logo logo-light" src="/img/logo_white.png" alt="logo"></img>
              designForum.<i>architects</i>
            </div>
            <a className="nav-open-btn" href="#" onClick={this.openNav}>
              <i className="zmdi zmdi-menu"></i>
            </a>
          </div>
        </div>

        <div className={this.state.navOpen ? 'overlay open' : 'overlay'}>
          <a href="#" className="nav-close-btn" onClick={(e) => {this.closeNav(e, true)}}><i className="zmdi zmdi-close"></i></a>
          <div className="overlay-content">
            <img className="overlay--logo" src="/img/logo_white.png" alt="logo"></img>
            <ul className="nav--items">
              <li><Link to="/" onClick={this.closeNav}>Home</Link></li>
              <li><Link to="/about" onClick={this.closeNav}>About</Link></li>
              <li><Link to="/projects" onClick={this.closeNav}>Projects</Link></li>
              <li><Link to="/contact" onClick={this.closeNav}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
