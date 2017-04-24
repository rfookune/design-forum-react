import React, { Component } from 'react';
import mixitup from 'mixitup';
import $ from 'jquery';


class ProjectMixItUp extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    var mixer = mixitup('.mixer-container');
  }

  handleClick(slug) {
    window.location = "/projects/"+slug;
  }

  render() {
    return (
      <div className="ProjectMixItUp">

        <ul className="filters">
          <li><span data-filter="all">All</span></li>
          <li><span data-filter=".category-a">Category A</span></li>
          <li><span data-filter=".category-b">Category B</span></li>
          <li><span  data-filter=".category-c">Category C</span></li>
        </ul>

        <div className="mixer-container">
          <div className="row">
            <div className="mix category-a col-md-6" data-order="1">
              <div className="mix--container">
                <div className="mix--picture">
                  <div className="mix--overlay"><div className="overlay--icon"><i className="zmdi zmdi-mail-reply"></i></div></div>
                </div>
                <div className="mix--content">
                  <p className="mix--title">Silver Tower Center</p>
                </div>
              </div>
            </div>
            <div className="mix category-b col-md-6" data-order="2">
              <div className="mix--container">
                <div className="mix--picture">
                  <div className="mix--overlay"><div className="overlay--icon"><i className="zmdi zmdi-mail-reply"></i></div></div>
                </div>
                <div className="mix--content">
                  <p className="mix--title">Silver Tower Center</p>
                </div>
              </div>
            </div>
            <div className="mix category-b category-c col-md-6" data-order="3">
              <div className="mix--container">
                <div className="mix--picture">
                  <div className="mix--overlay"><div className="overlay--icon"><i className="zmdi zmdi-mail-reply"></i></div></div>
                </div>
                <div className="mix--content">
                  <p className="mix--title">Silver Tower Center</p>
                </div>
              </div>
            </div>
            <div className="mix category-a category-d col-md-6" data-order="4">
              <div className="mix--container">
                <div className="mix--picture">
                  <div className="mix--overlay"><div className="overlay--icon"><i className="zmdi zmdi-mail-reply"></i></div></div>
                </div>
                <div className="mix--content">
                  <p className="mix--title">Silver Tower Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectMixItUp;
