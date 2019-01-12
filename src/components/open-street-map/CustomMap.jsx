import PropTypes from 'prop-types';
import React, { createRef, Component } from 'react';
import MyMarkersList from './MyMarkersList';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  Circle
  // PropTypes as MapPropTypes
} from 'react-leaflet';

export default class CustomMap extends Component {
  state = {
    lat: 52.520008,

    lng: 13.404954,
    zoom: 13,
    markers: [
      // {
      //   key: 'marker1',
      //   position: [52.50856455, 13.410798],
      //   children: 'Nemer 0'
      // }
    ]
  };

  mapRef = createRef();
  handleClick = e => {
    const map = this.mapRef.current;
    if (map != null) {
      map.leafletElement.locate();
      console.log(e.latlng);
      let markers = this.state.markers;
      markers = [
        ...markers,
        {
          key: 'marker' + markers.length + 1,
          position: [e.latlng.lat, e.latlng.lng],
          children: 'Nemer ' + markers.length + 1
        }
      ];

      this.setState({
        markers: markers
      });
    }
  };
  removeMarker = e => {
    alert('ho');
    console.log(e.target);
  };

  render() {
    const center = [this.state.lat, this.state.lng];
    return (
      <Map
        className=""
        center={center}
        zoom={this.state.zoom}
        ref={this.mapRef}
        onClick={this.handleClick}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList
          markers={this.state.markers}
          removeHandler={this.removeMarker}
        />
        {/* <CircleMarker
          center={[52.55856455, 13.450798]}
          color="red"
          radius={15}
          opacity={0.5}
        >
          <Popup>I lost something here!!!</Popup>
        </CircleMarker> */}

        <Circle center={[52.520008, 13.404954]} fillColor="blue" radius={400}>
          <Popup>
            {' '}
            <button onClick={this.removeMarker}>x</button>I lost something here
            blue!!!
          </Popup>
        </Circle>
      </Map>
    );
  }
}
