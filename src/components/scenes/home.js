import React from 'react';

import { 
  View,
  StyleSheet,
  Text,
} from 'react-native';

import CurrentState from '../../containers/current-state'

const ALIZARIN = '#e74c3c';
const EMERALD = '#2ecc71';

const Home = (props) => (
  <View style={{ backgroundColor: props.isSynced ? EMERALD : ALIZARIN }, styles.container}>
    <Text style={styles.title}>Tracker</Text>
    <Text style={styles.subtitle}>Last Update 7 minutes ago</Text>

    <View>
      <Text>The Rest Data</Text>
    </View>
    <CurrentState />
  </View>
);

const styles = StyleSheet.create({
  container: {
    color: '#ffffff',
    textAlign: 'center',
  },
  title: {},
  subtitle: {},
  infoHeader: {},
  infoData: {}
});

export default Home;
