import { connect } from 'react-redux';
import Search from '../../components/Search';
import { requestPhotos, setSearchValue } from '../../modules/tabs.js';

let mapStateToProps = state => (
  {
    currentTab: state.tabs[state.currentTab]
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