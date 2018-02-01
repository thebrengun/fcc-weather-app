import './CurrentTemp.css';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTemperatureSystem } from '../reducers/temperatureSystem.reducer.js';

class ConvertTemp extends PureComponent {
	render() {
		const tempString = this.props.kelvin ? this.props.convert(this.props.kelvin) : '--';
		return (
			<span onClick={this.props.toggle} className="temp">
				<span>{tempString}</span>
				<span className="temp-unit">
					{String.fromCharCode(176)}{this.props.tempUnit}
				</span>
			</span>
		);
	}
}

ConvertTemp.propTypes = {
	kelvin: PropTypes.number,
	convert: PropTypes.func,
	toggle: PropTypes.func,
	tempUnit: PropTypes.string
};

const mapStateToProps = ({temperatureSystem}) => ({
	convert: temperatureSystem.convertFromK,
	tempUnit: temperatureSystem.abbr,
});

const mapDispatchToProps = (dispatch) => ({
	toggle: () => dispatch(toggleTemperatureSystem())
});

export default connect(mapStateToProps, mapDispatchToProps)(ConvertTemp);