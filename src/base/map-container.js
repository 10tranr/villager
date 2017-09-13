import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker} from 'react-google-map';

const APIKey = 'AIzaSyDqHoOzMrLxbpnETOzRdfAaqD3yqBOn170';

export class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        const mapContainer = <div style={{height: '100%', width: '100%'}}></div>
        return (
        <GoogleMapLoader
            containerElement = { mapContainer }
            googleMapElement = {
                <GoogleMap
                    defaultZoom = {15}
                    defaultCenter = {this.props.center}
                    options = {{streetViewControl: false, mapTypeControl: false}}>
                </GoogleMap>
            }
        />
        );
    }
}