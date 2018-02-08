import React, { PureComponent } from 'react';
import './ForecastWeather.css';
import PropTypes from 'prop-types';
import ConvertTemp from './ConvertTemp.js';

class ForecastWeather extends PureComponent {
	constructor() {
		super();
		this.today = new Date().getDay();
	}

	componentWillUpdate() {
		this.today = new Date().getDay();
	}

	render() {
		return (
			<div className="forecast-weather">
				{this.props.pending && <div className="pending">Updating...</div>}
				{this.props.error && <div className="error">{this.props.error}</div>}
				{this.props.forecastWeather.list.map(
					({temp, weather}, idx) => {
						const weekdays = {0: 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat'};
						const day = this.today + idx;
						const weekday = weekdays[day > 6 ? day - 7 : day];
						return (
							<div className="forecast-weather-day" key={`forecast-weather-${idx}`}>
								<div className="forecast-weekday">{weekday}</div>
								<div className="forecast-temperature">
									<ConvertTemp kelvin={temp.max} />
									<ConvertTemp kelvin={temp.min} />
								</div>
								<div className="forecast-day-icon">
									{weather.map(
										({main, icon}, iconIdx) => 
											<img src={`images/weather-icons/svg/${icon}.svg`} alt={main} key={`forecast-day-${idx}-icon-${iconIdx}`} />
									)}
								</div>
								<div className="forecast-day-description">
									{weather.map(({description}) => description).join(', ')}
								</div>
							</div>
						);
					}
				)}
			</div>
		);
	}
}

ForecastWeather.defaultProps = {
	forecastWeather: {
		list: []
	},
	pending: false,
	error: undefined
};

ForecastWeather.propTypes = {
  forecastWeather: PropTypes.object,
  pending: PropTypes.bool,
  error: PropTypes.string
};

export default ForecastWeather;