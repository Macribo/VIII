import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomMap from '../open-street-map/CustomMap';
import { loadItems } from '../../actions/crud';
import { Jumbotron } from 'reactstrap';

class ItemDetails extends Component {
  state = {
    markers: []
  };
  componentDidMount() {
    this.props.loadItems();
    console.log('items from props:', this.props.items);
  }
  render() {
    return (
      <Jumbotron className="mt-5 alarm-secondary">
        <h4 className="">Found red scarf at sbahn warschauer straße</h4>
        <hr className="my-2" />
        <div className="row item-details mt-4">
          <div className="col-12 col-md-8 mb-3 ">
            <div className="row">
              <div className="col-12 col-md-7 text-center">
                <img
                  height="250px"
                  width="250px"
                  src="/images/burger2.jpeg"
                  alt=""
                  className="rounded-circle"
                />
              </div>
              <div className="col-12 col-sm-6  col-md-5 mt-5">
                <p className="mt-4">
                  <strong>Location:</strong> Warschauer Strasse
                </p>
                <p className="">
                  <strong>Time:</strong> 12:33
                </p>
              </div>

              <p className="lead mt-3 p-3">
                This is a simple hero unit, a simple Jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
            </div>
          </div>
          <div className="col-12  col-md-4  row item-details-map">
            <CustomMap markers={this.state.markers} className="" />
          </div>
          <div />
        </div>
      </Jumbotron>
    );
  }
}

const mapStateToProps = state => ({
  items: state.itemsReducer.items
});

export default connect(
  mapStateToProps,
  { loadItems }
)(ItemDetails);
