import { connect } from 'react-redux';
import DisplayPhotos from '../../components/DisplayPhotos/DisplayPhotos.js';

function mapStateToProps(state) {
  let { currentTab, isFetch } = state;

  return {
    photos: state.tabs[currentTab].photos,
    isFetch
  }
}

export default connect(mapStateToProps)(DisplayPhotos)