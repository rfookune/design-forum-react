import React, { Component } from 'react';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';


class HomeCarousel extends Component {
  constructor(props, context) {
		super(props, context);

		this.state = {
			items: [
        <div key={1} className="item">
          <div className="owl-slide" style={{backgroundImage: "url(/img/img02.jpg)"}}>
            <div className="owl--text-container">
              <div className="owl--text">
                <h1 className="owl--header">Design Forum</h1>
                <p className="owl--sub-header">Private architecture firm based in Mauritius.</p>
              </div>
            </div>
          </div>
        </div>,
        <div key={2} className="item">
          <div className="owl-slide" style={{backgroundImage: "url(/img/img01.jpg)"}}>
          </div>
        </div>,
        <div key={3} className="item">
          <div className="owl-slide" style={{backgroundImage: "url(/img/img03.jpg)"}}>
          </div>
        </div>,
        <div key={4} className="item">
          <div className="owl-slide" style={{backgroundImage: "url(/img/img04.jpg)"}}>
          </div>
        </div>,
        <div key={5} className="item">
          <div className="owl-slide" style={{backgroundImage: "url(/img/img05.jpg)"}}>
          </div>
        </div>,
        <div key={6} className="item">
          <div className="owl-slide" style={{backgroundImage: "url(/img/img06.jpg)"}}>
          </div>
        </div>,
			],

			navigation : false, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem : true,
			autoPlay : false,
		};
	}


  render() {
    return (
      <div className="carousel-container">
        <OwlCarousel
          ref="homeCarousel"
          navigation={this.state.navigation}
          slideSpeed={this.state.slideSpeed}
          paginationSpeed={this.state.paginationSpeed}
          singleItem={this.state.singleItem}
          autoPlay={this.state.autoPlay}
        >
          {this.state.items}
        </OwlCarousel>

        <div className="owl--nav">
          
          <a href="#" 
            className="owl--btn owl--prev" 
            onClick={(e) => {
              e.preventDefault(); 
              this.refs.homeCarousel.prev()
            }}>
            <span className="zmdi zmdi-chevron-left"></span>
          </a>

          <a href="#" 
            className="owl--btn owl--next" 
            onClick={(e) => {
              e.preventDefault(); 
              this.refs.homeCarousel.next()
            }}>
            <span className="zmdi zmdi-chevron-right"></span>
          </a>
          
        </div>
      </div>
    );
  }
}

$(document).ready(function() {

});


export default HomeCarousel;
