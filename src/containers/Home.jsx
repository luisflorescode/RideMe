import React from 'react';
import Vertical from '../layouts/Vertical';
import User from '../components/User';
import HomeOptions from '../components/HomeOptions';

const Home = () => (
  <Vertical>
    <User />
    <HomeOptions />
  </Vertical>
);

export default Home;
