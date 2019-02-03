import React, { PureComponent } from 'react';
import './Lightning.css';

class Lightning extends PureComponent {
	render() {
		return (
			<g className="Lightning">
				<polygon points="14.621,15.807 16.497,11.191 15.957,11.191 13.603,16.988 14.021,17.247 15.784,15.241 13.185,21.571 
					13.647,21.761 16.815,14.048 16.396,13.788 	"/>
				<polygon points="8.621,15.807 10.497,11.191 9.957,11.191 7.602,16.988 8.021,17.247 9.784,15.241 7.185,21.571 7.648,21.761 
					10.815,14.048 10.396,13.788 	"/>
			</g>
		);
	}
}

export default Lightning;
