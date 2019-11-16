import React from 'react';
import Vertical from '../layouts/Vertical';
import User from '../components/User';
import GoogleApiWrapper from '../components/HomeMap';
import Origin from '../components/Origin';
import Destiny from '../components/Destiny';

const Ride = () => (
  <div className='verticalContent'>
    <Vertical>
      <User />
      <Origin />
      <Destiny />
    </Vertical>
    <GoogleApiWrapper />
  </div>
);

export default Ride;
