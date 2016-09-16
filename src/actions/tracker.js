import BackgroundTimer from 'react-native-background-timer';

export const CURRENT_STATE_START_TRACKER = 'CURRENT_STATE: START_TRACKER';
export const CURRENT_STATE_TRACKER_STARTED = 'CURRENT_STATE: TRACKER_STARTED';
export const CURRENT_STATE_TRACKER_TICK = 'CURRENT_STATE: TRACKER_TICK';

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

const startTracker = () => (dispatch) => {
  dispatch(createStartTracker());

  const interval = BackgroundTimer.setInterval(() => {
    dispatch(createTrackerTick());
  }, DEFAULT_TRACKING_DELAY);

  dispatch(createTrackerStarted(interval));
};

const actions = {
  startTracker,
};

export default actions;
