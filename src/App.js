import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FullForecast from './components/FullForecast.js';
import DetermineLocation from './components/DetermineLocation.js';

const Home = () => (
	<DetermineLocation>
		<FullForecast />
	</DetermineLocation>
);

class App extends Component {

	render() {
		return (
			<Router>
				<Route path="/" exact component={Home} />
			</Router>
		);
	}
}

export default App;