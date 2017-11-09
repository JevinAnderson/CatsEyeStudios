import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import throttle from 'lodash/throttle';
import Thunk from 'redux-thunk';

import rootReducer from '../reducers/root';
import { loadState, saveState } from './persistance';

const middleware = [Thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger({ collapsed: true }));
}

const enhancer = composeWithDevTools(applyMiddleware(...middleware));
const initialState = loadState();
const store = createStore(rootReducer, initialState, enhancer);
store.subscribe(
  throttle(() => {
    const state = store.getState();

    saveState(state);
  }, 500)
);

export default store;