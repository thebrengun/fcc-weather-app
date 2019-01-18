import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './LookupLocation.css';
import { connect } from 'react-redux';
import { editSearchField, blurSearchField, updateSearchFieldAndLookupSuggestions } from '../reducers/lookupLocation.reducer.js';
import { setLatLon, setLocName } from '../reducers/location.reducer.js';
import locationIcon from '../assets/ic_location_on_white_24px.svg';
import locationIconBlk from '../assets/ic_location_on_black_24px.svg';

class LookupLocation extends PureComponent {

  componentDidUpdate = (prevProps) => {
    if(prevProps.editing === false && this.props.editing === true) {
      this.searchField.focus();
    }
  }

  render() {
    return (
      <div className={`location-box-wrapper ${this.props.sky}`}>
        <div className={`location-box${this.props.editing ? ' editing' : ''}`}>
          <div className="location-icon" onClick={this.props.editSearchField}>
            <img src={this.props.editing ? locationIconBlk : locationIcon} alt="Location Pin" />
          </div>
          {this.props.editing ? 
            <input 
              value={this.props.searchField} 
              onChange={this.props.updateSearchField} 
              onBlur={(e) => setTimeout(this.props.blurSearchField, 50)} 
              className="location-search-field" 
              ref={(ref) => {this.searchField = ref;}}
            /> :
            <div className="location-string" onClick={this.props.editSearchField}>
              {this.props.locationName}
            </div>
          }
        </div>
        {this.props.locationSuggestions && this.props.locationSuggestions.length > 0 && 
          <div className="location-suggestions">
            {this.props.locationSuggestions.map(
              ({formatted_address, geometry, place_id}, idx) => 
                <div 
                  onClick={this.props.selectLocation(
                    formatted_address, 
                    {lat: geometry.location.lat, lon: geometry.location.lng}
                  )} 
                  key={`${idx}-${place_id}`}
                >
                  {formatted_address}
                </div>
            )}
          </div>
        }
      </div>
    );
  }
}

LookupLocation.propTypes = {
  editing: PropTypes.bool,
  editSearchField: PropTypes.func,
  searchField: PropTypes.string,
  updateSearchField: PropTypes.func,
  blurSearchField: PropTypes.func,
  locationName: PropTypes.string,
  locationSuggestions: PropTypes.array,
  selectLocation: PropTypes.func
};

const mapStateToProps = ({location, lookupLocation, sky}) => ({
  locationName: location.name,
  locationSuggestions: lookupLocation.suggestions,
  searchField: lookupLocation.searchField,
  editing: lookupLocation.editingSearchField,
  sky
});

const mapDispatchToProps = (dispatch) => ({
  editSearchField: (e) => dispatch(editSearchField()),
  updateSearchField: (e) => dispatch(updateSearchFieldAndLookupSuggestions(e.target.value)),
  blurSearchField: () => dispatch(blurSearchField()),
  selectLocation: (name, latLon) => (e) => {
    dispatch(setLocName(name));
    dispatch(setLatLon(latLon));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LookupLocation);