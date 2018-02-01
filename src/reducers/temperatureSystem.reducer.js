import { kelvinToCelsius, kelvinToFarenheit, round } from '../utils/index.js';

const TOGGLE_TEMPERATURE_SYSTEM = 'TOGGLE_TEMPERATURE_SYSTEM';

const toggleTemperatureSystem = () => ({type: TOGGLE_TEMPERATURE_SYSTEM});

const defaultState = {
	convertFromK: kelvinToFarenheitRounded,
	abbr: 'F'
};

const reducer = (state = defaultState, action) => {
	switch(action.type) {
		case TOGGLE_TEMPERATURE_SYSTEM:
			return {
				...state, 
				abbr: state.abbr === 'F' ? 'C' : 'F',
				convertFromK: state.abbr === 'F' ? 
					kelvinToCelsiusRounded : 
					kelvinToFarenheitRounded
			};
		default:
			return state;
	}
}

function kelvinToCelsiusRounded(K) {
  return round(kelvinToCelsius(K));
}

function kelvinToFarenheitRounded(K) {
  return round(kelvinToFarenheit(K));
}

export { reducer, toggleTemperatureSystem};