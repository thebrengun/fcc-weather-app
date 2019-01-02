import { fetchCurrentWeather, fetchForecast } from '../providers/index.js';
import { setSky } from './sky.reducer.js';

const defaultState = {
	forecastWeather: {list: []},
	currentWeather: {
		main: {temp: undefined},
		weather: []
	}
};

const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
const SET_FORECAST_WEATHER = 'SET_FORECAST_WEATHER';

const FETCH_CURRENT_WEATHER = 'FETCH_CURRENT_WEATHER';
const FETCH_FORECAST_WEATHER = 'FETCH_FORECAST_WEATHER';

const SET_CURRENT_WEATHER_ERROR = 'SET_CURRENT_WEATHER_ERROR';
const SET_FORECAST_WEATHER_ERROR = 'SET_FORECAST_WEATHER_ERROR';

const setCurrentWeather = (weather) => ({type: SET_CURRENT_WEATHER, payload: weather});
const setForecastWeather = (weather) => ({type: SET_FORECAST_WEATHER, payload: weather});
const setPendingCurrentWeather = () => ({type: FETCH_CURRENT_WEATHER});
const setPendingForecastWeather = () => ({type: FETCH_FORECAST_WEATHER});
const setCurrentWeatherError = (err) => ({type: SET_CURRENT_WEATHER_ERROR, payload: err});
const setForecastWeatherError = (err) => ({type: SET_FORECAST_WEATHER_ERROR, payload: err});

const getForecasts = ({lat, lon}) => (dispatch, getState) => {
	const forecasts = {};
	dispatch(setPendingCurrentWeather());
	fetchCurrentWeather({lat, lon}).catch(
		err => {
			return err;
		}
	).then(
		(currentWeather) => {
			forecasts['currentWeather'] = currentWeather;
			dispatch(setPendingForecastWeather());
			return fetchForecast({id: currentWeather.id});
		},
		err => {
			forecasts['currentWeather'] = err;
			return forecasts;
		}
	).then(
		(forecastWeather) => {
			forecasts['forecastWeather'] = forecastWeather;
			return forecasts;
		},
		err => {
			forecasts['forecastWeather'] = err;
			return forecasts;
		}
	).then(
		(forecasts) => {
			if(forecasts.currentWeather && forecasts.currentWeather instanceof Error === false) {
				dispatch(setSky(
					forecasts.currentWeather.dt, 
					forecasts.currentWeather.sys.sunrise, 
					forecasts.currentWeather.sys.sunset, 
					forecasts.currentWeather.clouds.all
				));
				dispatch(setCurrentWeather(forecasts.currentWeather));
			} else {
				dispatch(setCurrentWeatherError('Could not get current weather: ' + forecasts.currentWeather.message));
			}
			if(forecasts.forecastWeather && forecasts.forecastWeather instanceof Error === false) {
				dispatch(setForecastWeather(forecasts.forecastWeather));
			} else {
				dispatch(setForecastWeatherError('Could not get forecast: ' + forecasts.forecastWeather.message));
			}
		}
	);
};

const reducer = (state = defaultState, action) => {
	switch(action.type) {
		case FETCH_CURRENT_WEATHER:
			return {...state, currentWeather: {...state.currentWeather, pending: true, error: undefined, dt: Date.now()}};
		case FETCH_FORECAST_WEATHER:
			return {...state, forecastWeather: {...state.forecastWeather, pending: true, error: undefined}};
		case SET_CURRENT_WEATHER_ERROR:
			return {...state, currentWeather: {...state.currentWeather, pending: false, error: action.payload}};
		case SET_FORECAST_WEATHER_ERROR:
			return {...state, forecastWeather: {...state.forecastWeather, pending: false, error: action.payload}};
		case SET_CURRENT_WEATHER:
			return {...state, currentWeather: {data: action.payload, pending: false, error: undefined}};
		case SET_FORECAST_WEATHER:
			return {...state, forecastWeather: {data: action.payload, pending: false, error: undefined}};
		default:
			return state;
	}
};

export { reducer, getForecasts };