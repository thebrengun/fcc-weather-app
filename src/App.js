import React, { Component } from 'react';
import './App.css';
import FullForecast from './components/FullForecast.js';
import DetermineLocation from './components/DetermineLocation.js';

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