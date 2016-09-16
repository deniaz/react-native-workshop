import React from 'react';

import { 
  View,
  Text,
} from 'react-native';

import CurrentState from '../../containers/current-state'

const Home = (props) => (
  <View>
    <Text>SAC!</Text>
    <CurrentState />
  </View>
);

export default Home;
