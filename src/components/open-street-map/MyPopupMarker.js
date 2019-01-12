import React from 'react';
import PropTypes from 'prop-types';
import {
  Marker,
  Popup
  // PropTypes as MapPropTypes
} from 'react-leaflet';
const MyPopupMarker = ({ children, position, removeHandler }) => (
  <Marker position={position}>
    <Popup>
      <span>{children}</span>
      <button onClick={removeHandler}>remove me</button>
    </Popup>
  </Marker>
);
// MyPopupMarker.propTypes = {
//   children: MapPropTypes.children,
//   position: MapPropTypes.latlng
// };
export default MyPopupMarker;
