import React from 'react';
import {
  Navigator,
} from 'react-native';

import { Provider } from 'react-redux';

import { defaultRoute, route, store } from './';

const SACTracker = () => (
  <Provider store={store}>
    <Navigator
      initialRoute={{ id: 'home' }}
      renderScene={route}
    />
  </Provider>
);

export default SACTracker;
