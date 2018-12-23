import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import Welcome from './components/Welcome';
import A from './components/A'
import AboutModal from './components/AboutModal'
import C from './components/C'
import D from './components/D'
class App extends Component {





  state = {
    buttonLabel: "About"
  }
  render() {

    return (
      <Router>

        <div className="App">
          <AboutModal buttonLabel={this.state.buttonLabel} />
          <Switch>
            {/* <Route exact path="/a" component={A} /> */}

            <Route exact path="/c" component={C} />

            <Route component={A} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
