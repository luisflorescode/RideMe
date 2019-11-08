import React from 'react';
import '../assets/styles/components/Hero.scss';
import heroImg from '../assets/static/hero.jpg';

const Hero = () => (
  <section className='hero'>
    <img className='hero__img' src={heroImg} alt='hero' />
    <article className='hero__right'>
      <h2 className='hero__right-title'>Viaja sin complicaciones</h2>
      <p className='hero__right-text'>
        Descubre una nueva manera de viajar, en RideMe te brindamos seguridad y
        la mayor comodidad en cada viaje.
      </p>
      <button className='hero__right-button' type='button'>
        Regístrate y comienza a viajar
      </button>
    </article>
  </section>
);

export default Hero;
