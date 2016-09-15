import { startTracking, DEFAULT_TRACKING_DELAY } from '../../domain/services/tracker';

export const CURRENT_STATE_START_TRACKER = 'CURRENT_STATE: START_TRACKER';
export const CURRENT_STATE_TRACKER_STARTED = 'CURRENT_STATE: TRACKER_STARTED';
export const CURRENT_STATE_TRACKER_TICK = 'CURRENT_STATE: TRACKER_TICK';

const createStartTracker = () => ({
  type: CURRENT_STATE_START_TRACKER,
});

const createTrackerStarted = () => ({
  type: CURRENT_STATE_TRACKER_STARTED,
});

const createTrackerTick = (timestamp = new Date) => ({
  type: CURRENT_STATE_TRACKER_TICK,
  data: timestamp,
});

const startTracker = () => (dispatch) => {
  dispatch(createStartTracker());

  startTracking(DEFAULT_TRACKING_DELAY, () => {
    dispatch(createTrackerTick());
  });

  dispatch(createTrackerStarted());
};

const actions = {
  startTracker,
};

export default actions;
