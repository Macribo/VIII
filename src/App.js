import React, { Component } from 'react';
import FirstPage from './components/pages/FirstPage'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Instructions from './components/pages/Instrunctions';
import InsertItem from './components/pages/InsertItem';
import Mainpage from './components/pages/mainpages/Mainpage';
import ItemDetails from './components/pages/ItemDetails';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Instructions} />
            <Route path="/FirstPage" component={FirstPage} />
            <Route exact path="/mainpage" component={Mainpage} />
            <Route path="/insertItem" component={InsertItem} />
            <Route exact path="/itemdetails" component={ItemDetails} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
