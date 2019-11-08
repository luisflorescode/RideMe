import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './assets/styles/App.scss';
import Horizontal from './layouts/Horizontal';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={Horizontal} />
      <Route exact path='/' component={Horizontal} />
    </Switch>
  </BrowserRouter>
);

export default App;
