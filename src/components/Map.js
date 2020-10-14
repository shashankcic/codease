import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 28.69,
      lng: 77.21
    },
    zoom: 16
  };
 
  render() {
    const API_KEY = `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`;
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ 
            key: API_KEY,
            language: 'en' 
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
        >
          <AnyReactComponent
            lat={28.691058}
            lng={77.214262}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;