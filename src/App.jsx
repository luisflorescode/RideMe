import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './assets/styles/App.scss';
import Header from './components/Header';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={Header} />
      <Route exact path='/' component={Header} />
    </Switch>
  </BrowserRouter>
);

export default App;
