import { geocodeKey } from './API_KEYS.js';
import fetch from 'isomorphic-fetch';
import fetchJsonp from 'fetch-jsonp';

const formatRequest = (base, options) => {
  return base + Object.keys(options).reduce((s, k, i) => {
    let prefix = i === 0 ? '?' : '&';
    return s + prefix + k + '=' + options[k];
  }, '');
};

const getGeocodeInfo = (q) => {
  return fetchGeocode({address: encodeURIComponent(q)}).then(
    response => {
      if(response.status >= 400) {
        throw new Error('Bad response');
      }
      return response.json();
    }
  ).catch(
    err => {throw err;}
  );
};

const reverseGeocode = ({lat, lon}) => {
  return fetchGeocode({latlng: lat + ',' + lon}).then(
    response => {
      if(response.status >= 400) {
        throw new Error('Bad response');
      }
      return response.json();
    }
  ).catch(
    err => {throw err;}
  );
};

const fetchGeocode = (obj) => {
  const url = 'https://maps.googleapis.com/maps/api/geocode/json';
  const options = {...obj, key: geocodeKey};
  return fetch(formatRequest(url, options));
};

const getLocationInfo = () => {
  return new Promise(
    (resolve, reject) => {
      if("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const {latitude: lat, longitude: lon} = position.coords;
            if(lat && lon) {
              resolve({
                locName: `${lat}, ${lon}`,
                loc: {lat, lon}
              });
            } else {
              reject(new Error('Could not get latitude and longitude'));
            }
          }, 
          reject
        );
      } else {
        reject(new Error('Geolocation not available'));
      }
    }
  );
};

const fetchIPInfo = () => {
  return fetch('https://ipinfo.io/json').then(
    response => {
      if(response.status >= 400) {
        throw new Error('Bad response');
      }
      return response.json()
    }
  ).catch(
    err => {throw err;}
  ).then(
    ({city, country, postal, loc}) => {
      let locObj;
      if(!loc && !(city && country)) {
        throw new Error('Unable to get location from IP address.');
      } else if(loc) {
        const [ lat, lon ] = loc.split(',').map(s => s.trim());
        locObj = {lat, lon};
      }
      return ({locName: `${city}, ${country}`, loc: locObj});
    }
  ).catch(
    err => {throw err;}
  );
};

const fetchWeather = (config) => {
  const url = 'https://script.google.com/macros/s/AKfycbwjTLjrLNuQfoaHCVqNRQ08GBuC5bUTrDiKzJf10jlh5UUnSug/exec';
  const request = formatRequest(url, config);
  return fetchJsonp(request).then(handleResponse);
};

const handleResponse = (response) => {
  const json = response.json();
  if(json.cod >= 400) {
    throw new Error(json.message);
  }
  return json;
};

const fetchForecast = (config) => {
  config['future'] = 1;
  return fetchWeather(config);
};

const fetchCurrentWeather = fetchWeather;

export { fetchCurrentWeather, fetchForecast, fetchIPInfo, getGeocodeInfo, getLocationInfo, reverseGeocode };