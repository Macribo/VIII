import React from 'react';
import PropTypes from 'prop-types';
import MyPopupMarker from './MyPopupMarker';
const MyMarkersList = ({ markers, removeHandler }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} removeHandler={removeHandler} />
  ));
  return <div style={{ display: 'none' }}>{items}</div>;
};

MyMarkersList.propTypes = {
  markers: PropTypes.array.isRequired
};
export default MyMarkersList;
