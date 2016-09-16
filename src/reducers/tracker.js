import {
  CURRENT_STATE_START_TRACKER,
  CURRENT_STATE_TRACKER_STARTED,
  CURRENT_STATE_TRACKER_TICK,
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
};

const initialState = {
  interval: null,
  isTracking: false,
  lastUpdate: null,
}

export default function reducer(state = initialState, action) {
  return handler[action.type]
    ? handler[action.type](state, action)
    : state
};
