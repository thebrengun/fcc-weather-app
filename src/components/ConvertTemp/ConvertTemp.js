import './ConvertTemp.css';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTemperatureSystem } from '../../reducers/temperatureSystem.reducer.js';

const round = (num, places = 0) => {
  const mult = Math.pow(10, places);
  return Math.round(num * mult) / mult;
};
const kelvinToCelsiusRounded = K => round(kelvinToCelsius(K));
const kelvinToFarenheitRounded = K => round(kelvinToFarenheit(K));
const kelvinToFarenheit = (temp) => temp * (9 / 5) - 459.67;
const kelvinToCelsius = (temp) => temp - 273.15;

class ConvertTemp extends PureComponent {
	convert = (kelvin) => {
		return this.props.temperatureSystem === 'F' ? 
			kelvinToFarenheitRounded(kelvin) : 
			kelvinToCelsiusRounded(kelvin);
	}

	render() {
		return (
			<span onClick={this.props.toggle} className="temp">
				<span>{this.props.kelvin ? this.convert(this.props.kelvin) : '--'}</span>
				<span className="temp-unit">
					{String.fromCharCode(176)}{this.props.temperatureSystem}
				</span>
			</span>
		);
	}
}

ConvertTemp.propTypes = {
	kelvin: PropTypes.number,
	convert: PropTypes.func,
	toggle: PropTypes.func,
	temperatureSystem: PropTypes.string
};

const mapStateToProps = ({temperatureSystem}) => ({temperatureSystem});

const mapDispatchToProps = (dispatch) => ({
	toggle: () => dispatch(toggleTemperatureSystem())
});

export default connect(mapStateToProps, mapDispatchToProps)(ConvertTemp);