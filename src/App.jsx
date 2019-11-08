import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './assets/styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={Header} />
      <Route exact path='/' component={Footer} />
    </Switch>
  </BrowserRouter>
);

export default App;
