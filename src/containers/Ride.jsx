import React from 'react';
import Vertical from '../layouts/Vertical';
import User from '../components/User';
import GoogleApiWrapper from '../components/HomeMap';

const Ride = () => (
  <div className='verticalContent'>
    <Vertical>
      <User />
    </Vertical>
    <GoogleApiWrapper />
  </div>
);

export default Ride;
