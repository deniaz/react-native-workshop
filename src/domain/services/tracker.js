import BackgroundTimer from 'react-native-background-timer';

let interval = null;

export const DEFAULT_TRACKING_DELAY = 15000;

export const startTracking = (delay = DEFAULT_TRACKING_DELAY, callback) => {
  interval = BackgroundTimer.setInterval(() => {
    callback();
  }, delay);
};

export const stopTracking = () => {
  BackgroundTimer.clearInterval(interval);
};
