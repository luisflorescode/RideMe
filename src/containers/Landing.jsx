import React from 'react';

import Horizontal from '../layouts/Horizontal';
import Hero from '../components/Hero';
import Info from '../components/Info';

import '../assets/styles/containers/Landing.scss';

const Landing = () => (
  <Horizontal>
    <Hero />
    <Info />
  </Horizontal>
);

export default Landing;
