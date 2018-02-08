import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { determineLocation } from './reducers/location.reducer.js';
import { getForecasts } from './reducers/weather.reducer.js';

import LookupLocation from './components/LookupLocation.js';
import CurrentWeather from './components/CurrentWeather.js';
import ForecastWeather from './components/ForecastWeather.js';

class App extends Component {
  componentDidMount() {
    this.props.determineLocation();
  }

  componentWillReceiveProps = (nextProps) => {
    const { lat, lon } = this.props.location;
    const { lat:nextLat, lon:nextLon } = nextProps.location;
    if(nextLat !== lat || nextLon !== lon) {
      this.props.getForecasts(nextProps.location);
    }
  }

  render() {
    return (
      <div className={`weather-container ${this.props.sky}-bg`}>
        <LookupLocation />
        <div className="weather-forecasts">
          <CurrentWeather 
            currentWeather={this.props.currentWeather.data} 
            pending={this.props.currentWeather.pending} 
            error={this.props.currentWeather.error}
          />
          <ForecastWeather 
            forecastWeather={this.props.forecastWeather.data} 
            pending={this.props.forecastWeather.pending} 
            error={this.props.forecastWeather.error}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({location, weather, sky}) => ({
  location,
  currentWeather: weather.currentWeather,
  forecastWeather: weather.forecastWeather,
  sky
});

const mapDispatchToProps = (dispatch) => ({
  determineLocation: () => dispatch(determineLocation()),
  getForecasts: (location) => dispatch(getForecasts(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);