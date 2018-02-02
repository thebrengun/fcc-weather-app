const TOGGLE_TEMPERATURE_SYSTEM = 'TOGGLE_TEMPERATURE_SYSTEM';

const toggleTemperatureSystem = () => ({type: TOGGLE_TEMPERATURE_SYSTEM});

const kelvinToCelsiusRounded = K => round(kelvinToCelsius(K));
const kelvinToFarenheitRounded = K => round(kelvinToFarenheit(K));
const kelvinToFarenheit = (temp) => temp * (9 / 5) - 459.67;
const kelvinToCelsius = (temp) => temp - 273.15;

const round = (num, places = 0) => {
  const mult = Math.pow(10, places);
  return Math.round(num * mult) / mult;
};

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

export { reducer, toggleTemperatureSystem};