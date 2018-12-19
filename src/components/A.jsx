import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import B from './B'
import { Link } from 'react-router-dom';
var classNames = require('classnames');

class A extends Component {
  state = {
    showingB: false,
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
    }

  }



  render() {

    return (
      <div className="container-fluid">
        <B />
        <div className="" style={{ position: "absolute", top: "0", right: "0", bottom: "0", left: "0", backgroundColor: "black" }}>
          <img src={this.state.bgImg} alt="placeholder 960" className="img-responsive" style={{ width: "100%" }} />

          {/* <img src="images/other/suile.gif" className="suile" alt="placeholder 960" style={{ width: "100%" }} /> */}
          {/* <Link to="/b">
            <Button style={this.state.style} onClick={(this.letsStart)
            }>Start</Button>
          </Link> */}
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