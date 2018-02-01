import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as location } from './location.reducer.js';
import { reducer as lookupLocation } from './lookupLocation.reducer.js';
import { reducer as temperatureSystem } from './temperatureSystem.reducer.js';
import { reducer as weather } from './weather.reducer.js';
import { reducer as sky } from './sky.reducer.js';

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
	applyMiddleware(...middlewares)
);

export default store;