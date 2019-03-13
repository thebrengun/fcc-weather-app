# Weather App

This project was created as part of the [Free Code Camp curriculum](https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/show-the-local-weather/). 

## Live Demo
[https://thebrengun.github.io/fcc-weather-app/](https://thebrengun.github.io/fcc-weather-app/)

It uses Open Weather for weather data and Google's Geocode service to provide location suggestions to the user and location data to Open Weather. 

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This web app uses its own api wrapper Weather App API which has been deployed to Google Cloud. See the [Weather App API Repository](https://github.com/thebrengun/fcc-weather-app-api) for more information.

## Features

- Displays weather in user's current location
- Shows an appropriate icon based on the current weather
- User can toggle between Fahrenheit and Celsius by tapping or clicking temperature.
- Displays 7 day forecast
- User can change location by typing and selecting location selection based on input text
- Progressive enhancements from mobile to desktop size

## Development

Configure development API base address by creating a .env.development file in the project root with an environment variable REACT_APP_API_ENDPOINT:

REACT_APP_API_ENDPOINT=https://localhost:PORT

All environment variables must be prefixed with REACT_APP_ as [described in the docs](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). See Create React App documentation for additional information about development.

## Production

Configure production API base address by creating a .env.production file in the project root with an environment variable API_ENDPOINT:

API_ENDPOINT=https://my-api-deployment.com

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). See Create React App documentation for additional information about deployment.
