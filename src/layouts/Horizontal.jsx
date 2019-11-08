import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Horizontal = ({ children }) => (
  <>
    <Header />
    {children}
    <Hero />
    <Footer />
  </>
);

export default Horizontal;
