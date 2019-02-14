import React, { PureComponent } from 'react';
import ConvertTemp from './ConvertTemp.js';
import icons from './icons/index.js';
import './HourlyWeather.css';

class HourlyWeather extends PureComponent {
	render() {
		const { hourlyWeather, pending, error } = this.props;
		return (
			<div className="HourlyWeather">
				{error && <span>{error}</span>}
				{pending && <span>Getting hourly forecast...</span>}
				{hourlyWeather && hourlyWeather.list && hourlyWeather.list.map(
					({dt, main, weather}, idx) => {
						const gmtDate = new Date(dt * 1000);
						const date = new Date(gmtDate.toLocaleString());
						const hours = date.getHours();
						const minutes = date.getMinutes();
						const hoursStr = `${hours > 12 ? hours - 12 : hours === 0 ? 12 : hours}`;
						const minutesStr = `${minutes === 0 ? '00' : minutes}`;
						const amPmStr = `${hours >= 12 ? 'PM' : 'AM'}`;
						const timeStr = `${hoursStr}${minutesStr !== '00' ? ':' + minutesStr : ''}${amPmStr}`;

						return (
							<div className="forecast-weather-hourly" key={`forecast-weather-${idx}`}>
								<div className="forecast-time">{timeStr}</div>
								<div className="forecast-hourly-temperature">
									<ConvertTemp kelvin={main.temp} />
								</div>
								<div className="forecast-hourly-icon">
									{weather.map(
										({main, icon}, iconIdx) => React.createElement(icons[icon], {key: `forecast-weather-${iconIdx}`})
									)}
								</div>
								<div className="forecast-hourly-description">
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

export default HourlyWeather;