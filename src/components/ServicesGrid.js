import React, { Component } from 'react';

class ServicesGrid extends Component {
  render() {
    return (
      <div className="ServicesGrid services--container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 service" style={{backgroundImage: "url(/img/img01.jpg)"}}>
            <div className="service--inner">
              <p className="service--nbr">01</p>
              <h3>Brand Strategy, Identity & Advertising</h3>
              <div className="service--content">
                <hr/>
                <p> We drive commerce through brand culture and an understanding of user behavior. Our eCommerce strategies and digital platforms inspire people to invest in what a brand stands for. </p>
              </div>
              <a href="#" className="btn-fixed"><span className="icon-absolute zmdi zmdi-long-arrow-tab"></span><span className="zmdi zmdi-long-arrow-right"></span></a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 service" style={{backgroundImage: "url(/img/img02.jpg)"}}>
            <div className="service--inner">
              <p className="service--nbr">02</p>
              <h3>Brand Strategy, Identity & Advertising</h3>
              <div className="service--content">
                <hr/>
                <p> We drive commerce through brand culture and an understanding of user behavior. Our eCommerce strategies and digital platforms inspire people to invest in what a brand stands for. </p>
              </div>
              <a href="#" className="btn-fixed"><span className="icon-absolute zmdi zmdi-long-arrow-tab"></span><span className="zmdi zmdi-long-arrow-right"></span></a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 service" style={{backgroundImage: "url(/img/img03.jpg)"}}>
            <div className="service--inner">
              <p className="service--nbr">03</p>
              <h3>Brand Strategy, Identity & Advertising</h3>
              <div className="service--content">
                <hr/>
                <p> We drive commerce through brand culture and an understanding of user behavior. Our eCommerce strategies and digital platforms inspire people to invest in what a brand stands for. </p>
              </div>
              <a href="#" className="btn-fixed"><span className="icon-absolute zmdi zmdi-long-arrow-tab"></span><span className="zmdi zmdi-long-arrow-right"></span></a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 service" style={{backgroundImage: "url(/img/img04.jpg)"}}>
            <div className="service--inner">
              <p className="service--nbr">04</p>
              <h3>Brand Strategy, Identity & Advertising</h3>
              <div className="service--content">
                <hr/>
                <p> We drive commerce through brand culture and an understanding of user behavior. Our eCommerce strategies and digital platforms inspire people to invest in what a brand stands for. </p>
              </div>
              <a href="#" className="btn-fixed"><span className="icon-absolute zmdi zmdi-long-arrow-tab"></span><span className="zmdi zmdi-long-arrow-right"></span></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesGrid;
