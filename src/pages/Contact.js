import React, { Component } from 'react';
import Map from '../components/Map';

class Contact extends Component {
  render() {
    const location = {
      lat: -20.2654481,
      lng: 57.4804741
    }

    const markers = [
      {
        location: {
          lat: -20.2654481,
          lng: 57.4804741
        }
      }
    ]

    return (
      <div className="Contact">
        <div className="app-padding">

          <div className="standard_container">
            <div className="section--wrapper">
              <div className="section--title">
                <div className="row">
                  <div className="col-sm-8">
                    <h1>Feel Free to drop us an email. Let us work together</h1>
                  </div>
                  <div className="col-sm-6">
                    <div className="section--tagline">
                      We are experienced and well established  WordPress theme  developer for more than 5 years. We are one of the best support author on the market.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='map--container' style={{width: '100%', height: '400px', marginTop: '100px'}}>
            <Map center={location} markers={markers}/>
          </div>

        </div>
      </div>
    );
  }
}

export default Contact;
