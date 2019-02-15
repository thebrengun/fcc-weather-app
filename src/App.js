import React, { Component } from 'react';
import './App.css';
import FullForecast from './components/FullForecast/FullForecast.js';
import DetermineLocation from './components/DetermineLocation/DetermineLocation.js';

class App extends Component {

	render() {
		return (
			<DetermineLocation>
				<FullForecast />
			</DetermineLocation>
		);
	}
}

export default App;