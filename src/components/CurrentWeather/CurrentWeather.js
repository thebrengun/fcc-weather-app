import React, { PureComponent } from 'react';
import './CurrentWeather.css';
import PropTypes from 'prop-types';
import ConvertTemp from '../ConvertTemp/ConvertTemp.js';
import icons from '../icons/index.js';

const filterDuplicateIcons = () => {
	const icons = [];
	return ({icon}) => {
		const present = icons.indexOf(icon) !== -1;
		if(!present) {
			icons.push(icon);
		}
		return !present;
	};
}

class CurrentWeather extends PureComponent {
	render() {
		const { wind, pressure, clouds, visibility, precipitation } = this.props;

		return (
			<div className="current-weather">
				{this.props.pending && <div className="pending">Updating...</div>}
				{this.props.error && <div className="error">{this.props.error && this.props.error}</div>}
				<div className="current-weather-icons">
					{this.props.currentWeather.weather.filter(filterDuplicateIcons()).map(
						({main, icon}, idx) => 
							<div key={`weather-icon-${main}-${idx}`}>
								{React.createElement(icons[icon])}
							</div>
					)}
				</div>
				<div className="current-weather-temp">
					<div className="temp-live">
						<ConvertTemp kelvin={this.props.currentWeather.main.temp} />
					</div>
				</div>
				<div className="current-weather-description">
					{this.props.currentWeather.weather.map(({description}) => description).join(', ')}
				</div>
				<div>
					{ wind && JSON.stringify(wind) }
					{ pressure && JSON.stringify(pressure) }
					{ clouds && JSON.stringify(clouds) }
					{ visibility && JSON.stringify(visibility) }
					{ precipitation && JSON.stringify(precipitation) }
				</div>
			</div>
		);
	}
}

CurrentWeather.defaultProps = {
	currentWeather: {
		weather: [],
		main: {}
	},
	pending: false,
	error: undefined
};

CurrentWeather.propTypes = {
  currentWeather: PropTypes.object,
  pending: PropTypes.bool,
  error: PropTypes.string
};

export default CurrentWeather;