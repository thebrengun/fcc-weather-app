const TOGGLE_TEMPERATURE_SYSTEM = 'TOGGLE_TEMPERATURE_SYSTEM';

const toggleTemperatureSystem = () => ({type: TOGGLE_TEMPERATURE_SYSTEM});

const defaultState = 'F';

const reducer = (state = defaultState, action) => {
	switch(action.type) {
		case TOGGLE_TEMPERATURE_SYSTEM:
			return state.abbr === 'F' ? 'C' : 'F';
		default:
			return state;
	}
}

export { reducer, toggleTemperatureSystem};