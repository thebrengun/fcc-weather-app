import React, { PureComponent } from 'react';
import './FullForecast.css';
import { connect } from 'react-redux';
import { getForecasts } from '../reducers/weather.reducer.js';

import LookupLocation from './LookupLocation.js';
import CurrentWeather from './CurrentWeather.js';
import ForecastWeather from './ForecastWeather.js';
import HourlyWeather from './HourlyWeather.js';

class FullForecast extends PureComponent {
	
	 componentWillReceiveProps = (nextProps) => {
		const { lat, lon } = this.props.location;
		const { lat:nextLat, lon:nextLon } = nextProps.location;
		const locationHasChanged = nextLat !== lat || nextLon !== lon;

		const currentWeather = nextProps.currentWeather;
		const dt = currentWeather.dt; // in seconds
		const tenMinutes = 600000; // in ms
		const moreThanTenMinutesSinceLastUpdate = (Date.now() - tenMinutes) / 1000 > parseInt(dt, 10);

		if(locationHasChanged || moreThanTenMinutesSinceLastUpdate) {
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
					<div>
						<HourlyWeather 
							hourlyWeather={this.props.hourlyWeather.data} 
							pending={this.props.hourlyWeather.pending} 
							error={this.props.hourlyWeather.error} 
						/>
						<ForecastWeather 
							forecastWeather={this.props.forecastWeather.data} 
							pending={this.props.forecastWeather.pending} 
							error={this.props.forecastWeather.error}
						/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({location, weather, sky}) => ({
	location,
	currentWeather: weather.currentWeather,
	forecastWeather: weather.forecastWeather,
	hourlyWeather: weather.hourlyWeather,
	sky
});

const mapDispatchToProps = (dispatch) => ({
	getForecasts: (location) => dispatch(getForecasts(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(FullForecast);