import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/HomeOptions.scss';

const HomeOptions = () => (
  <div className='homeOptions'>
    <Link className='homeOptions-item link' to='/home'>Pide un ride</Link>
    <Link className='homeOptions-item link' to='/home'>Mi perfil</Link>
    <Link className='homeOptions-item link' to='/home'>Lugares Frecuentes</Link>
  </div>
);

export default HomeOptions;
