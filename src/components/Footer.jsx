import React from 'react';
import { Button, Fade } from 'reactstrap';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: false,
      indexTracker: 0
    };
    this.toggle = this.toggle.bind(this); this.indexTracker += 1; alert("hey")
  }

  render() {
    return (
      <div className="my-footer" style={{ paddingTop: '40px', backgroundColor: 'black' }}>
        <Button color="primary" onClick={this.toggle}>Read Me</Button>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
          AI improved with user specific data. Clic here to calibr-8 by creating a flag which represents your digital citizenship.
  Use the emosprascope to make our algorithm more insightful.
 <a href=""></a>
        </Fade>
      </div>
    );
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }
};