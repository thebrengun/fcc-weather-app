import React, { PureComponent } from 'react';
import './CurrentWeather.css';
import PropTypes from 'prop-types';
import ConvertTemp from './ConvertTemp.js';

class CurrentWeather extends PureComponent {
	render() {
		return (
			<div className="current-weather">
				<div className="current-weather-icons">
					{this.props.currentWeather.weather.map(
						({main, icon}, idx) => 
							<div key={`weather-icon-${main}-${idx}`}>
								<img src={`images/weather-icons/svg/${icon}.svg`} alt={main} />
							</div>
					)}
				</div>
				<div className="current-weather-temp">
					<div className="temp-live">
						<ConvertTemp kelvin={this.props.currentWeather.main.temp} />
					</div>
					<div className="temp-hi-lo">
						<div className="temp-hi">
							<span>Hi: </span>
							<ConvertTemp kelvin={this.props.currentWeather.main.temp_max} />
						</div>
						<div className="temp-lo">
							<span>Lo: </span>
							<ConvertTemp kelvin={this.props.currentWeather.main.temp_min} />
						</div>
					</div>
				</div>
				<div className="current-weather-description">
					{this.props.currentWeather.weather.map(({description}) => description).join(', ')}
				</div>
			</div>
		);
	}
}

CurrentWeather.defaultProps = {
	currentWeather: {
		weather: [],
		main: {}
	}
};

CurrentWeather.propTypes = {
  currentWeather: PropTypes.object
};

export default CurrentWeather;