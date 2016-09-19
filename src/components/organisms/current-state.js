import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class CurrentState extends Component {
  static propTypes = {
    isSynced: PropTypes.bool.isRequired,
    isTracking: PropTypes.bool.isRequired,
    lastPosition: PropTypes.object,
    lastUpdate: PropTypes.object,
    startTracker: PropTypes.func.isRequired,
  };

  static defaultProps = {
    lastUpdate: null,
  };

  componentDidMount() {
    this.props.startTracker();
  }

  renderState() {
    const { isSynced, lastUpdate } = this.props;

    if (isSynced) {
      const updated = moment(lastUpdate).fromNow();
      return (
        <Text style={[styles.text]}>
          Last Update sent {updated}
        </Text>
      )
    }

    return (
      <View>
        <Text style={[styles.text]}>Failed to send position to server.</Text>
      </View>
    )
  }

  renderPosition() {
    const { lastPosition } = this.props;

    if (!lastPosition) {
      return null;
    }

    return (
      <View style={styles.data}>
        <View>
          <Text style={[styles.heading]}>
            Latitude: <Text style={{ fontWeight: 'bold' }}>{lastPosition.coords.latitude}</Text>
            </Text>
        </View>

        <View>
          <Text style={[styles.heading]}>
            Longitude: <Text style={{ fontWeight: 'bold' }}>{lastPosition.coords.longitude}</Text>
          </Text>
        </View>

        <View>
          <Text style={[styles.heading]}>
            Accuracy: <Text style={{ fontWeight: 'bold' }}>{lastPosition.coords.accuracy}m</Text>
          </Text>
        </View>
      </View>
    )
  }

  render() {
    const { isTracking } = this.props;

    return (
      <View style={styles.container}>
        <Text style={[styles.text]}>{isTracking ? 'Currently Tracking' : 'Not Tracking'}</Text>
        {this.renderState()}
        {this.renderPosition()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  data: {
    marginTop: 40,
  },
  heading: {
    color: '#ffffff',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#ffffff'
  }
});
