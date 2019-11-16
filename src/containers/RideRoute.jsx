import React from 'react';
import Vertical from '../layouts/Vertical';
import User from '../components/User';
import { withScriptjs } from 'react-google-maps';
import Origin from '../components/Origin';
import Destiny from '../components/Destiny';
import RouteMap from '../components/RouteMap';

const RideRoute = () => {
  const MapLoader = withScriptjs(RouteMap);

  return (
    <div className='verticalContent'>
      <Vertical>
        <User />
      </Vertical>
      <MapLoader
        googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
        loadingElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default RideRoute;
