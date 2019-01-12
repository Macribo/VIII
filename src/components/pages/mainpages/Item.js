import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

class Item extends Component {
  render() {
    const { _id, name, comment, location, time, image } = this.props.item;
    const path = '/itemdetails/' + _id;
    return (
      <div>
        <Link to={path}>
          {' '}
          <Jumbotron className="p-4 m-2">
            {/* <div className="row"> */}
            <h4 className="text-dark ">{name}</h4>
            <hr className="my-2" />
            <div className="row flex-column-reverse flex-md-row">
              <div className="col-12 col-md-8">
                <p className="lead text-dark">{comment}</p>
                <p className="mt-4 text-dark">
                  <strong>Location:</strong> {location}{' '}
                </p>
                <p className="mb-1 text-dark">
                  <strong>Time:</strong> <a className="nounderline">{time}</a>
                </p>
              </div>
              <div className="col-12 col-md-4 text-center mt-3">
                <img
                  src="/images/pexels-photo-1223991.jpeg"
                  //  {image}
                  alt=""
                  height="130px"
                  width="130px"
                  className="rounded-circle"
                />
              </div>
            </div>
          </Jumbotron>
        </Link>
      </div>
    );
  }
}

export default Item;
