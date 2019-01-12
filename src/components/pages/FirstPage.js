import React, { Component } from 'react'
import { Col, Button } from 'reactstrap';
export default class FirstPage extends Component {

  state = {
  }

  render() {
    return (
      <div className="row firstPage" >
        <Col xs="6" className="firstPageLeft">
          <h2>Lost something?</h2>
          <h3>Maybe our community can help you find it</h3>
          <Button>test1</Button>
        </Col>
        <Col xs="6" className="firstPageRight">
          <h2>Found something?</h2>
          <h3>Maybe we can help contact the owner.</h3>
          <Button>test2</Button>

        </Col>
      </div>
    )
  }
}
