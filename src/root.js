import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reduxPromise from 'redux-promise';

import reducers from './reducers/index';

export default function Root({ children, initialState = {} }) {
  const store = createStore(reducers, initialState, applyMiddleware(reduxPromise))
  return (
    <Provider store={store}>{children}</Provider>
  );
}
