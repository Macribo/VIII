import React from 'react';
import { Button, Fade } from 'reactstrap';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: false };
    this.toggle = this.toggle.bind(this);
  }

  render() {
    return (
      <div className="my-footer" style={{ paddingTop: '40px', backgroundColor: 'black' }}>
        <Button color="primary" onClick={this.toggle}>Read Me</Button>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
          Music By Dé Danann | Invocation of Amhargín translated by President Douglas Hyde | <a href=""></a>
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