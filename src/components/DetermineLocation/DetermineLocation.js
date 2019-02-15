import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { determineLocation } from '../../reducers/location.reducer.js';

class DetermineLocation extends PureComponent {
	componentDidMount() {
		if(this.props.location.lat && this.props.location.lon) {
			return;
		}
		
		this.props.determineLocation();
	}

	render() {
		return (
			<React.Fragment>
				{this.props.children}
			</React.Fragment>
		);
	}
}

const mapStateToProps = ({location, weather, sky}) => ({ location });

const mapDispatchToProps = (dispatch) => ({
  determineLocation: () => dispatch(determineLocation())
});

export default connect(mapStateToProps, mapDispatchToProps)(DetermineLocation);