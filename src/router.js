import React from 'react';
import Home from './containers/home';

const router = (navigator) => ({
  home: <Home navigator={navigator} />,
});

export default (route, navigator) => (
  router(navigator)[route.id] ? router(navigator)[route.id] : router(navigator).home
);
