import React, { Component } from 'react';
import GalleryContainer from './components/GalleryContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Thumbnails from './components/Thumbnails';
import MyNavbar from './components/MyNavbar';
import NotFound from './components/NotFound';




import logo from './logo.svg';
import './App.css';
import './components/TírAmharch'
import TírAmharch from './components/TírAmharch';
import Alert0 from './components/Alert0';
import VIII from './components/VIII/VIII';
import Footer from './components/Footer';
import { Button } from 'reactstrap';
import SimpleAnswers from './components/SimpleAnswers'



class App extends Component {
  //store...

  state = {

  }

  render() {
    return (
      <Router>
        <div className="App">

          {/* <MyNavbar /> */}
          <Switch>



            <Route exact path="/VIII" component={VIII} />


            {/* <Route exact path="/gallery/:id" component={GalleryContainer} /> */}
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

// render() {
//   return (
//     <div className="App">
//       <h1>VIII</h1>
//       <VIII />

//       {/* <TírAmharch /> */}
//       {/* <Alert0 /> */}
//       <SimpleAnswers />
//       {/* <Button color="danger">hold to record</Button>      */}
//     </div>

//   );
// }

export default App;
