const formatDate = (dayObj) => {
  let date = dayObj.getDate();
  let dow = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].filter(
    (dayOfWeek, idx) => idx === dayObj.getDay()
  )[0];
  let month = dayObj.getMonth() + 1;
  return {dow, month, date};
};

const formatRequest = (base, options) => {
  return base + Object.keys(options).reduce((s, k, i) => {
    let prefix = i === 0 ? '?' : '&';
    return s + prefix + k + '=' + options[k];
  }, '');
};

const kelvinToFarenheit = (temp) => temp * (9 / 5) - 459.67;

const kelvinToCelsius = (temp) => temp - 273.15;

const round = (num, places = 0) => {
  const mult = Math.pow(10, places);
  return Math.round(num * mult) / mult;
};

export { formatDate, formatRequest, kelvinToCelsius, kelvinToFarenheit, round };