/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
class Plan extends React.Component {
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

        <Modal id="loadingData" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>

          <div id="loadingData">


          </div>

          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>océ</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>skip</Button>
          </ModalFooter>
        </Modal>

        <div>
          <Card className="row align-items-center justify-content-center">
            <CardImg top width="100%" className="" src="images/other/antrim1.png" alt="Card image cap" style={{ paddingTop: '0px', width: '100%', }} />
            <CardBody>
              <CardTitle></CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText></CardText>
              <Button id="btnTutorial" color="warning" onClick={this.toggle}>Tutorial{this.props.buttonLabel}</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Plan;