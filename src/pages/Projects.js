import React, { Component } from 'react';
import ProjectMixItUp from '../components/ProjectMixItUp';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <div className="app-padding">

          <div className="standard_container">
            <div className="section--wrapper">
              <div className="section--title">
                <div className="row">
                  <div className="col-sm-10">
                    <h1>Make a winning team Everybody are important</h1>
                  </div>
                </div>
                <ProjectMixItUp/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
