import { connect } from 'react-redux';
import Search from '../../components/Search/Search.js';
import { requestPhotos, setSearchValue } from '../../actions/tabs.js';

let mapStateToProps = state => (
  {
    currentTab: state.currentTab
  }
)

let mapDispatchToProps = dispatch => (
  {
    requestPhotos: () => {
      dispatch(requestPhotos)
    },
    setSearchValue: (newSearchValue) => {
      dispatch(setSearchValue(newSearchValue))
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Search);