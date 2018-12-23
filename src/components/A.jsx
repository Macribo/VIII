import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import B from './B'
import { Link } from 'react-router-dom';
var classNames = require('classnames');

class A extends Component {
  state = {

    bgImg: 'images/5d.png',
    active: true,
    style: {
      backgroundColor: 'red',
      padding: '15px 35px',
      display: 'flex',
      position: 'absolute',
      top: '90%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '999'

    },
    narrativeTexts: [
      `
`,
      `The queens of Dé Danann allowed Amergin and his Milesians to settle there on two conditions: <ins>1</ins>
    <br></br><br></br> First the Milesians had to defeat the kings warriors and druids of the Dé Danann in battle. <ins>1.5</ins><br></br><br></br>Second, the land must be named after the Queens of Dé Danann.
    <ins>2</ins> <del>*</del>

`,
      `In battle, Amargín's warriors were forced to retreat beyond the magical boundary of the ninth wave.

    <ins>1.5</ins>
    <br></br><br></br>The druids of Dé Danann raised a magical storm to keep Amergin from reaching land <ins>2</ins>
    <br></br><br></br>
    But Amergín was a poet and words have power
    <del>*</del>
`,
      ``,
      ``,
      ``,
      ``]


  }



  render() {

    return (
      <div className="container-fluid">
        <div className="" style={{ position: "absolute", top: "0", right: "0", bottom: "0", left: "0", backgroundColor: "black" }}>
          <img src={this.state.bgImg} alt="placeholder 960" className="img-responsive" style={{ width: "100%" }} />
          <B />

          {/* <img src="images/other/suile.gif" className="suile" alt="placeholder 960" style={{ width: "100%" }} /> */}
          <Link to="/b">
            <Button style={this.state.style} onClick={(this.letsStart)
            }>Start</Button>
          </Link>
        </div>
      </div>

    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   resetAB: () => dispatch({ type: 'RESET_AB' }),
//   resetXY: () => dispatch({ type: 'RESET_XY' })
// });


export default A;