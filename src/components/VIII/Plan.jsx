/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
class Plan extends React.Component {

  render() {




    return (

      <div class="row">
        <div class="lg-12" style={{}}>
          <img src="images/5.png" alt="placeholder 960" class="img-responsive" />

          <Button id="btn-plan"><i class="fas fa-arrow-right "></i></Button>
        </div>
      </div>

    );
  }
}

export default Plan;