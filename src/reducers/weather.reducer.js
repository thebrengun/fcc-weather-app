import { fetchCurrentWeather, fetchForecast } from '../providers/index.js';
import { setSky } from './sky.reducer.js';

const defaultState = {
	forecastWeather: {list: []},
	currentWeather: {
		main: {temp: undefined},
		weather: []
	}
};

const SET_FORECAST_WEATHER = 'SET_FORECAST_WEATHER';
const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';

const setCurrentWeather = (weather) => ({type: SET_CURRENT_WEATHER, payload: weather});
const setForecastWeather = (weather) => ({type: SET_FORECAST_WEATHER, payload: weather});

const getForecasts = ({lat, lon}) => (dispatch, getState) => {
	const forecasts = {};
	fetchCurrentWeather({lat, lon}).catch(
		console.log
	).then(
		(currentWeather) => {
			forecasts['currentWeather'] = currentWeather;
			return fetchForecast({id: currentWeather.id});
		},
		err => {
			return forecasts;
		}
	).then(
		(forecastWeather) => {
			forecasts['forecastWeather'] = forecastWeather;
			return forecasts;
		},
		err => {
			return forecasts;
		}
	).then(
		(forecasts) => {
			if(forecasts.currentWeather) {
				dispatch(setSky(
					forecasts.currentWeather.dt, 
					forecasts.currentWeather.sys.sunrise, 
					forecasts.currentWeather.sys.sunset, 
					forecasts.currentWeather.clouds.all
				));
				dispatch(setCurrentWeather(forecasts.currentWeather));
			}
			if(forecasts.forecastWeather) {
				dispatch(setForecastWeather(forecasts.forecastWeather));
			}
		}
	);
};

const reducer = (state = defaultState, action) => {
	switch(action.type) {
		case SET_CURRENT_WEATHER:
			return {...state, currentWeather: action.payload};
		case SET_FORECAST_WEATHER:
			return {...state, forecastWeather: action.payload};
		default:
			return state;
	}
};

export { reducer, getForecasts };