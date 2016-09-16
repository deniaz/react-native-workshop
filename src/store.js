import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

export const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunkMiddleware,
  ),
);

export default store;
