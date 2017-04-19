import React, { Component } from 'react';

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

  closeNav(event) {
    event.preventDefault();
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
          <a href="#" className="nav-close-btn" onClick={this.closeNav}><i className="zmdi zmdi-close"></i></a>
          <div className="overlay-content">
            <img className="overlay--logo" src="/img/logo_white.png" alt="logo"></img>
            <ul className="nav--items">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/project">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
