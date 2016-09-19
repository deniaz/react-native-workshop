import React, { PropTypes } from 'react';

import { 
  View,
  StyleSheet,
  Text,
} from 'react-native';

import CurrentState from '../../containers/current-state'

const ALIZARIN = '#e74c3c';
const EMERALD = '#2ecc71';

const Home = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: props.isSynced ? EMERALD : ALIZARIN }]}>
      <Text style={styles.title}>Tracker</Text>

      <CurrentState />
    </View>
  )
};

Home.propTypes = {
  isSynced: PropTypes.bool.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 160,
  },
  title: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ffffff',
    textAlign: 'center',
  },
  infoHeader: {
    color: '#ffffff',
    textAlign: 'center',
  },
  infoData: {
    color: '#ffffff',
    textAlign: 'center',
  }
});

export default Home;
