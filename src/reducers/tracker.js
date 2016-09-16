import {
  CURRENT_STATE_START_TRACKER,
  CURRENT_STATE_TRACKER_STARTED,
  CURRENT_STATE_TRACKER_TICK,
  CURRENT_STATE_LOCATION_FOUND,
  CURRENT_STATE_NOTIFY_SERVER_SUCCESS,
  CURRENT_STATE_NOTIFY_SERVER_ERROR,
} from '../actions/tracker';

const handler = {
  [CURRENT_STATE_START_TRACKER]: (state, action) => {
    console.debug(CURRENT_STATE_START_TRACKER);
    return state;
  },
  [CURRENT_STATE_TRACKER_STARTED]: (state, action) => {
    console.debug(CURRENT_STATE_TRACKER_STARTED);
    return Object.assign({}, state, {
      interval: action.data
      isTracking: true,
    });
  },
  [CURRENT_STATE_TRACKER_TICK]: (state, action) => {
    console.debug(CURRENT_STATE_TRACKER_TICK);
    return Object.assign({}, state, {
      lastUpdate: action.data,
    });
  },
  [CURRENT_STATE_LOCATION_FOUND]: (state, action) => {
    console.debug(CURRENT_STATE_LOCATION_FOUND);
    return Object.assign({}, state, {
      lastPosition: action.data,
      lastUpdate: new Date,
    });
  },
  [CURRENT_STATE_NOTIFY_SERVER_SUCCESS]: (state) => {
    return Object.assign({}, state, {
      isSynced: true,
    });
  },
  [CURRENT_STATE_NOTIFY_SERVER_ERROR]: (state) => {
    return Object.assign({}, state, {
      isSynced: false,
    });
  },
};

const initialState = {
  interval: null,
  isTracking: false,
  isSynced: true,
  lastPosition: null,
  lastUpdate: null,
}

export default function reducer(state = initialState, action) {
  return handler[action.type]
    ? handler[action.type](state, action)
    : state
};
