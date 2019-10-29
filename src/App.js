import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import Player from './components/player/Player';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/player/:playerIndex" component={Player} />
              <Dashboard />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
