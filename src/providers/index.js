const endpoint = process.env.API_ENDPOINT;

if(!endpoint) {
  throw new Error(`Expected environment variable API_ENDPOINT setting the root for API requests. 
    This assumes a development or production deployment of the 
    fcc-weather-app-api (https://github.com/thebrengun/fcc-weather-app-api).`);
}

const formatRequest = (base, options) => {
  return base + Object.keys(options).reduce((s, k, i) => {
    let prefix = i === 0 ? '?' : '&';
    return s + prefix + k + '=' + options[k];
  }, '');
};

const getGeocodeInfo = (q) => {
  return fetch(formatRequest(`${endpoint}/api/v1/geocode/encode`, {address: encodeURIComponent(q)})).then(
    response => {
      if(response.status >= 400) {
        throw new Error('Bad response');
      }
      return response.json();
    }
  ).catch(
    err => {throw err;}
  ).then(
    json => {
      return Object.keys(json).map(key => json[key]).filter((r) => r.address_components);
    }
  );
};

const reverseGeocode = ({lat, lon}) => {
  return fetch(formatRequest(`${endpoint}/api/v1/geocode/decode`, {lat, lon})).then(
    response => {
      if(response.status >= 400) {
        throw new Error('Bad response');
      }
      return response.json();
    }
  ).catch(
    err => {throw err;}
  ).then(
    json => {
      return Object.keys(json).map(key => json[key]).filter((r) => r.address_components);
    }
  );
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

const fetchWeather = (url) => ({lat, lon, id}) => {
  if(id) {
    return fetch(`${url}?id=${encodeURIComponent(id)}`);
  } else if(lat && lon) {
    return fetch(`${url}?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}`);
  } else {
    return Promise.resolve(new Error('Must include either id or lat and lon parameters.'));
  }
};

const fetchCurrentWeather = fetchWeather(`${endpoint}/api/v1/weather/current`);
const fetchForecast = fetchWeather(`${endpoint}/api/v1/weather/daily`);

export { fetchCurrentWeather, fetchForecast, fetchIPInfo, getGeocodeInfo, getLocationInfo, reverseGeocode };