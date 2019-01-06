/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AboutModal extends React.Component {

  render() {
    return (

      <div id="t">
        <ins>2.5</ins>          <strong>
          The oldest Gaelic poem is called <em>The invocation of Amergin</em>.
 </strong>
        <ins>2.5</ins><br></br><br></br>
        The story goes that Amergin the Milesian led his Iberian tribe to an Island
 <br></br><br></br>ruled by supernatural creatures called the <em>
          <ins>0.75</ins><br></br><br></br>
          Tuatha Dé Dannan</em><ins>1.5</ins>.
 <ins>2</ins><br></br><br></br>
        <del>*</del>
        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
      </div >
    );
  }
}

export default AboutModal;

