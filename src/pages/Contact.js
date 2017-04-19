import React, { Component } from 'react';
import Map from '../components/Map';

class Contact extends Component {
  render() {
    const location = {
      lat: -20.265165,
      lng: 57.481849
    }

    const markers = [
      {
        location: {
          lat: -20.265165,
          lng: 57.481849
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

          <div className='map--container' style={{width: '100%', height: '400px'}}>
            <Map center={location} markers={markers}/>
          </div>

          <div className="standard_container">
	      		<div className="section--wrapper">
	      			<div className="text--divider">
		      			<div className="row">
		      				<div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
		      					<div className="hr hr--short hr--icon"></div>
		        				<p>The strength of the team is each individual member. The strength of each member is the team.</p>
		        				<div className="hr hr--short"></div>
		        			</div>
		        		</div>
	        		</div>
              <div className="section--grid text-center section--contact">
                <div className="row">
                  <div className="col-sm-4">
                    <h3>Hours</h3>
                    <p>
                      Mon-Fri: 8:00-17:00 *, <br></br>
                      Sat-Sun: Closed <br></br>
                      <span className="small">*hours may be subject to change</span>
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <h3>Phone & Email</h3>
                    <p>
                      999 999 9999 <br></br>
                      aarc@intnet.com
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <h3>Location</h3>
                    <p>
                      Avenue Des Capucines,<br></br>
                      Quatre Bornes, Mauritius.
                    </p>
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

export default Contact;
