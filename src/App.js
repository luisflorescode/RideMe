import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as loginActions from './actions/loginActions';
import Home from './containers/Home';
import Landing from './containers/Landing';
import Login from './containers/Login';
import Register from './containers/Register';
import Ride from './containers/Ride';
import './assets/styles/App.scss';

function App(props) {
  props.loginRequest();

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/home' component={Home} />
      <Route exact path='/ride' component={Ride} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={Landing} />
    </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = reducers => {
  return reducers.loginReducer;
};

export default connect(mapStateToProps, loginActions)(App);
