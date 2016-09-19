import { connect } from 'react-redux';
import Home from '../components/scenes/home';

const mapStateToProps = (state) => ({
  isSynced: state.tracker.isSynced,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
