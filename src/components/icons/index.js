import React from 'react';
import './WeatherIcon.css';
import Sun from './Sun.js';
import Moon from './Moon.js';
import Cloud from './Cloud.js';
import Rain from './Rain.js';
import Lightning from './Lightning.js';
import Snow from './Snow.js';
import Mist from './Mist.js';

const WeatherIcon = ({x = '0px', y = '0px', width, height, children}) => {
	return (
		<svg version="1.1" {...{x, y, width, height}} viewBox="0 0 24 24" className="WeatherIcon">
			{children}
		</svg>
	);
};

const icon50d = () => {
	return (
		<WeatherIcon>
			<Mist />
		</WeatherIcon>
	);
};
const icon50n = () => {
	return (
		<WeatherIcon>
			<Mist />
		</WeatherIcon>
	);
};
const icon01d = () => {
	return (
		<WeatherIcon>
			<Sun />
		</WeatherIcon>
	);
};
const icon01n = () => {
	return (
		<WeatherIcon>
			<Moon />
		</WeatherIcon>
	);
};
const icon02d = () => {
	return (
		<WeatherIcon>
			<WeatherIcon width="16px" x="10px" y="-3px">
				<Sun />
			</WeatherIcon>
			<Cloud />
		</WeatherIcon>
	);
};
const icon02n = () => {
	return (
		<WeatherIcon>
			<WeatherIcon width="16px" x="10px" y="-3px">
				<Moon />
			</WeatherIcon>
			<Cloud />
		</WeatherIcon>
	);
};
const icon03d = () => {
	return (
		<WeatherIcon>
			<WeatherIcon width="22px" x="2px" y="-2px">
				<Cloud />
			</WeatherIcon>
			<WeatherIcon width="22px" x="0px" y="2px">
				<Cloud />
			</WeatherIcon>
		</WeatherIcon>
	);
};
const icon03n = icon03d;

const icon04d = () => {
	return (
		<WeatherIcon>
			<WeatherIcon width="22px" x="2px" y="-2px">
				<Cloud className="DarkCloud" />
			</WeatherIcon>
			<WeatherIcon width="22px" x="0px" y="2px">
				<Cloud />
			</WeatherIcon>
		</WeatherIcon>
	);
};
const icon04n = icon04d;

const icon09d = () => {
	return (
		<WeatherIcon>
			<Rain />
			<WeatherIcon y="-6px">
				<Cloud className="Drizzle" />
			</WeatherIcon>
		</WeatherIcon>
	);
};
const icon09n = icon09d;

const icon10d = () => {
	return (
		<WeatherIcon>
			<Rain />
			<WeatherIcon y="-6px">
				<Cloud className="DarkCloud" />
			</WeatherIcon>
		</WeatherIcon>
	);
};
const icon10n = icon10d;

const icon11d = () => {
	return (
		<WeatherIcon>
			<Lightning />
			<WeatherIcon y="-5px">
				<Cloud className="DarkCloud" />
			</WeatherIcon>
		</WeatherIcon>
	);
};
const icon11n = icon11d;

const icon13d = () => {
	return (
		<WeatherIcon>
			<Snow />
			<WeatherIcon y="-5px">
				<Cloud />
			</WeatherIcon>
		</WeatherIcon>
	);
};
const icon13n = icon13d;

export default {
	'50d': icon50d,
	'50n': icon50n,
	'01d': icon01d,
	'01n': icon01n,
	'02d': icon02d,
	'02n': icon02n,
	'03d': icon03d,
	'03n': icon03n,
	'04d': icon04d,
	'04n': icon04n,
	'09d': icon09d,
	'09n': icon09n,
	'10d': icon10d,
	'10n': icon10n,
	'11d': icon11d,
	'11n': icon11n,
	'13d': icon13d,
	'13n': icon13n
};
