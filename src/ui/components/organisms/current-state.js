import React, { Component, PropTypes } from 'react';

import { 
  Text,
  View,
} from 'react-native';

export default class CurrentState extends Component {
  static propTypes = {
    isTracking: PropTypes.bool.isRequired,
    lastUpdate: PropTypes.object,
    startTracker: PropTypes.func.isRequired,
  };

  static defaultProps = {
    lastUpdate: null,
  };

  componentDidMount() {
    this.props.startTracker();
  }

  render() {
    const { isTracking, lastUpdate } = this.props;

    return (
      <View>
        <Text>Current State</Text>
        <Text>{isTracking ? 'Tracking' : 'Not Tracking'}</Text>
        <Text>{lastUpdate ? lastUpdate.toString() : 'No Updates.'}</Text>
      </View>
    )
  }
}
