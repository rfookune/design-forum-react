import React, { Component } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
// import mapStylesLight from "../constants/mapStylesLight.json";
import mapStylesDark from "../constants/mapStylesDark.json";

class Map extends Component {
  render() {

    const mapContainer = <div style={{height:'100%', width: '100%'}}></div>

    const markers = this.props.markers.map((venue, i) => {
      const marker = {
        position: {
          lat: venue.location.lat,
          lng: venue.location.lng
        }
      }

      return <Marker key={i} {...marker}/>
    })

    return (
      <GoogleMapLoader
        containerElement={ mapContainer }
        googleMapElement={
          <GoogleMap
            defaultZoom={15}
            defaultCenter={this.props.center}
            options={{
              streetViewControl: false,
              mapTypeControl: false,
              scrollwheel: false,
              styles: mapStylesDark
            }}
          >
            { markers }
          </GoogleMap>
        }
      />
    );
  }
}

export default Map;
