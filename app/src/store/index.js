import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import history from '~/routes/history';
import createRootReducer from './ducks';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(history), // root reducer with router state
  // false,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      sagaMiddleware,
    ),
  ),
);

export default store;
