import React, { Component } from 'react';
import Gallery from '../components/Gallery';

class Project extends Component {
  render() {
    const slug = this.props.match.params.project;
    return (
      <div className="Project">
        <div className="app-padding">
          {/* <h1>This is a project called: {slug}</h1> */}

          

          <div className="standard_container image_container">
            <img src="/img/sketch-1.png"/>
          </div>

          <div className="standard_container text-center">
            <div className="section--wrapper">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                  <br/>
                </div>
                <div className="col-md-10 col-md-offset-1">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="standard_container text-center">
            <div className="section--border">
              <div className="section--wrapper mt-0 mb-0">
                  <Gallery/>
              </div>
            </div>
          </div>

          <div className="standard_container text-center">
            <div className="section--wrapper">

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Project;
