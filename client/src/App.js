import React from 'react';
import './App.css';
import { Route, withRouter, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Jokes from './components/Jokes';
import PrivateRoute from './PrivateRoute';

export default function App() {
  return (
    <div className="App">
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/jokes" component={Jokes} />
      </main>
    </div>
  )
}
    