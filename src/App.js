import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import Welcome from './components/Welcome';
import A from './components/A'
import B from './components/B'
import C from './components/C'
import D from './components/D'
class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">

          <Switch>
            <Route exact path="/a" component={C} />
            <Route exact path="/b" component={A} />
            <Route exact path="/c" component={D} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
