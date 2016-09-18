import BackgroundTimer from 'react-native-background-timer';

export const CURRENT_STATE_START_TRACKER = 'CURRENT_STATE: START_TRACKER';
export const CURRENT_STATE_TRACKER_STARTED = 'CURRENT_STATE: TRACKER_STARTED';
export const CURRENT_STATE_TRACKER_TICK = 'CURRENT_STATE: TRACKER_TICK';
export const CURRENT_STATE_LOCATION_FOUND = 'CURRENT_STATE: LOCATION_FOUND';
export const CURRENT_STATE_LOCATION_ERROR = 'CURRENT_STATE: LOCATION_ERROR';
export const CURRENT_STATE_NOTIFY_SERVER_SUCCESS = 'CURRENT_STATE: NOTIFY_SERVER_SUCCESS';
export const CURRENT_STATE_NOTIFY_SERVER_ERROR = 'CURRENT_STATE: NOTIFY_SERVER_ERROR';

const DEFAULT_TRACKING_DELAY = 300000;

const createStartTracker = () => ({
  type: CURRENT_STATE_START_TRACKER,
});

const createTrackerStarted = (interval) => ({
  type: CURRENT_STATE_TRACKER_STARTED,
  data: interval
});

const createTrackerTick = (timestamp = new Date) => ({
  type: CURRENT_STATE_TRACKER_TICK,
  data: timestamp,
});

const createLocationFound = (position) => ({
  type: CURRENT_STATE_LOCATION_FOUND,
  data: position
});

const createLocationError = (error) => ({
  type: CURRENT_STATE_LOCATION_ERROR,
  data: error
});

const notifyServerSuccess = () => ({
  type: CURRENT_STATE_NOTIFY_SERVER_SUCCESS,
});

const notifyServerError = (error) => ({
  type: CURRENT_STATE_NOTIFY_SERVER_ERROR,
  data: error
});

const notifyServer = (position) => (dispatch) => {
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
