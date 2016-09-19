import BackgroundTimer from 'react-native-background-timer';

export const TRACKER_START_TRACKER = 'TRACKER: START_TRACKER';
export const TRACKER_TRACKER_STARTED = 'TRACKER: TRACKER_STARTED';
export const TRACKER_TRACKER_TICK = 'TRACKER: TRACKER_TICK';
export const TRACKER_LOCATION_FOUND = 'TRACKER: LOCATION_FOUND';
export const TRACKER_LOCATION_ERROR = 'TRACKER: LOCATION_ERROR';
export const TRACKER_NOTIFY_SERVER_SUCCESS = 'TRACKER: NOTIFY_SERVER_SUCCESS';
export const TRACKER_NOTIFY_SERVER_ERROR = 'TRACKER: NOTIFY_SERVER_ERROR';
export const TRACKER_NOTIFY_SERVER = 'TRACKER: NOTIFY_SERVER';

const DEFAULT_TRACKING_DELAY = 5000;

const createStartTracker = () => ({
  type: TRACKER_START_TRACKER,
});

const createTrackerStarted = (interval) => ({
  type: TRACKER_TRACKER_STARTED,
  data: interval
});

const createTrackerTick = (timestamp = new Date) => ({
  type: TRACKER_TRACKER_TICK,
  data: timestamp,
});

const createLocationFound = (position) => ({
  type: TRACKER_LOCATION_FOUND,
  data: position
});

const createLocationError = (error) => ({
  type: TRACKER_LOCATION_ERROR,
  data: error
});

const notifyServerSuccess = () => ({
  type: TRACKER_NOTIFY_SERVER_SUCCESS,
});

const notifyServerError = (error) => ({
  type: TRACKER_NOTIFY_SERVER_ERROR,
  data: error
});

const createNotifyServer = () => ({
  type: TRACKER_NOTIFY_SERVER,
});

const notifyServer = (position) => (dispatch) => {
  dispatch(createNotifyServer());
  
  const payload = JSON.stringify({
    coords: {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      accuracy: position.coords.accuracy
    }
  });

  fetch('https://private-6b85a9-rntracker.apiary-mock.com/beacons', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: payload
  })
  .then((response) => {
    if (response.ok) {
      dispatch(notifyServerSuccess())
    } else {
      dispatch(notifyServerError(response))
    }
  })
  .catch((error) => {
    dispatch(notifyServerError(error))
  })
};

const getLocation = () => (dispatch) => {
  navigator
    .geolocation
    .getCurrentPosition(
      (position) => {
        dispatch(createLocationFound(position));
        dispatch(notifyServer(position));
      },
      (error) => { dispatch(createLocationError(error)); },
      {
        enableHighAccuracy: true,
        maximumAge: DEFAULT_TRACKING_DELAY
      }
    )
}

const startTracker = () => (dispatch) => {
  dispatch(createStartTracker());

  const interval = BackgroundTimer.setInterval(() => {
    dispatch(getLocation());
  }, DEFAULT_TRACKING_DELAY);


  dispatch(createTrackerStarted(interval));
};

const actions = {
  startTracker,
};

export default actions;
