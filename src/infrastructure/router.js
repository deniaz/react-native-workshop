import React from 'react';
import Home from '../ui/components/scenes/home';

const router = (navigator) => ({
  home: <Home navigator={navigator} />,
});

export default (route, navigator) => (
  router(navigator)[route.id] ? router(navigator)[route.id] : router(navigator).home
);
