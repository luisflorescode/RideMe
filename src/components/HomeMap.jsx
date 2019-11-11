import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import pin from '../assets/static/pin.png';

const containerStyle = {
  height: '100%',
  width: '75%',
};

let currentLat;
let currentLng;

function setPosition(position) {
  currentLat = position.coords.latitude;
  currentLng = position.coords.longitude;
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(setPosition);
}

export class HomeMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: currentLat,
        lng: currentLng,
      },
    };
  }

  render() {
    const { currentLocation } = this.state;
    const { google } = this.props;

    return (
      <Map
        google={google}
        containerStyle={containerStyle}
        zoom={16}
        initialCenter={currentLocation}
      >
        <Marker
          position={currentLocation}
          icon={pin}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(HomeMap);
