const SET_SKY = 'SET_SKY';

const setSky = (dt, sunrise, sunset, clouds) => ({
	type: SET_SKY,
	sky: dt >= sunrise && dt <= sunset ? 'day' : 'night'
});

const reducer = (state = null, action) => {
	switch(action.type) {
		case SET_SKY:
			return action.sky;
		default:
			return state;
	}
};

export { reducer, setSky };