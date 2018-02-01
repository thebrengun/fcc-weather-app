import debounce from 'lodash/debounce';
import { getGeocodeInfo } from '../providers/index.js';

const EDIT_SEARCH_FIELD = 'EDIT_SEARCH_FIELD';
const BLUR_SEARCH_FIELD = 'BLUR_SEARCH_FIELD';
const UPDATE_SEARCH_FIELD = 'UPDATE_SEARCH_FIELD';
const UPDATE_SUGGESTIONS = 'UPDATE_SUGGESTIONS';
const DEBOUNCE_LOOKUP_SUGGESTIONS = 'DEBOUNCE_LOOKUP_SUGGESTIONS';

const editSearchField = () => ({type: EDIT_SEARCH_FIELD});
const blurSearchField = () => ({type: BLUR_SEARCH_FIELD});
const updateSearchField = (searchFieldText) => ({type: UPDATE_SEARCH_FIELD, searchFieldText});
const updateSuggestions = (suggestions) => ({type: UPDATE_SUGGESTIONS, suggestions});
const debounceLookupSuggestions = (fn) => ({type: DEBOUNCE_LOOKUP_SUGGESTIONS, fn});
const updateSearchFieldAndLookupSuggestions = (searchFieldText) => (dispatch, getState) => {
	dispatch(updateSearchField(searchFieldText));
	const { lookupLocation: state } = getState();
	if(state.debounceLookupSuggestions) { state.debounceLookupSuggestions.cancel(); }
	if(searchFieldText) {
		const debouncedLookupSuggestionsFn = () => getGeocodeInfo(searchFieldText).then(
			({results}) => dispatch(updateSuggestions(results))
		);
		const fn = debounce(debouncedLookupSuggestionsFn, 600, {maxWait: 1000});
		fn();
		dispatch(debounceLookupSuggestions(fn));
	}
};

const defaultState = {
	editingSearchField: false,
	searchField: '',
	suggestions: []
};

const reducer = (state = defaultState, action) => {
	switch(action.type) {
		case DEBOUNCE_LOOKUP_SUGGESTIONS:
			return {...state, debounceLookupSuggestions: action.fn};
		case UPDATE_SUGGESTIONS:
			// Don't update suggestions if not actively editing the location
			return {...state, suggestions: state.editingSearchField ? action.suggestions : []};
		case UPDATE_SEARCH_FIELD:
			return {...state, searchField: action.searchFieldText};
		case EDIT_SEARCH_FIELD:
			return {...state, editingSearchField: true};
		case BLUR_SEARCH_FIELD:
			if(state.debounceLookupSuggestions) {
				state.debounceLookupSuggestions.cancel();
			}
			return {...state, editingSearchField: false, searchField: '', suggestions: []};
		default:
			return state;
	}
};

export { reducer, editSearchField, blurSearchField, updateSearchFieldAndLookupSuggestions, updateSuggestions };