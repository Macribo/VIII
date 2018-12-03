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
        <Button color="danger" onClick={this.toggle}>View Plan{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Phase 0</ModalHeader>
          <ModalBody>
            On the surface, this app is a 'Magic 8 Ball' question answerer.

            Like the classic toy, the app is asked a question, given a shake, and returns a random (sometimes humorous) answer.

            Unlike the classic toy: the app actually 'listens' to the question. The player presses the record button while asking a question.
            The question is recorded, and converted to an array of 'words' with the (EG) IBM Watson Accurate Speech to Text API.

           Question[] is parsed for question words (Who What When, Where, Why, How, Should etc ).

           Question is added to questionsDB.

           The app offers a 'Details' Button.
           The player can ask another question, or explore the previous answer in more detail, with the 'Details' button.

           If the player presses Details,
           The app tries to generate a meaningful template based on what it knows, so far.
           Yes or no questions based on the questionModel are selected, in an effort to ensure that the question is being parsed in an acceptable way.

           Once this is established,
           The user's decision is challenged with counter questions, and checked against common logical fallacies with keywords from the original question / related questions in the database.

Finally, if the user is still undecided, a pro/con table is generated, where the user can add tokens representing points for or against the decision. According to how important the concerns they represent are. (also 'render point' for pro/con)




          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <div>
          <Card className="row align-items-center justify-content-center">
            <CardImg top width="100%" className="" src="https://i.imgur.com/Tqm8f21.png" alt="Card image cap" style={{ paddingTop: '50px', width: '50%', }} />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Thamania</CardSubtitle>
              <CardText>DCI Group-8 Project</CardText>
              <Button >Start</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Plan;