import { connect } from 'react-redux';
import DisplayPhotos from '../../components/DisplayPhotos/DisplayPhotos.js';

function mapStateToProps(state) {
  let { currentTab } = state;

  return {
    photos: state.tabs[currentTab].photos
  }
}

export default connect(mapStateToProps)(DisplayPhotos)