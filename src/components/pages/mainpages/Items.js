import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';

class Items extends Component {
  render() {
    return (
      <div className="mt-4">
        {this.props.items &&
          this.props.items.map(item => {
            return <Item key={item._id} item={item} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.itemsReducer.items
});

export default connect(
  mapStateToProps,
  null
)(Items);
