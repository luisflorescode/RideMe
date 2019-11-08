import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Horizontal = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Horizontal;
