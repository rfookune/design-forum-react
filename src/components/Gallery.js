import React, { Component } from 'react';
import 'lightbox2';

class Gallery extends Component {

  render() {
    return (
      <div className="Gallery">
        {/* <h1>Gallery</h1> */}
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <a href="/img/gallery/img1.jpg" data-lightbox="gallery1">
              <div className="lightbox--thumbnail" style={{backgroundImage: "url(/img/gallery/img1.jpg)"}}>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="/img/gallery/img2.jpg" data-lightbox="gallery1">
              <div className="lightbox--thumbnail" style={{backgroundImage: "url(/img/gallery/img2.jpg)"}}>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="/img/gallery/img3.jpg" data-lightbox="gallery1">
              <div className="lightbox--thumbnail" style={{backgroundImage: "url(/img/gallery/img3.jpg)"}}>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="/img/gallery/img4.jpg" data-lightbox="gallery1">
              <div className="lightbox--thumbnail" style={{backgroundImage: "url(/img/gallery/img4.jpg)"}}>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="/img/gallery/img5.jpg" data-lightbox="gallery1">
              <div className="lightbox--thumbnail" style={{backgroundImage: "url(/img/gallery/img5.jpg)"}}>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="/img/gallery/img6.jpg" data-lightbox="gallery1">
              <div className="lightbox--thumbnail" style={{backgroundImage: "url(/img/gallery/img6.jpg)"}}>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="/img/gallery/img7.jpg" data-lightbox="gallery1">
              <div className="lightbox--thumbnail" style={{backgroundImage: "url(/img/gallery/img7.jpg)"}}>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="/img/gallery/img8.jpg" data-lightbox="gallery1">
              <div className="lightbox--thumbnail" style={{backgroundImage: "url(/img/gallery/img8.jpg)"}}>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="/img/gallery/img9.jpg" data-lightbox="gallery1">
              <div className="lightbox--thumbnail" style={{backgroundImage: "url(/img/gallery/img9.jpg)"}}>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="/img/gallery/img10.jpg" data-lightbox="gallery1">
              <div className="lightbox--thumbnail" style={{backgroundImage: "url(/img/gallery/img10.jpg)"}}>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="/img/gallery/img11.jpg" data-lightbox="gallery1">
              <div className="lightbox--thumbnail" style={{backgroundImage: "url(/img/gallery/img11.jpg)"}}>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="/img/gallery/img12.jpg" data-lightbox="gallery1">
              <div className="lightbox--thumbnail" style={{backgroundImage: "url(/img/gallery/img12.jpg)"}}>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
