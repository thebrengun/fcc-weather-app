import { fetchIPInfo, getLocationInfo, reverseGeocode } from '../providers/index.js';

const SET_LAT_LON = 'SET_LAT_LON';
const SET_LOC_NAME = 'SET_LOC_NAME';

const setLatLon = ({lat, lon}) => ({type: SET_LAT_LON, lat, lon});
const setLocName = (name) => ({type: SET_LOC_NAME, name});
const determineLocation = () => (dispatch, getState) => {
	dispatch(setLocName('Fetching location...'));
	getLocation().then(
		(locationInfo) => {
			dispatch(setLatLon(locationInfo.loc));
			getLocationName(locationInfo).then(
				({results}) => dispatch(setLocName(getBestResult(results).formatted_address || ''))
			);
		}
	);
};

const getLocationName = (locationInfo) => {
	return reverseGeocode(locationInfo.loc).catch(err => ({
		results: [{
			formatted_address: locationInfo.locName,
			address_components: []
		}]
	}));
};

const getLocation = () => {
	const returnDefaultLocation = (err) => ({
		locName: "Hell's Kitchen, New York City",
		loc: {
			lat: 40.7630299,
			lon: -73.9950965
		}
	});
	return fetchIPInfo().catch(getLocationInfo).catch(returnDefaultLocation);
};

const getBestResult = (results) => {
	// Selected result should be the first result that doesn't contain point_of_interest, establishment, street_number, or route
	let selectedResult = results.filter(
		({address_components}) => {
			for(let i = 0; i < address_components.length; i++) {
				const types = address_components[i].types;
				if(
					types.indexOf('point_of_interest') > -1 || 
					types.indexOf('establishment') > -1 || 
					types.indexOf('street_number') > -1 || 
					types.indexOf('route')  > -1
				) {
					return false;
				}
			}
			return true;
		}
	).slice(0, 1);

	if(selectedResult.length === 0 && results.length > 0) {
		selectedResult = results[0];
	} else if(selectedResult.length === 0) {
		selectedResult = {};
	} else {
		selectedResult = selectedResult[0];
	}

	return selectedResult;
};

const defaultState = {
	name: 'Los Angeles, CA',
	lat: 40.6971494,
	lon: -74.2598655
};

const reducer = (state = defaultState, action) => {
	switch(action.type) {
		case SET_LOC_NAME:
			return {...state, name: action.name};
		case SET_LAT_LON:
			return {...state, lat: action.lat, lon: action.lon};
		default:
			return state;
	}
}

export { reducer, setLatLon, setLocName, determineLocation };