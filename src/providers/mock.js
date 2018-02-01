const promisify = (jsonString) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 300, JSON.parse(jsonString));
  });
};

const getGeocodeInfo = (q) => {
  return promisify(JSON.stringify([]));
};

const reverseGeocode = ({lat, lon}) => {
  return promisify(
    JSON.stringify({
      results: [
        {
          address_components: [{types: ['political']}],
          formatted_address: "Jackson Heights, Queens, NY, USA"
        }
      ]
    })
  );
};

const getLocationInfo = () => {
  return promisify(JSON.stringify({locName: "40.752728600000005, -73.8853254", loc: {"lat":40.752728600000005,"lon":-73.8853254}}));
};

const fetchIPInfo = () => {
  return promisify(JSON.stringify({locName: "Jackson Heights, US", loc: {"lat":40.752728600000005,"lon":-73.8853254}}));
};

const fetchWeather = (config) => {
  return promisify(JSON.stringify({"coord":{"lon":-73.89,"lat":40.75},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}, {"id":803,"main":"Hurricanes","description":"hurricanes","icon":"04d"}],"base":"stations","main":{"temp":302.69,"pressure":1011,"humidity":45,"temp_min":302.15,"temp_max":304.15},"visibility":16093,"wind":{"speed":5.1,"deg":280,"gust":7.7},"clouds":{"all":40},"dt":1503168900,"sys":{"type":1,"id":1969,"message":0.0055,"country":"US","sunrise":1503137446,"sunset":1503186379},"id":5128920,"name":"North Beach","cod":200}));
};

const fetchForecast = (config) => {
  return promisify(JSON.stringify({"city":{"id":5128920,"name":"North Beach","coord":{"lon":-73.876,"lat":40.7659},"country":"US","population":0},"cod":"200","message":0.169011,"cnt":7,"list":[{"dt":1503158400,"temp":{"day":302.42,"min":297.05,"max":302.42,"night":297.05,"eve":301.48,"morn":302.42},"pressure":1020.8,"humidity":89,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"speed":2.57,"deg":245,"clouds":12},{"dt":1503244800,"temp":{"day":298.03,"min":293.84,"max":300.65,"night":295.8,"eve":300.65,"morn":293.84},"pressure":1028.35,"humidity":72,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":2.76,"deg":317,"clouds":0},{"dt":1503331200,"temp":{"day":300.53,"min":293.21,"max":302.76,"night":298.3,"eve":302.76,"morn":293.21},"pressure":1032.95,"humidity":65,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":2.17,"deg":235,"clouds":0},{"dt":1503417600,"temp":{"day":302.47,"min":295.77,"max":302.47,"night":299.66,"eve":300.4,"morn":295.77},"pressure":1016.23,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":3.79,"deg":207,"clouds":4},{"dt":1503504000,"temp":{"day":301.31,"min":292.85,"max":301.31,"night":292.85,"eve":297.91,"morn":300.25},"pressure":1008.37,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":2.59,"deg":294,"clouds":27},{"dt":1503590400,"temp":{"day":296.04,"min":289.67,"max":296.04,"night":289.67,"eve":293.72,"morn":291.24},"pressure":1014.58,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":3.02,"deg":12,"clouds":0},{"dt":1503676800,"temp":{"day":294.54,"min":288.52,"max":294.54,"night":288.52,"eve":292.74,"morn":288.87},"pressure":1020.3,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":3.54,"deg":2,"clouds":0}]}));
};

const fetchCurrentWeather = fetchWeather;

export { fetchCurrentWeather, fetchForecast, fetchIPInfo, getGeocodeInfo, getLocationInfo, reverseGeocode };