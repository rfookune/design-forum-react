import React, { Component } from 'react';

class ComingSoon extends Component {
  render() {
    return (
      <div className="ComingSoon">
        <div className="fullscreen--container">
          <div className="fullscreen--content">
            <div className="col-md-6 col-md-offset-3">
              <div className="panel--container text-center">
                <div className="panel--outer">
                  <div className="panel--inner">
                    <h2 className="panel--title">We hand-craft create design & layout for photographer</h2>
                    <p>A gray cat slinks past a wooden house. There’s something a little intimidating attempting to describe</p>
                    <br/>
                    <a href="/contact" className="btn btn-default">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComingSoon;
