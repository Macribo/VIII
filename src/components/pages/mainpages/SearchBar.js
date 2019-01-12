import React, { Component } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Col,
  Row
} from 'reactstrap';

class SearchBar extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <Input className="col-8 col-md-4 mt-2" placeholder="Where? " />{' '}
        <Input className="col-8 col-md-4 mt-2" placeholder="What?" />
        <button
          className="btn btn-danger col-8 col-md-3"
          style={{ borderRadius: '25px', minWidth: '100px', maxWidth: '200px' }}
        >
          search
        </button>
      </div>
    );
  }
}

export default SearchBar;
