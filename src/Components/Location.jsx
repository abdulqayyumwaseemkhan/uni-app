import React from "react";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => {
        this.setState({ error: error.message });
      }
    );
  }

  render() {
    const { latitude, longitude, error } = this.state;

    if (error) {
      return (
        <div>
          <h1>Error: {error}</h1>
        </div>
      );
    } else {
      return (
        <div className="container-sm  " style={{display: '-ms-flexbox',backgroundColor: '#D3D9D4', marginTop: '2rem',   textAlign: 'center', paddingBottom: '5rem', minHeight: '23vw' }}>
          <h1 style={{color: 'white', marginBottom: '5rem'}}>Concept 4</h1>
          <h3 style={{color: 'white'}}>User Current Location</h3>
          
          <p class="d-inline-flex gap-1">
            <a
              className="btn btn-primary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Latitude
            </a>
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample1"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Longitude
            </button>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
            <h3>User Latitude: {latitude}</h3>
            </div>
          </div>
          <div className="collapse" id="collapseExample1">
            <div className="card card-body">
            <h3>User Longitude: {longitude}</h3>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Location;
