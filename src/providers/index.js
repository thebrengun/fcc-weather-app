let fetchCurrentWeather, fetchForecast, fetchIPInfo, getGeocodeInfo, getLocationInfo, reverseGeocode;

const mock = process.env.NODE_ENV === 'development';

if(mock) {
  const mock = require('./mock.js');
  mapFromObj(mock);
} else {
  const prod = require('./live.js');
  mapFromObj(prod);
}

function mapFromObj(obj) {
  fetchCurrentWeather = obj['fetchCurrentWeather'];
  fetchForecast = obj['fetchForecast'];
  fetchIPInfo = obj['fetchIPInfo'];
  getGeocodeInfo = obj['getGeocodeInfo'];
  getLocationInfo = obj['getLocationInfo'];
  reverseGeocode = obj['reverseGeocode'];
}

export { fetchCurrentWeather, fetchForecast, fetchIPInfo, getGeocodeInfo, getLocationInfo, reverseGeocode };