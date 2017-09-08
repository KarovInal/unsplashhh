import { connect } from 'react-redux';
import Search from '../../components/Search/Search.js'

let mapStateToProps = state => (
  {
    currentTab: state.currentTab
  }
)

export default connect(mapStateToProps)(Search);