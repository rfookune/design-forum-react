import React, { Component } from 'react';

class Project extends Component {
  render() {
    const slug = this.props.match.params.project;
    return (
      <div className="Project">
        <div className="app-padding">
          <h1>This is a project called: {slug}</h1>
        </div>
      </div>
    );
  }
}

export default Project;
