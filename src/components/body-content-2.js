import React, {Component} from "react";

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        address: props.location
    }
  }

  componentWillReceiveProps(props) {
    this.setState({address: props.location});
  }

  render() {
    if (this.state.address.length === 0) {
      this.setState({address: "Irvine, CA"});
    }

    let address = document.getElementsByClassName("map").src;
    address=`https://www.google.com/maps/embed/v1/search?key=AIzaSyCbRPJ4WPt885Uvh3ORlze25kJN6VsSE4A&q=${this.state.address}`;

    return (
      <div className="mapView">
        <h3>Default Location Is Irvine,CA</h3>
        <iframe id="google-map" className="map" frameBorder="0" src={address}></iframe>
      </div>
    )
  }
}

export default MapView;
