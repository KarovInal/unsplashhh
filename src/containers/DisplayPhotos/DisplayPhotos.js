import { connect } from 'react-redux';
import DisplayPhotos from '../../components/DisplayPhotos';

function mapStateToProps(state) {
  let { currentTab, fetch } = state;

  return {
    photos: state.tabs[currentTab].photos,
    fetch
  }
}

export default connect(mapStateToProps)(DisplayPhotos)