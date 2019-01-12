import React, { Component } from 'react';
import { Collapse, Label, Input } from 'reactstrap';
import { Alert, CustomInput, FormGroup } from 'reactstrap';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class Filter extends Component {
  state = {
    collapse: false
  };

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };
  render() {
    return (
      <div className="">
        <button
          type="button"
          className="btn btn-danger"
          style={{ borderRadius: '25px', minWidth: '100px' }}
        >
          all
        </button>{' '}
        <button
          onClick={this.toggle}
          className="btn btn-danger"
          style={{ borderRadius: '25px', minWidth: '100px' }}
        >
          filter <i className="fas fa-filter" />
        </button>
        <Collapse isOpen={this.state.collapse}>
          {/* colors: */}
          <div>
            <input type="checkbox" value="color" /> red
            <input type="checkbox" value="color" /> blue
            <input type="checkbox" value="color" /> green
            <input type="checkbox" value="color" /> brown
          </div>
          {/* keys: */}
          <div>
            <input type="checkbox" value="key" /> Abus
            <input type="checkbox" value="key" /> Audi
            <input type="checkbox" value="key" /> Bmw
            <input type="checkbox" value="key" /> Mercedes Benz
          </div>
          {/* select color */}
          {/* <select className="custom-select w-25">
            <option selected>Color</option>
            <option value="1">red</option>
            <option value="2">blue</option>
            <option value="3">brown</option>
            <option value="3">yellow</option>
            <option value="3">green</option>
          </select> */}
          {/* select brand */}
          {/* <select className="custom-select w-25">
            <option selected>Key</option>
            <option value="1">Abus</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Mercedes Benz</option>
            <option value="3">VW</option>
            <option value="3">Honda</option>
          </select> */}
        </Collapse>
      </div>
    );
  }
}

export default Filter;
