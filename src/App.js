import React, { Component } from 'react';
import GalleryContainer from './components/GalleryContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Thumbnails from './components/Thumbnails';
import MyNavbar from './components/MyNavbar';
import NotFound from './components/NotFound';

import Splash from './components/VIII/Splash'
import Plan from './components/VIII/Plan'
import StartGame from './components/VIII/StartGame'
import UnderGround1 from './components/VIII/UnderGround1'
import EventBackground1 from './components/VIII/EventBackground1'
import Jantorial from './components/VIII/Jantorial'
import MultiPlayer from './components/VIII/MultiPlayer'
import CalibrateFlag from './components/VIII/CalibrateFlag'
import Moth from './components/VIII/Moth'

import preabTeacs from './components/preabTeacs'

/*TODO 
  rename components to something intuitive and descriptive.
  //Tricky at this po,
*/




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
            <Route exact path="/" component={Plan} />

            <Route exact path="/VIII" component={VIII} />
            <Route exact path="/1/" component={Splash} />
            <Route exact path="/3/" component={StartGame} />
            <Route exact path="/4/" component={UnderGround1} />
            <Route exact path="/5/" component={EventBackground1} />
            <Route exact path="/6/" component={Jantorial} />
            <Route exact path="/7/" component={MultiPlayer} />
            <Route exact path="/8/" component={CalibrateFlag} />
            <Route exact path="/9/" component={Moth} />


            {/* <Route exact path="/gallery/:id" component={GalleryContainer} /> */}
            <Route component={NotFound} />
          </Switch>
          {/* <Footer /> */}
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
