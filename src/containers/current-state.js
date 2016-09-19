import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/tracker';
import CurrentState from '../components/organisms/current-state';

const mapStateToProps = (state) => ({
  isSynced: state.tracker.isSynced,
  isTracking: state.tracker.isTracking,
  lastPosition: state.tracker.lastPosition,
  lastUpdate: state.tracker.lastUpdate,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentState);
