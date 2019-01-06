import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import AboutModal from './AboutModal'
import { Link } from 'react-router-dom';
import B from './B'
var classNames = require('classnames');
class A extends Component {


  state = {

    bgImg: 'images/5d.png',
    active: true,
    style: {
      backgroundColor: '#a94bd8',
      padding: '15px 35px',
      display: 'flex',
      position: 'absolute',
      top: '90%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '999',
      fontSize: '2em',
      color: '#e6cdcd',
      borderRadius: 20

    },


    narrativeTexts: [
      `
`,
      `The queens of Dé Danann allowed Amergin and his Milesians to settle there on two conditions: <ins>1</ins>
    <br></br><br></br> First the Milesians had to defeat the kings warriors and druids of the Dé Danann in battle. <ins>1.5</ins><br></br><br></br>Second, the land must be named after the Queens of Dé Danann.
    <ins>2</ins> <del>*</del>

`, ``,
      ``,
      ``,
      ``],


    //this is for the about button behaviour
    modal: false,
    page: null


  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
    // alert(this.state);


  }

  showPage = () => {
    this.setState({
      page: 'about'
    });
    // alert(this.state.page);
  }



  render() {

    return (
      <div className="container-fluid">
        <div className="" style={{ position: "absolute", top: "0", right: "0", bottom: "0", left: "0", backgroundColor: "black" }}>
          <img src={this.state.bgImg} alt="placeholder 960" className="img-responsive" style={{ width: "100%" }} />

          {/* <img src="images/other/suile.gif" className="suile" alt="placeholder 960" style={{ width: "100%" }} /> */}
          <Button style={this.state.style} onClick={this.showPage.bind(this, 'about')}>About</Button>


        </div>

        {this.state.page === 'about' ? <div className="about"><B /></div> : null}
      </div>

    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   resetAB: () => dispatch({ type: 'RESET_AB' }),
//   resetXY: () => dispatch({ type: 'RESET_XY' })
// });


export default A;