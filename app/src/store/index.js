import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import history from '~/routes/history';
import rootSaga from './sagas';
import rootReducer from './ducks';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(connectRouter(history)(rootReducer), applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
