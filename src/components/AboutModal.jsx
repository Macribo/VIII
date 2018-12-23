/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AboutModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button id="aboutButton" color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AboutModal;









// import React, { Component } from 'react';
// import { connect } from 'react-redux';


// class B extends Component {


//   render() {

//     return (

//       <h1 id="bText">

//         <div id="t">
//           <ins>2.5</ins>          <strong>
//             The oldest Gaelic poem is called <em>The invocation of Amergin</em>.
// </strong>
//           <ins>2.5</ins><br></br><br></br>
//           The story goes that Amergin the Milesian led his Iberian tribe to an Island
// <br></br><br></br>ruled by supernatural creatures called the <em>
//             <ins>0.75</ins><br></br><br></br>
//             Tuatha Dé Dannan</em><ins>1.5</ins>.
// <ins>2</ins><br></br><br></br>
//           <del>*</del></div>
//         {/* {this.props.Texts} */}

//       </h1>
//       /*

//       snip 01 some animated html

//       */
//     )
//   }
// }

// // const mapStateToProps = state => ({
// //   x: state.reducer1.x,
// //   y: state.reducer1.y
// // });

// // const mapDispatchToProps = dispatch => (
// //   {
// //     incrementX: () => dispatch({ type: 'INCREMENT_X' }),
// //     incrementY: () => dispatch({ type: 'INCREMENT_Y' })
// //   });

// export default B