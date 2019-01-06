
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import Welcome from './components/Welcome';
import A from './components/A'
import AboutModal from './components/AboutModal'
import C from './components/C'
import D from './components/D'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class App extends Component {

  // constructor(props) {
  //   super(props);
  state = {
    modal: false,
    page: null
    // };

    // this.toggle = this.toggle.bind(this);
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });


  }

  showAbout = (page) => {
    this.setState({
      page: page
    })
  }

  render() {

    return (<div>
      <A />
    </div>

    );
  }
}

export default App;
