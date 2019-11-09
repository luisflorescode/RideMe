import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './containers/Landing';
import Login from './containers/Login';
import Register from './containers/Register';
import Home from './containers/Home';
import './assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/home' component={Home} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={Landing} />
    </Switch>
  </BrowserRouter>
);

export default App;
