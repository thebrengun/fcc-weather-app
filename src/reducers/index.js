import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as location } from './location.reducer.js';
import { reducer as lookupLocation } from './lookupLocation.reducer.js';
import { reducer as temperatureSystem } from './temperatureSystem.reducer.js';
import { reducer as weather } from './weather.reducer.js';
import { reducer as sky } from './sky.reducer.js';

const loadStateFromLocalStorage = () => {
	try {
		const state = localStorage.getItem('fcc-weather-app');
		return state == null ? undefined : JSON.parse(state);
	} catch(err) {
		return undefined;
	}
};

const saveStateToLocalStorage = (state) => {
	try {
		localStorage.setItem('fcc-weather-app', JSON.stringify(state));
	} catch(err) {
		// Ignore write errors
	}
};

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = createStore(
	combineReducers({
		location, 
		lookupLocation, 
		temperatureSystem,
		weather,
		sky
	}), 
	loadStateFromLocalStorage(),
	applyMiddleware(...middlewares)
);

store.subscribe(() => {
	const state = store.getState();
	saveStateToLocalStorage({...state, location: {name: state.location.name}});
});

export default store;