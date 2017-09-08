import { connect } from 'react-redux';
import Search from '../../components/Search/Search.js';
import { FetchImages } from '../../actions/tabs.js';

let mapStateToProps = state => (
  {
    currentTab: state.currentTab
  }
)

let mapDispatchToProps = dispatch => (
  {
    fetchPhotos: () => {
      dispatch(FetchImages)
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Search);