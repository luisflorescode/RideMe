import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './containers/Landing';
import Login from './containers/Login';
import './assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={Landing} />
    </Switch>
  </BrowserRouter>
);

export default App;
