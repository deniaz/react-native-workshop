import {
  TRACKER_START_TRACKER,
  TRACKER_TRACKER_STARTED,
  TRACKER_TRACKER_TICK,
  TRACKER_LOCATION_FOUND,
  TRACKER_NOTIFY_SERVER,
  TRACKER_NOTIFY_SERVER_SUCCESS,
  TRACKER_NOTIFY_SERVER_ERROR,
} from '../actions/tracker';

const handler = {
  [TRACKER_START_TRACKER]: (state, action) => {
    console.debug(TRACKER_START_TRACKER);
    return state;
  },
  [TRACKER_TRACKER_STARTED]: (state, action) => {
    console.debug(TRACKER_TRACKER_STARTED);
    return Object.assign({}, state, {
      interval: action.data,
      isTracking: true,
    });
  },
  [TRACKER_TRACKER_TICK]: (state, action) => {
    console.debug(TRACKER_TRACKER_TICK);
    return Object.assign({}, state, {
      lastUpdate: action.data,
    });
  },
  [TRACKER_LOCATION_FOUND]: (state, action) => {
    console.debug(TRACKER_LOCATION_FOUND);
    return Object.assign({}, state, {
      lastPosition: action.data,
      lastUpdate: new Date,
    });
  },
  [TRACKER_NOTIFY_SERVER_SUCCESS]: (state) => {
    console.debug(TRACKER_NOTIFY_SERVER_SUCCESS);
    return Object.assign({}, state, {
      isSynced: true,
    });
  },
  [TRACKER_NOTIFY_SERVER_ERROR]: (state, action) => {
    console.debug(TRACKER_NOTIFY_SERVER_ERROR);
    console.warn(action);
    return Object.assign({}, state, {
      isSynced: false,
    });
  }
};

const initialState = {
  interval: null,
  isTracking: false,
  isSynced: false,
  lastPosition: null,
  lastUpdate: null,
}

export default function reducer(state = initialState, action) {
  return handler[action.type]
    ? handler[action.type](state, action)
    : state
};
