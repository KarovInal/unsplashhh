import { connect } from 'react-redux';
import Slider from '../../components/Slider';

import { requestPhotos, setSearchValue } from '../../actions/Search';

function mapDispatchToProps(dispatch) {
  return {
    requestPhotos: (tag) => {
      dispatch(setSearchValue(tag))
      dispatch(requestPhotos)
    }
  }
}

export default connect(() => { return {} }, mapDispatchToProps)(Slider);