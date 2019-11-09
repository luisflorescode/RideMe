import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './assets/styles/App.scss';
import Landing from './containers/Landing';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={Landing} />
      <Route exact path='/' component={Landing} />
    </Switch>
  </BrowserRouter>
);

export default App;
