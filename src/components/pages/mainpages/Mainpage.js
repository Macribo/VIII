import React, { Component } from 'react';
import Items from './Items';
import SearchBar from './SearchBar';
import Filter from './Filter';
import { connect } from 'react-redux';
import { loadItems } from '../../../actions/crud';

import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Col,
  Row
} from 'reactstrap';

class Mainpage extends Component {
  componentDidMount() {
    this.props.loadItems();
  }

  render() {
    return (
      <div>
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-12 col-md-5 ">
            <Filter />
          </div>
          <div className="col-12 col-md-7 ">
            <SearchBar />
          </div>
        </div>

        <Items />
      </div>
    );
  }
}

export default connect(
  null,
  { loadItems }
)(Mainpage);
