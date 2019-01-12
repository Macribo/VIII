import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../../actions/crud'
var btnStyle = {
  backgroundColor: '#D96E6E'
}
class InsertItem extends Component {

  state = {
    userId: '',
    name: '', //required
    time: '',
    comment: '', //required
    tags: [],
    location: '',//required
    lnglat: [52.5065133, 13.1445545], //required
    image: '',
    type: 'found'
  };
  submitNewItem = () => {
    const { userId, name, time, comment, tags, location, lnglat, image, type } = this.state;
    /* image should have a default placeholder.  */
    if (name === '' || comment === '' || location === '' || lnglat === '') {
      alert("Wait - you've left a required field empty!");
    }
    console.log(this.state);
    this.props.addItem(this.state);


  }


  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  render() {
    return (
      <div className="insertItem">

        <Form>
          <h2>Please Describe Item</h2>
          <FormGroup row>
            {/* <Label for="item" sm={2}>Item</Label> */}
            <Col sm={10}>
              <Input type="text" name="name" placeholder="I have found a..."
                onChange={this.onChangeHandler} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={10}>
              <Input type="text" name="location" placeholder="Where was the item found?"
                onChange={this.onChangeHandler} /> {/* In version 2.0, shall we update 'the item' with the value user enters into foundItem field, above?*/}
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm={10}>
              <Input type="text" name="time" placeholder="When was the item found?"
                onChange={this.onChangeHandler} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={10}>
              <Input type="textarea" name="comment" placeholder="Comment // EG contact details"
                onChange={this.onChangeHandler} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={10}>
              <Input type="text" name="tags" placeholder="Add Keywords to improve item's findablity" onChange={this.onChangeHandler} />
            </Col>
          </FormGroup>

          <Col sm={{ size: 10, offset: 2 }}>
            <Button style={btnStyle} onClick={this.submitNewItem}>Add</Button>
          </Col>
        </Form>
      </div>
    );
  }
}


export default connect(null, { addItem })(InsertItem); //adding to connect means it is a props. so in submitNewItem we can  'this.props.addItem'